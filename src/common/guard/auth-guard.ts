import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { Observable } from 'rxjs';
import { JWTService } from 'src/infrastructure/services/helpers';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private jwtService: JWTService) {

  }
  async canActivate(
    context: ExecutionContext,
  ): Promise<boolean>  {
    const request = context.switchToHttp().getRequest<Request>();
    const token = this.jwtService.getTokenFromRequest(request);
    const tokenResult = await this.jwtService.verifyToken(token);
    if (!tokenResult) {
      throw new UnauthorizedException();
    }
    return true;
  }

}
