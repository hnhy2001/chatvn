import { ApiProperty } from "@nestjs/swagger";
import { IsEnum, IsNotEmpty, NotEquals } from "class-validator";

export enum Role {
    ADMIN = 'admin',
    USER = 'user',
}

export class CreateUserDto {
    @ApiProperty()
    @IsNotEmpty()
    userName: string;

    @ApiProperty()
    @IsNotEmpty()
    password: string;

    @ApiProperty()
    @IsEnum(Role)
    role: Role;
}
