import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { PrismaService } from 'src/prisma.service';
import { ORDER } from './const';

@Injectable()
export class OrderService {
  include: any = {
    product: true,
    user: true
  }
  constructor(private prisma: PrismaService) { }
  create(createOrderDto: CreateOrderDto) {
    return this.prisma.order.create({
      data: {
        ...createOrderDto,
        status: ORDER.NEW
      }, include: this.include
    });
  }

  findAll() {
    return this.prisma.order.findMany({
      include: this.include
    });
  }

  findOne(id: string) {
    return this.prisma.order.findFirst({
      where: {
        id
      },
      include: this.include
    });
  }

  update(id: string, updateOrderDto: UpdateOrderDto) {
    return this.prisma.order.update({
      where: {
        id
      }, data: updateOrderDto,
      include: this.include
    });
  }

  remove(id: string) {
    return this.prisma.order.delete({
      where: { id }
    });
  }
}
