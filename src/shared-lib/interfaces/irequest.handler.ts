import { Result } from '../design-patterns';
import { IRequest } from './irequest';

/**
 * Interface to handler request where 'Req' can command or query and 'Res' is response model
 */
export interface IRequestHandler<Req extends IRequest<Req>, Res> {
  handle(commandOrQuery: Req, token?: string):  Promise<Result<Res>>;
}
