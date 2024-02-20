import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductSchema } from './Products';

@Module({
  imports: [
	MongooseModule.forRoot('mongodb+srv://christoloisel:Rose230323@cluster0.soahdz4.mongodb.net/?retryWrites=true&w=majority'),
	MongooseModule.forFeature([
		{ name: 'Product', schema: ProductSchema }
	])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
