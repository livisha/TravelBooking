import {ApiProperty} from '@nestjs/swagger';

export class DBResponse {
    @ApiProperty({description: 'row count'})
    rowCount: number;

    @ApiProperty({description : 'db records'})
    rows: Array<any>
}