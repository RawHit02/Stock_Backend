import { Injectable, Type } from '@nestjs/common';
import { ModuleRef } from '@nestjs/core';
import { Result } from '../';
import { IRequestHandler } from '../../interfaces';
import { IRequest } from '../../interfaces/irequest';
import { IMediator } from './imediator';

@Injectable()
export class MediatorService implements IMediator {
  // private readonly _logger = AppLoggerService.getLogger(MediatorService);

  constructor(private moduleRef: ModuleRef) {}

  async send<T>(req: IRequest<T>): Promise<Result<T>> {
    const reqHandler: IRequestHandler<IRequest<T>, any> = this.moduleRef.get(req.constructor as Type, {
      strict: false,
    });
    return reqHandler.handle(req);
  }
}
