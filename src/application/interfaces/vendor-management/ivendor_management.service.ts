import { PageDto, PageOptionsDto } from 'src/models/base/dtos';
import { ResultResponse } from 'src/models/base/result_response';
import { CreateVendorRequest } from 'src/models/vendor-management/create_vendor.request';
import { GetAllVendorRequest } from 'src/models/vendor-management/get_all_vendor_request';
import { VendorListResponse } from 'src/models/vendor-management/vendor_list.response';

export interface IVendorManagementService {
  createVendor(
    request: CreateVendorRequest,
  ): Promise<string>;
  getVendor(
    pageOptionsDto: GetAllVendorRequest,
  ): Promise<ResultResponse<PageDto<VendorListResponse>>>;
}

export const IVendorManagementService = Symbol('IVendorManagementService');
