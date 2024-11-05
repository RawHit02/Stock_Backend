import { ArgumentsHost, ExceptionFilter } from "@nestjs/common";

export class IdException extends Error {
    constructor(message?: string) {
        super(message || "Invalid ID")
    }
}