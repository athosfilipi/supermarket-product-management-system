import { IsUUID, IsString, IsNotEmpty } from "class-validator";

export class CreateBrandDto {
//   @IsUUID()
//   @IsNotEmpty()
//   id: string;

  @IsString()
  @IsNotEmpty()
  name: string;
}
