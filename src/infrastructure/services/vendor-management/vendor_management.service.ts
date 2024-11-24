import { Mapper } from '@automapper/core';
import { v4 as uuidv4 } from 'uuid';
import { InjectMapper } from '@automapper/nestjs';
import { InjectEntityManager, InjectRepository } from '@nestjs/typeorm';
import {
  forwardRef,
  Inject,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { IVendorManagementService } from 'src/application/interfaces/vendor-management/ivendor_management.service';
import { GetAllVendorRequest } from 'src/models/vendor-management/get_all_vendor_request';
import { VendorListResponse } from 'src/models/vendor-management/vendor_list.response';
import { EntityManager } from 'typeorm';
import { ResultResponse } from 'src/models/base/result_response';
import { PageDto, PageMetaDto } from 'src/models/base/dtos';
import { CreateVendorRequest } from 'src/models/vendor-management/create_vendor.request';
import { VendorManagementEntity } from 'src/infrastructure/data-access/entities';
import { IVendorManagementRepository } from 'src/application/interfaces/vendor-management/ivendor_management.repository';
import { ExceptionHelper } from 'src/application/helpers/exception.helper';
import { VendorResponse } from 'src/models/base/vendor_response';
import { UpdateVendorRequest } from 'src/models/vendor-management/update_vendor.request';
import { cleanObject } from '../helpers/mapper_object';
import { StockManagementService } from '../stock-management/stock_management.service';

@Injectable()
export class VendorManagementService implements IVendorManagementService {
  constructor(
    @InjectRepository(VendorManagementEntity)
    private readonly repository: IVendorManagementRepository,
    @InjectMapper() private mapper: Mapper,
    @InjectEntityManager() private _entityManager: EntityManager,
    @Inject()//(forwardRef(() => StockManagementService))
    private readonly stockService: StockManagementService,
  ) {}

  public async createVendor(request: CreateVendorRequest): Promise<string> {
    try {
      const entity = this.mapper.map(
        request,
        CreateVendorRequest,
        VendorManagementEntity,
      );
      // entity.id = uuidv4();
      entity.createdBy = 'admin';
      await this.repository.save(entity);
      return entity.id;
    } catch (error) {
      if (error.code === '23505' && error.detail.includes('Email')) {
        // '23505' is the PostgreSQL error code for unique violations
        throw ExceptionHelper.BadRequest(
          'Email already exists, please use a different one.',
        );
      }
      throw ExceptionHelper.BadRequest(
        error?.message || 'Something went wrong',
      );
    }
  }

  public async getVendor(
    pageOptionsDto: GetAllVendorRequest,
  ): Promise<ResultResponse<PageDto<VendorListResponse>>> {
    try {
      //console.log("First"+pageOptionsDto);
      // console.log("Second"+pageOptionsDto.vendorType);
      const [vendors, count] = await this.repository.findAndCount({
        where: {
          isDeleted: false,
          vendorType: pageOptionsDto.vendorType,
        },
        loadEagerRelations: true,
        skip: pageOptionsDto.skip,
        take: pageOptionsDto.take,
      });

      const pageMetaDto = new PageMetaDto({
        itemCount: count,
        pageOptionsDto: pageOptionsDto,
      });

      let res = this.mapper.mapArray(
        vendors,
        VendorManagementEntity,
        VendorListResponse,
      );

      const pageDtoRes = new PageDto<VendorListResponse>(res, pageMetaDto);

      return ResultResponse.ok(pageDtoRes, 'Fetched payout successfully');
    } catch (error) {
      throw ExceptionHelper.BadRequest(error.message);
    }
  }
  // New deleteVendor method
  public async deleteVendor(
    vendorId: string,
    deletedBy?: string,
  ): Promise<string> {
    try {
      const vendor = await this.repository.findOne({
        where: { id: vendorId, isDeleted: false },
      });

      if (!vendor) {
        throw new NotFoundException(
          `Vendor with ID ${vendorId} not found or already deleted.`,
        );
      }

      // Mark the vendor as deleted and set the deletedBy user
      vendor.isDeleted = true;
      vendor.updatedBy = deletedBy || 'system';

      await this.repository.save(vendor);

      return vendorId;
    } catch (error) {
      throw ExceptionHelper.BadRequest(
        error?.message || 'Something went wrong',
      );
    }
  }

  async getVendorById(vendorId: string): Promise<VendorManagementEntity> {
    try {
      const vendor = await this.repository.findOne({
        where: { id: vendorId, isDeleted: false },
      });

      if (!vendor) {
        throw new NotFoundException(
          `Vendor with ID ${vendorId} not found or is already deleted.`,
        );
      }

      return vendor; // Return the full vendor entity
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error; // Re-throw specific exceptions
      }
      throw new InternalServerErrorException('An unexpected error occurred.');
    }
  }

  public async updateVendor(
    vendorId: string,
    request: UpdateVendorRequest,
  ): Promise<VendorResponse> {

    try {
      const vendor = await this.repository.findOne({
        where: { id: vendorId, isDeleted: false },
      });


      if (!vendor) {
        throw ExceptionHelper.NotFound(
          `Vendor with ID ${vendorId} not found or already deleted.`,
        );
      }

      // Cleaning the request object to remove any undefined fields
      const cleanedRequest = cleanObject(request);

      // Use Object.assign to update the vendor with cleanedRequest fields
      Object.assign(vendor, cleanedRequest);

      vendor.updatedBy = 'admin'; // Use actual user details here if needed
      vendor.updatedDate = new Date();

      await this.repository.save(vendor);

      return this.mapper.map(vendor, VendorManagementEntity, VendorResponse);
    } catch (error) {
      throw ExceptionHelper.BadRequest(
        error?.message || 'Something went wrong',
      );
    }
  }
  public async findOneByName(id :string){
    return await this.repository.findOne({
      where: { id: id, isDeleted: false },});
  } 
}
