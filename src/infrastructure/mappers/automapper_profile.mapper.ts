import {
  Mapper,
  MappingProfile,
  createMap,
  extend,
  forMember,
  mapFrom,
} from '@automapper/core';
import { InjectMapper, AutomapperProfile } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';
import { CreateVendorRequest } from 'src/models/vendor-management/create_vendor.request';
import { VendorManagementEntity } from '../data-access/entities';
import { VendorListResponse } from 'src/models/vendor-management/vendor_list.response';

@Injectable()
export class AutoMapperProfileMapper extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  override get profile() {
    return (mapper) => {
      createMap(mapper, CreateVendorRequest, VendorManagementEntity);
      createMap(mapper, VendorManagementEntity, VendorListResponse);
    };
  }
}
