import { VendorManagementEntity } from 'src/infrastructure/data-access/entities';
import { PageDto, PageOptionsDto } from 'src/models/base/dtos';
import { VendorResponse } from 'src/models/base/vendor_response';
import { ResultResponse } from 'src/models/base/result_response';
import { CreateVendorRequest } from 'src/models/vendor-management/create_vendor.request';
import { GetAllVendorRequest } from 'src/models/vendor-management/get_all_vendor_request';
import { VendorListResponse } from 'src/models/vendor-management/vendor_list.response';
import { UpdateVendorRequest } from 'src/models/vendor-management/update_vendor.request';

export interface IVendorManagementService {
  createVendor(request: CreateVendorRequest): Promise<string>;
  getVendor(
    pageOptionsDto: GetAllVendorRequest,
  ): Promise<ResultResponse<PageDto<VendorListResponse>>>;
  deleteVendor(vendorId: string, deletedBy?: string): Promise<string>;
  getVendorById(vendorId: string): Promise<VendorManagementEntity>;
  updateVendor(request: UpdateVendorRequest): Promise<VendorResponse>;
}

export const IVendorManagementService = Symbol('IVendorManagementService');
