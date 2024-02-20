import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { Product } from './Products';

@Controller('products')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  async createProduct(@Body() product: Product): Promise<Product> {
    return this.appService.createProduct(product);
  }

  @Get()
  async getAllProducts(): Promise<Product[]> {
    return this.appService.getAllProducts();
  }


  @Put(':id')
  async updateProduct(@Param('id') id: string, @Body() product: Product): Promise<Product> {
    return this.appService.updateProduct(id, product);
  }

  @Delete(':id')
  async deleteProduct(@Param('id') id: string): Promise<Product> {
    return this.appService.deleteProduct(id);
  }
}
