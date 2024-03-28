/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Patch, Post, Query, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { ParseIntPipe } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService){}
    @Get('')
    readall(@Query('role') CreateUserDto:CreateUserDto): object[] {
        return this.usersService.findall();
    }
    @Get(':id')
    readone(@Param('id',ParseIntPipe) id:number):object{
        return this.usersService.findone(id);
    }
    @Post()
    create(@Body(ValidationPipe) CreateUserDto:CreateUserDto):object{
        return this.usersService.create(CreateUserDto);
    }
    @Patch(':id')
    updateone(@Param('id',ParseIntPipe) id:number,@Body(ValidationPipe) UpdateUserDto:UpdateUserDto):object{
        return this.usersService.updateone(id,UpdateUserDto);
    }
    @Delete(':id')
    deleteone(@Param('id',ParseIntPipe) id:number):string{
        return this.usersService.deleteone(id);
    }

}

