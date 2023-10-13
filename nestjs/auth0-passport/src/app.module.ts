import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomerModule } from './customer/customer.module';
import { AuthzModule } from './authz/authz.module';

@Module({
  imports: [CustomerModule, AuthzModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
