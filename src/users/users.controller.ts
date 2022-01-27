import { ValidationPipe } from './../validation.pipe';
import { VerifyEmailDto } from './dto/verify-email.dto';
import { CreateUserDto } from './dto/CreateUserDto';
import {
  Controller,
  Post,
  Body,
  Query,
  Param,
  Get,
  ParseIntPipe,
} from '@nestjs/common';
import { UserLoginDto } from './dto/user-login.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post()
  createUser(@Body() createUserDto: CreateUserDto) {
    const { name, password } = createUserDto;
    console.log(createUserDto);
    return this.usersService.createUser(name, password);
  }

  @Post('/email-verify/')
  verifyEmail(@Query() dto: VerifyEmailDto) {
    console.log(dto);
  }

  @Post('/login')
  async login(@Body() dto: UserLoginDto) {
    const { name, password } = dto;
    return this.usersService.login(name, password);
  }

  @Get('/:id')
  getUserInfo(@Param('id', ValidationPipe) userId: number) {
    console.log(userId);
    return this.usersService.getUserInfo(userId);
  }
}
