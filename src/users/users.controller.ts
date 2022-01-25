import { VerifyEmailDto } from './dto/verify-email.dto';
import { CreateUserDto } from './dto/CreateUserDto';
import { Controller, Post, Body, Query, Param, Get } from '@nestjs/common';
import { UserLoginDto } from './dto/user-login.dto';

@Controller('users')
export class UsersController {
  @Post()
  createUser(@Body() createUserDto: CreateUserDto) {
    const { name, email, password } = createUserDto;
    console.log(createUserDto);
  }

  @Post('/email-verify/')
  verifyEmail(@Query() dto: VerifyEmailDto) {
    console.log(dto);
  }
  @Post('/login')
  async login(@Body() dto: UserLoginDto): Promise<string> {
    console.log(dto);
    return;
  }

  @Get('/:id')
  getUserInfo(@Param('id') userId: string) {
    console.log(userId);
    return;
  }
}
