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
  NotFoundException,
  Put,
  Patch,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { JWTService } from 'src/infrastructure/services/helpers';
import { IStockManagementService } from '../interfaces/stock-management/istock_management.service';
import { CreateStockRequest } from 'src/models/stock-management/create_stock.request';
import { GetAllStockRequest } from 'src/models/stock-management/get_all_stock.request';
import { DeleteStockRequest } from 'src/models/stock-management/delete_stock.request';
import { UpdateStockRequest } from 'src/models/stock-management/update_stock.request';

@Controller('stockManagement')
@ApiTags('StockManagement')
export class StockManagementController {
  constructor(
    @Inject(IStockManagementService)
    private readonly stockService: IStockManagementService,
    private jwtService: JWTService,
  ) {}

  @Post('createStock')
  @ApiBearerAuth('access-token')
  // @UseGuards(RoleGuard)
  // @SetMetadata('role', [RoleConstants.admin, RoleConstants.subAdmin])
  @ApiOperation({
    summary: 'Create Stock - SubAdmin, Admin',
    description:
      'With this admin/subadmin can create an inward or outward for stock in our system',
  })
  createStock(@Body() request: CreateStockRequest, @Req() req: Request) {
    return this.stockService.createStock(request);
  }

  @Get('getStock')
  @ApiBearerAuth('access-token')
  // @UseGuards(RoleGuard)
  // @SetMetadata('role', [
  //   RoleConstants.admin,
  //   RoleConstants.subAdmin,
  //   RoleConstants.stock,
  // ])
  getStock(@Query() pageOptionsDto: GetAllStockRequest, @Req() req: Request) {
    return this.stockService.getStock(pageOptionsDto);
  }

  //triggers deletion
  @Delete('deleteStock/:stockId')
  @ApiBearerAuth('access-token')
  @ApiOperation({
    summary: 'Delete Stock - Admin and SubAdmin',
    description: 'Marks a Stock as deleted',
  })
  deleteStock(
    @Param('stockId') stockId: string, // ID from the URL path
    @Body() deleteStockRequest: DeleteStockRequest, // Optional deletedBy from body
  ) {
    return this.stockService.deleteStock(stockId, deleteStockRequest.deletedBy);
  }

  @Get('getStockById/:stockId')
  @ApiBearerAuth('access-token')
  @ApiOperation({
    summary: 'Get Stock By ID - Admin and SubAdmin',
    description: 'Allows admins to retrieve stock details by stock ID.',
  })
  async getStockById(@Param('stockId') stockId: string, @Req() req: Request) {
    return this.stockService.getStockById(stockId);
  }

  @Patch('updateStock')
  @ApiBearerAuth('access-token')
  @ApiOperation({
    summary: 'Update Stock - Admin and SubAdmin',
    description: 'Allows admins to update stock details by ID',
  })
  async updateStock(@Body() request: UpdateStockRequest, @Req() req: Request) {
    return this.stockService.updateStock(request);
  }
}
