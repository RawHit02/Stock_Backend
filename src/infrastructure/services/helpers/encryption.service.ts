import { createCipheriv, randomBytes, scrypt, createDecipheriv  } from 'crypto';
import { EnvKeyConstants } from 'src/shared-lib';
import { promisify } from 'util';

export class EncryptionService {
    static async encryptText(text: string): Promise<string> {
        const iv = randomBytes(16);
        const password = EnvKeyConstants.ENCRYPTION_KEY;
        const key = (await promisify(scrypt)(password, 'salt', 32)) as Buffer;
        const cipher = createCipheriv('aes-256-ctr', key, iv);
        let encrypted = cipher.update(text, 'utf8', 'hex');
        encrypted += cipher.final('hex');
        return encrypted;
    }

    static async decryptText(encryptedText: string): Promise<string> {
        const iv = randomBytes(16);
        const password = EnvKeyConstants.ENCRYPTION_KEY;
        const key = (await promisify(scrypt)(password, 'salt', 32)) as Buffer;
        const decipher = createDecipheriv('aes-256-ctr', key, iv);
        let decrypted = decipher.update(encryptedText, 'hex', 'utf8');
        decrypted += decipher.final('utf8');
        return decrypted;
    }
}