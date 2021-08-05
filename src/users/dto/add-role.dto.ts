import { IsNumber, IsString } from "class-validator"

export class AddRoleDto{
    @IsString({message:'Can be string'})
    readonly value: string
    @IsNumber({}, {message: "Can be digit"})
    readonly userId: number
}