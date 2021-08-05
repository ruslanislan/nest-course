import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString, Length } from "class-validator";

export class CreateUserDto {
    @ApiProperty({ example: 'user@mail.ru', description: 'Email' })
    @IsString({ message: "Can be string" })
    @IsEmail({},{message: "Incorrect email"})
    readonly email: string;
    @ApiProperty({ example: '12345678', description: 'Password' })
    @IsString({ message: "Can be string" })
    @Length(4, 16, { message: 'not less than 4 and not more than 16' })
    readonly password: string;
}