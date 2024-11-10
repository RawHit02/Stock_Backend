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
import { RoleGuard } from 'src/common/guard/role-guard';
import { UserDetailsHelper } from '../helpers/user_details_map.helper';
import { PageOptionsDto } from 'src/models/base/dtos';
import { RoleConstants } from 'src/models/constants/role.constants';
import { GetAllPayoutRequest } from 'src/models/vendor-management/get_all_payout_request';
import { CreatePayoutRequest } from 'src/models/vendor-management/create_payout.request';
import { IVendorManagementService } from '../interfaces/vendor-management/ivendor_management.service';

@Controller('vendorManagement')
@ApiTags('vendorManagement')
export class VendorManagementController {
  constructor(
    @Inject(IVendorManagementService)
    private readonly vendorService: IVendorManagementService,
    private jwtService: JWTService,
  ) {}

  @Post('createPayout')
  @ApiBearerAuth('access-token')
  // @UseGuards(RoleGuard)
  // @SetMetadata('role', [RoleConstants.admin, RoleConstants.subAdmin])
  @ApiOperation({
    summary: 'Create payout - SubAdmin, Admin',
    description: 'With this admin can create a payout for vendor in our system',
  })
  createPayout(@Body() request: CreatePayoutRequest, @Req() req: Request) {
    const user = UserDetailsHelper.userDetails(req, this.jwtService);
    return this.vendorService.createVendor(request, user.username);
  }

  @Get('getPayout')
  @ApiBearerAuth('access-token')
  // @UseGuards(RoleGuard)
  // @SetMetadata('role', [
  //   RoleConstants.admin,
  //   RoleConstants.subAdmin,
  //   RoleConstants.vendor,
  // ])
  getPayout(@Query() pageOptionsDto: GetAllPayoutRequest, @Req() req: Request) {
    return this.vendorService.getVendor(pageOptionsDto);
  }
}
