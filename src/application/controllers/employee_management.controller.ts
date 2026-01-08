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
    Query,
  } from '@nestjs/common';
  import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
  import { JWTService } from '../../infrastructure/services/helpers';
import { IEmployeeManagementService } from '../interfaces/employee_management/iemployee_management.service';
import { CreateEmployeeRequest } from '../../models/employee-management/create_employee.request';
import { PageOptionsDto } from '../../models/base/dtos';
import { DeleteEmployeeRequest } from '../../models/employee-management/delete_employee.request';
import { UpdateEmployeeRequest } from '../../models/employee-management/update_employee.request';
  
  @Controller('employeeManagement')
  @ApiTags('EmployeeManagement')
  export class EmployeeManagementController {
    constructor(
      @Inject(IEmployeeManagementService)
      private readonly employeeService: IEmployeeManagementService,
      private jwtService: JWTService,
    ) {}
  
    @Post('createEmployee')
    @ApiBearerAuth('access-token')
    // @UseGuards(RoleGuard)
    // @SetMetadata('role', [RoleConstants.admin, RoleConstants.subAdmin])
    @ApiOperation({
      summary: 'Create Employee - SubAdmin, Admin',
      description:
        'With this admin can create a employee in our system',
    })
    createEmployee(@Body() request: CreateEmployeeRequest, @Req() req: Request) {
      return this.employeeService.createEmployee(request);
    }
  
    @Get('getEmployee')
    @ApiBearerAuth('access-token')
    // @UseGuards(RoleGuard)
    // @SetMetadata('role', [
    //   RoleConstants.admin,
    //   RoleConstants.subAdmin,
    //   RoleConstants.employee,
    // ])
    getEmployee(@Query() pageOptionsDto: PageOptionsDto, @Req() req: Request) {
      return this.employeeService.getEmployee(pageOptionsDto);
    }
  
    //triggers deletion
    @Delete('deleteEmployee/:employeeId')
    @ApiBearerAuth('access-token')
    @ApiOperation({
      summary: 'Delete Employee - Admin and SubAdmin',
      description: 'Marks a employee as deleted by setting isDeleted to true',
    })
    deleteEmployee(
      @Param('employeeId') employeeId: string, // ID from the URL path
      @Body() deleteEmployeeRequest: DeleteEmployeeRequest, // Optional deletedBy from body
    ) {
      return this.employeeService.deleteEmployee(
        employeeId,
        deleteEmployeeRequest.deletedBy,
      );
    }
  
    @Get('getEmployeeById/:employeeId')
    @ApiBearerAuth('access-token')
    @ApiOperation({
      summary: 'Get Employee By ID - SubAdmin, Admin',
      description: 'Allows admins to retrieve employee details by ID.',
    })
    async getEmployeeById(
      @Param('employeeId') employeeId: string,
      @Req() req: Request,
    ) {
      return this.employeeService.getEmployeeById(employeeId);
    }
  
    @Patch('updateEmployee/:employeeId')
    @ApiBearerAuth('access-token')
    @ApiOperation({
      summary: 'Update Employee - Admin and SubAdmin',
      description: 'Allows admins to update employee details by ID',
    })
    async updateEmployee(
      @Param('employeeId') employeeId: string,
      @Body() request: UpdateEmployeeRequest,
      @Req() req: Request,
    ) {
      return this.employeeService.updateEmployee(employeeId, request);
    }
  }
  