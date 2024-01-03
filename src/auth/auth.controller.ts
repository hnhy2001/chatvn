import { Body, Controller, Post, HttpCode, HttpStatus, UseGuards, Get,Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInDto } from './dto/auth.dto';
import { AuthGuard } from './auth.guard';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Body() signInDto: SignInDto) {
    return this.authService.signIn(signInDto.userName, signInDto.password);
  }

  @UseGuards(AuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}