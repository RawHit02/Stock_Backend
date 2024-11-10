import {
  DeepPartial,
  FindManyOptions,
  FindOneOptions,
  FindOptionsWhere,
  ObjectId,
  SaveOptions,
  UpdateResult,
} from 'typeorm';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';

export interface IAsyncRepository<TEntity> {
  findOne(options: FindOneOptions<TEntity>): Promise<TEntity | null>;
  find(options?: FindManyOptions<TEntity>): Promise<TEntity[]>;
  save<T extends DeepPartial<TEntity>>(
    entities: T[],
    options: SaveOptions & {
      reload: false;
    },
  ): Promise<T[]>;
  save<T extends DeepPartial<TEntity>>(
    entity: T,
    options?: SaveOptions,
  ): Promise<T & TEntity>;
  findBy(
    where: FindOptionsWhere<TEntity> | FindOptionsWhere<TEntity>[],
  ): Promise<TEntity[]>;

  exist(options?: FindManyOptions<TEntity>): Promise<boolean>;
  /**
   * Checks whether any entity exists that matches the given options.
   */
  exists(options?: FindManyOptions<TEntity>): Promise<boolean>;
  /**
   * Checks whether any entity exists that matches the given conditions.
   */
  existsBy(
    where: FindOptionsWhere<TEntity> | FindOptionsWhere<TEntity>[],
  ): Promise<boolean>;

  findAndCount(
    options?: FindManyOptions<TEntity>,
  ): Promise<[TEntity[], number]>;

  /**
   * Updates entity partially. Entity can be found by a given conditions.
   * Unlike save method executes a primitive operation without cascades, relations and other operations included.
   * Executes fast and efficient UPDATE query.
   * Does not check if entity exist in the database.
   */
  update(
    criteria:
      | string
      | string[]
      | number
      | number[]
      | Date
      | Date[]
      | ObjectId
      | ObjectId[]
      | FindOptionsWhere<TEntity>,
    partialEntity: QueryDeepPartialEntity<TEntity>,
  ): Promise<UpdateResult>;
}
export const IAsyncRepository = Symbol('IAsyncRepository');
