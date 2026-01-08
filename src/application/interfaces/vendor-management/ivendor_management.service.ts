import { VendorManagementEntity } from '../../../infrastructure/data-access/entities';
import { PageDto } from '../../../models/base/dtos';
import { VendorResponse } from '../../../models/base/vendor_response';
import { ResultResponse } from '../../../models/base/result_response';
import { CreateVendorRequest } from '../../../models/vendor-management/create_vendor.request';
import { GetAllVendorRequest } from '../../../models/vendor-management/get_all_vendor_request';
import { VendorListResponse } from '../../../models/vendor-management/vendor_list.response';
import { UpdateVendorRequest } from '../../../models/vendor-management/update_vendor.request';

export interface IVendorManagementService {
  createVendor(request: CreateVendorRequest): Promise<string>;
  getVendor(
    pageOptionsDto: GetAllVendorRequest,
  ): Promise<ResultResponse<PageDto<VendorListResponse>>>;
  deleteVendor(vendorId: string, deletedBy?: string): Promise<string>;
  getVendorById(vendorId: string): Promise<VendorManagementEntity>;
  updateVendor(
    vendorId: string,
    request: UpdateVendorRequest,
  ): Promise<VendorResponse>;
}

export const IVendorManagementService = Symbol('IVendorManagementService');
