import { IDomainEntity } from './idomain-entity.interface';
import { IDTO } from './idto.interface';
import { IEntity } from './ientity.interface';

export interface IMapper {
  toDomain(raw: any): IDomainEntity;
  toPersistence(input: IDTO | IDomainEntity, curEntity?: IEntity): IEntity;
  toDto(input: IDomainEntity | IEntity): IDTO;
}
export const IMapper = Symbol('IMapper');
