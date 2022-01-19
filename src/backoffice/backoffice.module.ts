import { Module } from '@nestjs/common';
import { CustomerController } from './controller/customer/customer.controller';

@Module({
  controllers: [CustomerController]
})
export class BackofficeModule {}
