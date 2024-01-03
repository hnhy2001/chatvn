import { Controller, Get, Post, Body, Patch, Param, Delete, Query, Request, HttpStatus, Headers } from '@nestjs/common';
import { FacebookService } from './facebook.service';
import { CreateFacebookDto } from './dto/create-facebook.dto';
import { UpdateFacebookDto } from './dto/update-facebook.dto';

@Controller('facebook')
export class FacebookController {
  constructor(private readonly facebookService: FacebookService) { }
  @Get("getCode")
  getCode() {
    return this.facebookService.getCode();
  }

  @Get('getLongScretKey')
  async getLongScretKey(@Query('code') code: string) {
    return await this.facebookService.getLongSecretKey(code);
  }
  @Get()
  verifyWebhook(@Query('hub.verify_token') verifyToken: string, @Query('hub.challenge') challenge: string) {
    if (verifyToken === 'test') {
      console.log('1')
      return challenge;
    } else {
      return 'Invalid Verify Token';
    }
  }

  @Post()
  handleWebhook(@Request() req: any, @Headers('x-hub-signature') signature: string) {
    console.log('2')
    console.log('Webhook Body:', req);
    console.log('Webhook Signature:', signature);
    return { success: true };
  }

  @Post('send/:mess')
  send(@Param('mess') mess: string){
    return this.facebookService.send(mess);
  }

  @Get('mess')
  async getAllMessager(){
    const data = await this.facebookService.getAllMessager()
    return data.data;
  }
}
