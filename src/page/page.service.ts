import { Injectable } from '@nestjs/common';
import { CreatePageDto } from './dto/create-page.dto';
import { UpdatePageDto } from './dto/update-page.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class PageService {
  include: any = {
    user: true
  }
  constructor(private prisma: PrismaService) { }
  create(createPageDto: CreatePageDto) {
    console.log(createPageDto)
    return this.prisma.page.create({
      data: createPageDto
      // include: this.include
    });
  }

  findAll() {
    return this.prisma.page.findMany({
      include: this.include
    });
  }

  findOne(id: string) {
    return this.prisma.page.findFirst({
      where: {
        id
      },
      include: this.include
    });
  }

  update(id: string, updatePageDto: UpdatePageDto) {
    return this.prisma.page.update({
      where: {
        id
      }, data: updatePageDto,
      include: this.include
    });
  }

  remove(id: string) {
    return this.prisma.order.delete({
      where: { id }
    });
  }

  check(pageFaceBookId: string) {
    return this.prisma.page.findFirst({
      where: {
        pageFaceBookId
      }
    })
  }
}
