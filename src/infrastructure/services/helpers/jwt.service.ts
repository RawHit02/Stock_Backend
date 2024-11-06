import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ModuleRef } from '@nestjs/core';
import { JwtService, TokenExpiredError } from '@nestjs/jwt';
import { EnvKeyConstants } from 'src/shared-lib';
@Injectable()
export class JWTService {
  constructor(private jwtService: JwtService) {}

  // generateToken(userId: string, claims: ClaimsModel[]): Promise<string> {
  generateToken(userId: string, claims: any): Promise<string> {
    const user = {};
    // claims.forEach(x => {
    //     user[x.key] = x.value;
    // })
    return this.jwtService.signAsync({ sub: userId, ...user });
  }

  async verifyToken(token: string): Promise<any> {
    try {
      const result = this.jwtService.verify(token, {
        secret: EnvKeyConstants.JWT_SECRET,
      });
      return result;
    } catch (err) {
      console.log('JWT token verification failed', err);
      return null;
    }
  }

  getTokenFromRequest(request: Request): string {
    const token = (request.headers['authorization'] ?? '').replace(
      'Bearer ',
      '',
    );
    if (!token) {
      throw new UnauthorizedException();
    }
    return token;
  }

  decodeToken(req: Request): any {
    const token = this.getTokenFromRequest(req);
    return this.jwtService.decode(token);
  }
}
