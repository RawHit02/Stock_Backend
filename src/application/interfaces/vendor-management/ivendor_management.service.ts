import { PageDto, PageOptionsDto } from 'src/models/base/dtos';
import { ResultResponse } from 'src/models/base/result_response';
import { CreatePayoutRequest } from 'src/models/vendor-management/create_payout.request';
import { GetAllPayoutRequest } from 'src/models/vendor-management/get_all_payout_request';
import { PayoutListResponse } from 'src/models/vendor-management/payout_list.response';

export interface IVendorManagementService {
  createVendor(
    request: CreatePayoutRequest,
    changedBy: string,
  ): Promise<string>;
  getVendor(
    pageOptionsDto: GetAllPayoutRequest,
  ): Promise<ResultResponse<PageDto<PayoutListResponse>>>;
}

export const IVendorManagementService = Symbol('IVendorManagementService');
