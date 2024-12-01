import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { InjectEntityManager, InjectRepository } from '@nestjs/typeorm';
import {
  forwardRef,
  Inject,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { EntityManager } from 'typeorm';
import { ResultResponse } from 'src/models/base/result_response';
import { PageDto, PageMetaDto } from 'src/models/base/dtos';
import { ExceptionHelper } from 'src/application/helpers/exception.helper';
import { cleanObject } from '../helpers/mapper_object';
import { IStockManagementService } from 'src/application/interfaces/stock-management/istock_management.service';
import { IStockManagementRepository } from 'src/application/interfaces/stock-management/istock_management.repository';
import { GetAllStockRequest } from 'src/models/stock-management/get_all_stock.request';
import { StockListResponse } from 'src/models/stock-management/stock_list.response';
import { UpdateStockRequest } from 'src/models/stock-management/update_stock.request';
import { StockResponse } from 'src/models/base/stock_response';
import { StockManagementEntity } from 'src/infrastructure/data-access/entities/stock-management/stock_management.entity';
import { CreateStockRequest } from 'src/models/stock-management/create_stock.request';
import { VendorManagementService } from '../vendor-management/vendor_management.service';
import { VendorManagementEntity } from 'src/infrastructure/data-access/entities';
import { VendorResponse } from 'src/models/base/vendor_response';

@Injectable()
export class StockManagementService implements IStockManagementService {
  constructor(
    @InjectRepository(StockManagementEntity)
    private readonly repository: IStockManagementRepository,
    @InjectMapper() private mapper: Mapper,
    @InjectEntityManager() private _entityManager: EntityManager,
    @Inject(forwardRef(() => VendorManagementService))
    private readonly vendorService: VendorManagementService,
  ) {}

  public async createStock(request: CreateStockRequest): Promise<string> {
    try {
      const entity = this.mapper.map(
        request,
        CreateStockRequest,
        StockManagementEntity,
      );
      let vendor = await this.vendorService.findOneByName(request.vendor); //finding vendor from vendorId
      entity.createdBy = 'admin';
      (entity.vendor = vendor), await this.repository.save(entity);
      return entity.id;
    } catch (error) {
      if (error.code === '23505' && error.detail.includes('transId')) {
        // '23505' is the PostgreSQL error code for unique violations
        throw ExceptionHelper.BadRequest(
          'Transaction Id already exists, please use a different one.',
        );
      }
      throw ExceptionHelper.BadRequest(
        error?.message || 'Something went wrong',
      );
    }
  }

  public async getStock(
    pageOptionsDto: GetAllStockRequest,
  ): Promise<ResultResponse<PageDto<StockListResponse>>> {
    try {
      const [stocks, count] = await this.repository.findAndCount({
        where: {
          isDeleted: false,
          stockType: pageOptionsDto.stockType,
        },
        //relations: ['vendorId'],    no need eager:true in stockManagementEntity
        loadEagerRelations: true,
        skip: pageOptionsDto.skip,
        take: pageOptionsDto.take,
      });

      const pageMetaDto = new PageMetaDto({
        itemCount: count,
        pageOptionsDto: pageOptionsDto,
      });

      // let res = this.mapper.mapArray(
      //   stocks,
      //   StockManagementEntity,
      //   StockListResponse,
      // );

      //manual mapping
      const res = stocks.map((stock) => ({
        ...this.mapper.map(stock, StockManagementEntity, StockListResponse),
        vendor: this.mapper.map(
          stock.vendor,
          VendorManagementEntity,
          VendorResponse,
        ),
      }));

      const pageDtoRes = new PageDto<StockListResponse>(res, pageMetaDto);

      return ResultResponse.ok(pageDtoRes, 'Fetched payout successfully');
    } catch (error) {
      throw ExceptionHelper.BadRequest(error.message);
    }
  }
  // New deleteVendor method
  public async deleteStock(
    vendor: string,
    deletedBy?: string,
  ): Promise<string> {
    try {
      const findVendor = await this.repository.findOne({
        where: { id: vendor, isDeleted: false },
      });

      if (!vendor) {
        throw new NotFoundException(
          `Vendor with ID ${vendor} not found or already deleted.`,
        );
      }

      // Mark the vendor as deleted and set the deletedBy user
      findVendor.isDeleted = true;
      findVendor.updatedBy = deletedBy || 'system';

      await this.repository.save(findVendor);

      return vendor;
    } catch (error) {
      throw ExceptionHelper.BadRequest(
        error?.message || 'Something went wrong',
      );
    }
  }

  async getStockById(stockId: string): Promise<StockManagementEntity> {
    try {
      const stock = await this.repository.findOne({
        where: { id: stockId, isDeleted: false },
      });

      if (!stock) {
        throw new NotFoundException(
          `Vendor with ID ${stockId} not found or is already deleted.`,
        );
      }

      return stock; // Return the full vendor entity
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error; // Re-throw specific exceptions
      }
      throw new InternalServerErrorException('An unexpected error occurred.');
    }
  }

  public async updateStock(
    stockId: string,
    request: UpdateStockRequest,
  ): Promise<StockResponse> {
    try {
      // Check if vendorId is provided in the request
      if (!request.vendor) {
        throw ExceptionHelper.BadRequest(`vendorId is required.`);
      }

      const stock = await this.repository.findOne({
        where: { id: stockId, isDeleted: false },
      });

      if (!stock) {
        throw ExceptionHelper.NotFound(
          `Stock with ID ${stockId} not found or already deleted.`,
        );
      }

      //Check if the vendorId exists
      const vendor = await this.vendorService.getVendorById(request.vendor);

      if (!vendor) {
        throw ExceptionHelper.BadRequest(
          `Vendor with ID ${request.vendor} does not exist.`,
        );
      }

      // Cleaning the request object to remove any undefined fields
      const cleanedRequest = cleanObject(request);

      // Use Object.assign to update the vendor with cleanedRequest fields
      Object.assign(stock, cleanedRequest);

      stock.updatedBy = 'admin'; // Use actual user details here if needed
      stock.updatedDate = new Date();
      await this.repository.save(stock);

      const stockResponse = this.mapper.map(
        stock,
        StockManagementEntity,
        StockResponse,
      );

      stockResponse.vendor = vendor?.id || null;
      return stockResponse;
      //return this.mapper.map(stock, StockManagementEntity, StockResponse);
    } catch (error) {
      throw ExceptionHelper.BadRequest(
        error?.message || 'Something went wrong',
      );
    }
  }
}
