import { Result } from '../design-patterns';
import { UniqueEntityID } from '../domain';
import { IEntity } from './ientity.interface';

export interface IRepository<T extends IEntity> {
  save(input: T): Promise<Result<T>>;
  exists(input: T): Promise<Result<boolean>>;
  remove(input: UniqueEntityID): Promise<Result<void>>;
  findById(input: UniqueEntityID): Promise<Result<T>>;
}
