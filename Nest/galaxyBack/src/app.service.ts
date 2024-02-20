import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from './Products';

@Injectable()
export class AppService {
	updateProduct(id: String , product: Product): Promise<Product> {
		this.productModel.findById(id).updateOne(product).exec();
		return this.productModel.findById(id).exec();


	}
	constructor(@InjectModel('Product') private readonly productModel: Model<Product>) { }

	async createProduct(product: Product): Promise<Product> {
		const newProduct = new this.productModel(product);
		return newProduct.save();
	}

	async getAllProducts(): Promise<Product[]> {
		return this.productModel.find().exec();
	}

	async deleteProduct(id: string): Promise<Product> {
		return this.productModel.findById(id).deleteOne();
	}
}
