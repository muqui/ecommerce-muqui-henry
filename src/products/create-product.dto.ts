import { IsNumber, IsString } from "class-validator";

export class CreateProductDto{
    @IsString()
    description:string; 
    @IsNumber()
    price: number; 
    @IsNumber()      
    stock: number; 
    @IsString()      
    imgUrl: string; 
    @IsString()     
    name : string;   
    @IsNumber()    
    categoryId: number;  
    @IsString()
    barcode : string;
}