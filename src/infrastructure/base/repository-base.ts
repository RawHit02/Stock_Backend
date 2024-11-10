import { IAsyncRepository } from 'src/application/interfaces/base/iasync-repository';
import { Repository } from 'typeorm';

export abstract class RepositoryBase<TEntity>
  extends Repository<TEntity>
  implements IAsyncRepository<TEntity> {}
