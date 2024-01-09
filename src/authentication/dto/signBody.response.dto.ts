import {ApiProperty} from '@nestjs/swagger';

export class SignUpRequestBody {

    @ApiProperty({description : 'first_name'})
    first_name: string

    @ApiProperty({description: 'last_name'})
    last_name: string;

    @ApiProperty({description : 'email_Id'})
    email_Id: string

    @ApiProperty({description : 'phone_number'})
    phone_number: number

    @ApiProperty({description: 'password'})
    password: string;
}