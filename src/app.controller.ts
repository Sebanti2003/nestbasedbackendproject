/* eslint-disable prettier/prettier */
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
 }

// class myclass{
//   username:string;
//   email:string;
//   password:string;
//   constructor(username:string,email:string,password:string){
//     this.username=username;
//     this.email=email;
//     this.password=password;
//   }
//   encryptpassword(){
//     return `${this.password} is my password`
//   }
// }
// const chai=new myclass("sandeep","a@a.com","sandeep@123");
// console.log(chai.encryptpassword());
