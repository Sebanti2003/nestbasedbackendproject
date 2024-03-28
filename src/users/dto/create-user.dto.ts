/* eslint-disable prettier/prettier */
import { IsEmpty, IsEnum, IsString, IsEmail, IsNumber, IS_BYTE_LENGTH } from 'class-validator';
export class CreateUserDto {
    @IsString({message: 'name must be a string'})
    @IsEmpty()
    name: string;
    @IsEmail()
    email: string;
    @IsNumber()
    id: number;
    @IsEnum(["JUNIOR","SENIOR","INTERN"],{
        message: "role should be one of these values: JUNIOR,SENIOR,INTERN"
    })             
    role: "JUNIOR"|"SENIOR"|"INTERN";
}