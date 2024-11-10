import { Mapper } from '@automapper/core';
import { v4 as uuidv4 } from 'uuid';
import { InjectMapper } from '@automapper/nestjs';
import { InjectEntityManager, InjectRepository } from '@nestjs/typeorm';
import { Inject, Injectable } from '@nestjs/common';
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

@Injectable()
export class VendorManagementService implements IVendorManagementService {
  constructor(
    @InjectRepository(VendorManagementEntity)
    private readonly repository: IVendorManagementRepository,
    @InjectMapper() private mapper: Mapper,
    @InjectEntityManager() private _entityManager: EntityManager,
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
      throw ExceptionHelper.BadRequest(
        error?.message || 'Something went wrong',
      );
    }
  }

  public async getVendor(
    pageOptionsDto: GetAllVendorRequest,
  ): Promise<ResultResponse<PageDto<VendorListResponse>>> {
    try {
      const [vendors, count] = await this.repository.findAndCount({
        where: {
          isDeleted: false,
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
}
