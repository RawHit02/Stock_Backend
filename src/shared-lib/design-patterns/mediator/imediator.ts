import { Result } from '../result';
import { IRequest } from '../../interfaces/irequest';

export abstract class IMediator {
  abstract send<Res>(req: IRequest<any>): Promise<Result<Res>>;
}
