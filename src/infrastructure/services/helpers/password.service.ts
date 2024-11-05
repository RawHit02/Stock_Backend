import * as bcrypt from 'bcrypt';

export class PasswordHashService {
    static hashPassword(password: string): string {
        const saltOrRounds = 10;
        return bcrypt.hashSync(password, saltOrRounds);
    }

    static verifyPassword(hashPassword: string, password: string): boolean {
        return bcrypt.compareSync(password, hashPassword);
    }
}