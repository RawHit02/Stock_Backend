import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { InjectEntityManager, InjectRepository } from '@nestjs/typeorm';
import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { EntityManager } from 'typeorm';
import { ResultResponse } from 'src/models/base/result_response';
import { PageDto, PageMetaDto, PageOptionsDto } from 'src/models/base/dtos';
import { ExceptionHelper } from 'src/application/helpers/exception.helper';
import { cleanObject } from '../helpers/mapper_object';
import { IEmployeeManagementService } from 'src/application/interfaces/employee_management/iemployee_management.service';
import { EmployeeManagementEntity } from 'src/infrastructure/data-access/entities/employee-management/employee_management.entity';
import { IEmployeeManagementRepository } from 'src/application/interfaces/employee_management/iemployee_management.repository';
import { CreateEmployeeRequest } from 'src/models/employee-management/create_employee.request';
import { EmployeeListResponse } from 'src/models/employee-management/employee_list.response';
import { UpdateEmployeeRequest } from 'src/models/employee-management/update_employee.request';
import { EmployeeResponse } from 'src/models/base/employee_response';

@Injectable()
export class EmployeeManagementService implements IEmployeeManagementService {
  constructor(
    @InjectRepository(EmployeeManagementEntity)
    private readonly repository: IEmployeeManagementRepository,
    @InjectMapper() private mapper: Mapper,
    @InjectEntityManager() private _entityManager: EntityManager,
  ) {}

  public async createEmployee(request: CreateEmployeeRequest): Promise<string> {
    try {
      // Check if a employee with the given email already exists
      const existingEmployee = await this.repository.findOne({
        where: { email: request.email },
      });
  
      if (existingEmployee) {
        if (!existingEmployee.isDeleted) {
          // If the employee exists and is not deleted, throw an error
          throw ExceptionHelper.BadRequest(
            'Employee with this email already exists, please use a different one.',
          );
        } else {
          // If the employee exists and is deleted, allow creation by reactivating the employee
          Object.assign(existingEmployee, {
            ...request,
            isDeleted: false, // Reactivate the employee
            updatedBy: 'admin',
            updatedDate: new Date(),
          });
          await this.repository.save(existingEmployee);
          return existingEmployee.id;
        }
      }
  
      // If no existing employee is found, create a new one
      const entity = this.mapper.map(
        request,
        CreateEmployeeRequest,
        EmployeeManagementEntity );
      // entity.id = uuidv4();
      entity.createdBy = 'admin';
      await this.repository.save(entity);
      return entity.id;
    } catch (error) {
      if (error.code === '23505' && error.detail.includes('Email')) {
         // '23505' is the PostgreSQL error code for unique violations
        throw ExceptionHelper.BadRequest(
          'Email already exists, please use a different one.',
        );
      }
      throw ExceptionHelper.BadRequest(
        error?.message || 'Something went wrong',
      );
    }
  }

  public async getEmployee(
    pageOptionsDto: PageOptionsDto,
  ): Promise<ResultResponse<PageDto<EmployeeListResponse>>> {
    try {
      const [employees, count] = await this.repository.findAndCount({
        where: {
          isDeleted: false,
        },
        loadEagerRelations: true,
        skip: pageOptionsDto.skip,
        take: pageOptionsDto.take,
      });

      const pageMetaDto = new PageMetaDto({
        itemCount: count,
        pageOptionsDto: pageOptionsDto,
      });

      let res = this.mapper.mapArray(
        employees,
        EmployeeManagementEntity,
        EmployeeListResponse,
      );

      const pageDtoRes = new PageDto<EmployeeListResponse>(res, pageMetaDto);

      return ResultResponse.ok(pageDtoRes, 'Fetched Employees successfully');
    } catch (error) {
      throw ExceptionHelper.BadRequest(error.message);
    }
  }

  public async deleteEmployee(
    employeeId: string,
    deletedBy?: string,
  ): Promise<string> {
    try {
      const employee = await this.repository.findOne({
        where: { id: employeeId, isDeleted: false },
      });

      if (!employee) {
        throw new NotFoundException(
          `Employee with ID ${employeeId} not found or already deleted.`,
        );
      }

      // Mark the employee as deleted and set the deletedBy user
      employee.isDeleted = true;
      employee.updatedBy = deletedBy || 'system';

      await this.repository.save(employee);

      return employeeId;
    } catch (error) {
      throw ExceptionHelper.BadRequest(
        error?.message || 'Something went wrong',
      );
    }
  }

  async getEmployeeById(employeeId: string): Promise<EmployeeManagementEntity> {
    try {
      const employee = await this.repository.findOne({
        where: { id: employeeId, isDeleted: false },
      });

      if (!employee) {
        throw new NotFoundException(
          `Employee with ID ${employeeId} not found or is already deleted.`,
        );
      }

      return employee; // Return the full employee entity
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error; // Re-throw specific exceptions
      }
      throw new InternalServerErrorException('An unexpected error occurred.');
    }
  }

  public async updateEmployee(
    employeeId: string,
    request: UpdateEmployeeRequest,
  ): Promise<EmployeeResponse> {
    try {
      const employee = await this.repository.findOne({
        where: { id: employeeId, isDeleted: false },
      });

      if (!employee) {
        throw ExceptionHelper.NotFound(
          `Vendor with ID ${employeeId} not found or already deleted.`,
        );
      }

      // Cleaning the request object to remove any undefined fields
      const cleanedRequest = cleanObject(request);

      // Use Object.assign to update the vendor with cleanedRequest fields
      Object.assign(employee, cleanedRequest);

      employee.updatedBy = 'admin'; // Use actual user details here if needed
      employee.updatedDate = new Date();

      await this.repository.save(employee);

      return this.mapper.map(employee, EmployeeManagementEntity, EmployeeResponse);
    } catch (error) {
      throw ExceptionHelper.BadRequest(
        error?.message || 'Something went wrong',
      );
    }
  }
  

}
