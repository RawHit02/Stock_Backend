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
import { CreatePayoutRequest } from 'src/models/vendor-management/create_payout.request';

@Injectable()
export class AutoMapperProfileMapper extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  override get profile() {
    return (mapper) => {
      // createMap(mapper, CreatePayoutRequest, PayoutEntity);
      // createMap(mapper, PayoutEntity, PayoutListResponse);
    };
  }
}
