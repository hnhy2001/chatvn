import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreatePageDto {
    @ApiProperty()
    name: string;

    @ApiProperty()
    longSecretKey: string;

    @ApiProperty()
    longPageSecretKey: string;

    @ApiProperty()
    faceBookId: string;

    @ApiProperty()
    pageFaceBookId: string;
}
