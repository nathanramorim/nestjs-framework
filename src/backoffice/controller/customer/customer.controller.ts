import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

@Controller('v1/customers')
export class CustomerController {
  @Get()
  get() {
    return 'Obter clientes';
  }
  @Get(':document')
  getById(@Param('document') document) {
    return 'Obter o cliente ' + document;
  }
  @Post()
  post(@Body() body) {
    return body;
  }
  @Put(':document')
  put(@Param('document') document,@Body() body) {
    return {customer: document, body};
  }
  @Delete()
  delete() {
    return 'Remove um cliente';
  }
}
