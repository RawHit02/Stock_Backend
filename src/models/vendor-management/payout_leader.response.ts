import { AutoMap } from '@automapper/classes';
import { v4 as uuidv4 } from 'uuid';
import { ApiProperty } from '@nestjs/swagger';

export class PayoutLeaderResponse {
  @AutoMap()
  totalSum: string;

  @AutoMap()
  totalCount: string;
}
