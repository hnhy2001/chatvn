import { Module } from '@nestjs/common';
import { FacebookService } from './facebook.service';
import { FacebookController } from './facebook.controller';
import { PageService } from 'src/page/page.service';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [FacebookController],
  providers: [FacebookService, PageService, PrismaService],
})
export class FacebookModule {}
