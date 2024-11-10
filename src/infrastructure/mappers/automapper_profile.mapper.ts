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
