import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductDto } from './tdo/product.dto';

@Controller('product')
export class ProductController {
    constructor(private readonly productService : ProductService){}

    @Get("list-product")
    async list(){
        return await this.productService.listProduct()
    }
  
    @Get(':id')
    async product(@Param('id') id: string){
        return this.productService.getProduct(id)
    }

    @Post('add-product')
    async addProduct(@Body() product: ProductDto){
        return this.productService.addProduct(product)
    }

    @Put('update/:id')
    async update(@Param('id') id: string, @Body() product: ProductDto){
        return this.productService.updateProduct(id, product)
    }

    @Delete("delete/:id")
    async delete(@Param('id') id: string){
        return this.productService.deleteProduct(id)
    }
}
