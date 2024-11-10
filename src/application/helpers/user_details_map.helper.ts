import { UnauthorizedException } from "@nestjs/common";
import { JWTService } from "src/infrastructure/services/helpers";
import { UserDetailsContext } from "src/models/base/user_details_context.model";

export class UserDetailsHelper {

    static userDetails(req: Request, jwt: JWTService): UserDetailsContext {
        const token = (req.headers['authorization'] ?? '').replace('Bearer ', '');
        if (!token) {
            throw new UnauthorizedException();
        }

        const details = jwt.decodeToken(req);
        if (!!details) {
            return <UserDetailsContext>{
                email: details.email,
                exp: new Date(details.exp * 1000),
                iat: new Date(details.iat * 1000),
                id: details.id,
                name: details.name,
                role: details.role,
                username: details.username,
            }
        }
        throw new UnauthorizedException();

    }
}

