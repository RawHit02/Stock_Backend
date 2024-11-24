import { ApiProperty } from '@nestjs/swagger';
import { IsArray } from 'class-validator';
import { PageMetaDto } from './page_meta.dto';
import { VendorResponse } from '../vendor_response';
import { VendorManagementEntity } from 'src/infrastructure/data-access/entities';

export class PageStockDto<T> {
  @IsArray()
  @ApiProperty({ isArray: true })
  readonly data: T[];

  @ApiProperty({ isArray: true })
  readonly vendor: T[];

  @ApiProperty({ type: () => PageMetaDto })
  readonly meta: PageMetaDto;

  constructor(data: T[],vendor: T, meta: PageMetaDto) {
    this.data = data;
    this.meta = meta;
  }
}
