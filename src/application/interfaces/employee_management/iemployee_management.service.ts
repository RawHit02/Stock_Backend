import { EmployeeManagementEntity } from 'src/infrastructure/data-access/entities/employee-management/employee_management.entity';
import { PageDto} from 'src/models/base/dtos';
import { EmployeeResponse } from 'src/models/base/employee_response';
import { ResultResponse } from 'src/models/base/result_response';
import { CreateEmployeeRequest } from 'src/models/employee-management/create_employee.request';
import { EmployeeListResponse } from 'src/models/employee-management/employee_list.response';
import { GetAllEmployeeRequest } from 'src/models/employee-management/get_all_employee.request';
import { UpdateEmployeeRequest } from 'src/models/employee-management/update_employee.request';

export interface IEmployeeManagementService {
  createEmployee(request: CreateEmployeeRequest): Promise<string>;
  getEmployee(
    pageOptionsDto: GetAllEmployeeRequest,
  ): Promise<ResultResponse<PageDto<EmployeeListResponse>>>;
  deleteEmployee(employeeId: string, deletedBy?: string): Promise<string>;
  getEmployeeById(employeeId: string): Promise<EmployeeManagementEntity>;
  updateEmployee(
    employeeId: string,
    request: UpdateEmployeeRequest,
  ): Promise<EmployeeResponse>;
}

export const IEmployeeManagementService = Symbol('IEmployeeManagementService');
