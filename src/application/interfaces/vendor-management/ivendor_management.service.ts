import { VendorManagementEntity } from 'src/infrastructure/data-access/entities';
import { PageDto, PageOptionsDto } from 'src/models/base/dtos';
import { VendorResponse } from 'src/models/base/vendor_response';
import { ResultResponse } from 'src/models/base/result_response';
import { CreateVendorRequest } from 'src/models/vendor-management/create_vendor.request';
import { DeleteVendorRequest } from 'src/models/vendor-management/delete_vendor.request';
import { GetAllVendorRequest } from 'src/models/vendor-management/get_all_vendor_request';
import { GetVendorByIdRequest } from 'src/models/vendor-management/get_Vendor_By_Id.request';
import { VendorListResponse } from 'src/models/vendor-management/vendor_list.response';
import { UpdateVendorRequest } from 'src/models/vendor-management/update_vendor.request';

export interface IVendorManagementService {
  createVendor(request: CreateVendorRequest): Promise<string>;
  getVendor(
    pageOptionsDto: GetAllVendorRequest,
  ): Promise<ResultResponse<PageDto<VendorListResponse>>>;
  deleteVendor(vendorId: string, deletedBy?: string): Promise<string>; // New delete method
  getVendorById(
    getVendorByIdRequest: GetVendorByIdRequest,
  ): Promise<VendorManagementEntity | null>;
  updateVendor(request: UpdateVendorRequest): Promise<VendorResponse>; // Add this method
}

export const IVendorManagementService = Symbol('IVendorManagementService');
