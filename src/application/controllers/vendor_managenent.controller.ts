import {
  Controller,
  Post,
  Body,
  Inject,
  UseGuards,
  SetMetadata,
  Req,
  Get,
  Query,
  Param,
  Delete,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { JWTService } from 'src/infrastructure/services/helpers';
import { UserDetailsHelper } from '../helpers/user_details_map.helper';
import { GetAllVendorRequest } from 'src/models/vendor-management/get_all_vendor_request';
import { IVendorManagementService } from '../interfaces/vendor-management/ivendor_management.service';
import { CreateVendorRequest } from 'src/models/vendor-management/create_vendor.request';

@Controller('vendorManagement')
@ApiTags('vendorManagement')
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
  createPayout(@Body() request: CreateVendorRequest, @Req() req: Request) {
    // const user = UserDetailsHelper.userDetails(req, this.jwtService);
    return this.vendorService.createVendor(request);
  }

  @Get('getPayout')
  @ApiBearerAuth('access-token')
  // @UseGuards(RoleGuard)
  // @SetMetadata('role', [
  //   RoleConstants.admin,
  //   RoleConstants.subAdmin,
  //   RoleConstants.vendor,
  // ])
  getPayout(@Query() pageOptionsDto: GetAllVendorRequest, @Req() req: Request) {
    return this.vendorService.getVendor(pageOptionsDto);
  }
}
