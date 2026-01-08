import {
  Controller,
  Post,
  Body,
  Inject,
  Req,
  Get,
  Param,
  Delete,
  Patch,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { JWTService } from '../../infrastructure/services/helpers';
import { UserDetailsHelper } from '../helpers/user_details_map.helper';
import { GetAllVendorRequest } from '../../models/vendor-management/get_all_vendor_request';
import { IVendorManagementService } from '../interfaces/vendor-management/ivendor_management.service';
import { CreateVendorRequest } from '../../models/vendor-management/create_vendor.request';
import { DeleteVendorRequest } from '../../models/vendor-management/delete_vendor.request';
import { UpdateVendorRequest } from '../../models/vendor-management/update_vendor.request';

@Controller('vendorManagement')
@ApiTags('VendorManagement')
export class VendorManagementController {
  constructor(
    @Inject(IVendorManagementService)
    private readonly vendorService: IVendorManagementService,
    private jwtService: JWTService,
  ) {}

  @Post('createVendor')
  @ApiBearerAuth('access-token')
  // @UseGuards(RoleGuard)
  // @SetMetadata('role', [RoleConstants.admin, RoleConstants.subAdmin])
  @ApiOperation({
    summary: 'Create Vendor - SubAdmin, Admin',
    description:
      'With this admin can create a buyer or supplier for vendor in our system',
  })
  createVendor(@Body() request: CreateVendorRequest, @Req() req: Request) {
    return this.vendorService.createVendor(request);
  }

  @Get('getVendor/:vendorType')
  @ApiBearerAuth('access-token')
  // @UseGuards(RoleGuard)
  // @SetMetadata('role', [
  //   RoleConstants.admin,
  //   RoleConstants.subAdmin,
  //   RoleConstants.vendor,
  // ])
  getVendor(@Param() pageOptionsDto: GetAllVendorRequest, @Req() req: Request) {
    return this.vendorService.getVendor(pageOptionsDto);
  }

  //triggers deletion
  @Delete('deleteVendor/:vendorId')
  @ApiBearerAuth('access-token')
  @ApiOperation({
    summary: 'Delete Vendor - Admin and SubAdmin',
    description: 'Marks a vendor as deleted by setting isDeleted to true',
  })
  deleteVendor(
    @Param('vendorId') vendorId: string, // ID from the URL path
    @Body() deleteVendorRequest: DeleteVendorRequest, // Optional deletedBy from body
  ) {
    return this.vendorService.deleteVendor(
      vendorId,
      deleteVendorRequest.deletedBy,
    );
  }

  @Get('getVendorById/:vendorId')
  @ApiBearerAuth('access-token')
  @ApiOperation({
    summary: 'Get Vendor By ID - SubAdmin, Admin',
    description: 'Allows admins to retrieve vendor details by ID.',
  })
  async getVendorById(
    @Param('vendorId') vendorId: string,
    @Req() req: Request,
  ) {
    return this.vendorService.getVendorById(vendorId);
  }

  @Patch('updateVendor/:vendorId')
  @ApiBearerAuth('access-token')
  @ApiOperation({
    summary: 'Update Vendor - Admin and SubAdmin',
    description: 'Allows admins to update vendor details by ID',
  })
  async updateVendor(
    @Param('vendorId') vendorId: string,
    @Body() request: UpdateVendorRequest,
    @Req() req: Request,
  ) {
    return this.vendorService.updateVendor(vendorId, request);
  }
}
