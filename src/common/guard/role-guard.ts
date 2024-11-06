import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { JWTService } from 'src/infrastructure/services/helpers';

@Injectable()
export class RoleGuard implements CanActivate {

  constructor(private jwtService: JWTService, private reflector: Reflector) {

  }
  async canActivate(
    context: ExecutionContext,
  ): Promise<boolean> {
    const requiredRole = this.reflector.get<string[]>('role', context.getHandler());
    if (!requiredRole) {
      throw new UnauthorizedException(); // No role specified, allow access
    }
    const request = context.switchToHttp().getRequest<Request>();
    const token = this.jwtService.getTokenFromRequest(request);
    const tokenResult = await this.jwtService.verifyToken(token);
    if (!tokenResult) {
      throw new UnauthorizedException();
    }
    if (requiredRole.includes(tokenResult.payload.role)) {
      return true;
    }
    throw new UnauthorizedException();
  }

}
