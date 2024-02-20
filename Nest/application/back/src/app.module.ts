import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PokeSchema } from './Schema/PokeSchema';

@Module({
  imports: [
	MongooseModule.forRoot('mongodb+srv://christoloisel:Rose230323@cluster0.soahdz4.mongodb.net/Pablo'),
	MongooseModule.forFeature([{name: 'Pokemon', schema: PokeSchema}])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
