import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product, ProductDocument } from './schemas/product.schema';
import { ProductDto } from './tdo/product.dto';

@Injectable()
export class ProductService {
    constructor(@InjectModel(Product.name) private readonly ProductModel: Model<ProductDocument>){}

    async addProduct(addProductDto: ProductDto): Promise<Product>{
        return await new this.ProductModel({
            ...addProductDto,
            crearedAt: Date.now()
        }).save()
    }

    async listProduct(): Promise<Product[]>{
        return await this.ProductModel.find().exec()
    }

    async getProduct(id: string): Promise<Product>{
        return await this.ProductModel.findById(id).exec()
    }

    async updateProduct(id: string, product: ProductDto): Promise<Product>{
        return await this.ProductModel.findByIdAndUpdate(id, product).exec()
    }

    async deleteProduct(id: string): Promise<Product> {
        return await this.ProductModel.findByIdAndDelete(id).exec()
    }
}
