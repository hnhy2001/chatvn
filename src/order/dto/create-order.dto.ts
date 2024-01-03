import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";
import { ORDER } from "../const";

export class CreateOrderDto {
    @IsNotEmpty()
    @ApiProperty()
    name: string;

    @IsNotEmpty()
    @ApiProperty()
    phoneNumber: string;

    @IsNotEmpty()
    @ApiProperty()
    address: string;

    @IsNotEmpty()
    @ApiProperty()
    productId: string;

    @ApiProperty()
    userId: string;
}
