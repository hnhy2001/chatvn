import { ApiProperty } from "@nestjs/swagger";
import { IsEnum, IsNotEmpty, NotEquals } from "class-validator";

export class SignInDto {
    @ApiProperty()
    @IsNotEmpty()
    userName: string;

    @ApiProperty()
    @IsNotEmpty()
    password: string;
}
