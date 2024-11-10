import { Mapper } from '@automapper/core';
import { v4 as uuidv4 } from 'uuid';
import { InjectMapper } from '@automapper/nestjs';
import { InjectEntityManager, InjectRepository } from '@nestjs/typeorm';
import { Inject, Injectable } from '@nestjs/common';
import { IVendorManagementService } from 'src/application/interfaces/vendor-management/ivendor_management.service';
import { CreatePayoutRequest } from 'src/models/vendor-management/create_payout.request';
import { GetAllPayoutRequest } from 'src/models/vendor-management/get_all_payout_request';
import { PayoutListResponse } from 'src/models/vendor-management/payout_list.response';
import { EntityManager } from 'typeorm';
import { ResultResponse } from 'src/models/base/result_response';
import { PageDto } from 'src/models/base/dtos';

@Injectable()
export class VendorManagementService implements IVendorManagementService {
  constructor(
    // @InjectRepository(PayoutEntity)
    // private readonly repository: IPayoutRepository,
    @InjectMapper() private mapper: Mapper,
    @InjectEntityManager() private _entityManager: EntityManager,
  ) {}
  createVendor(
    request: CreatePayoutRequest,
    changedBy: string,
  ): Promise<string> {
    throw new Error('Method not implemented.');
  }
  getVendor(
    pageOptionsDto: GetAllPayoutRequest,
  ): Promise<ResultResponse<PageDto<PayoutListResponse>>> {
    throw new Error('Method not implemented.');
  }
}
