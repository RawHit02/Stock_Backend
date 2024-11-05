import { ArgumentMetadata, BadGatewayException, BadRequestException, Injectable, PipeTransform } from "@nestjs/common";

@Injectable()
export class ParseDatePipe implements PipeTransform {
    transform(value: string | number, metadata: ArgumentMetadata) {
        const date = this.convertTimeStamp(value)
        if (!date || isNaN(+date)) {
            throw new BadRequestException("Invalid date");
        }
        return date
    }

    private convertTimeStamp(timeStamp: string | number) {
        timeStamp = +timeStamp
        const isSecond = !(timeStamp > (Date.now() + 24 * 60 * 60 * 1000) / 1000)
        return isSecond ? new Date(timeStamp + 1000) : new Date(timeStamp)

    }

}

