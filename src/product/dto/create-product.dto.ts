import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, isNotEmpty } from "class-validator";

export class CreateProductDto {
    @IsNotEmpty()
    @ApiProperty()
    name: string;

    @IsNotEmpty()
    @ApiProperty()
    cost: number;

    @IsNotEmpty()
    @ApiProperty()
    price: number;
}
