import { Module } from '@nestjs/common';
import { OrderModule } from './order/order.module';
import { ProductModule } from './product/product.module';
import { PageModule } from './page/page.module';
import { FacebookModule } from './facebook/facebook.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UserModule, FacebookModule, PageModule, ProductModule, OrderModule, AuthModule],
})
export class AppModule {}
