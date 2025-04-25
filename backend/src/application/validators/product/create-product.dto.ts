import { IsUUID, IsString, IsNotEmpty, IsOptional, IsNumber, Min, Matches, Validate } from "class-validator";
import { Transform } from "class-transformer";

// Validação customizada para garantir que o preço tenha no máximo 3 casas decimais
class DecimalPrecisionValidation {
  validate(value: number): boolean {
    return value.toString().split(".")[1]?.length <= 3;
  }

  defaultMessage(): string {
    return "O preço deve ter no máximo 3 casas decimais.";
  }
}

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @Min(0)
  @Validate(DecimalPrecisionValidation)  // Garantindo que o preço não ultrapasse 3 casas decimais
  @Transform(({ value }: { value: any }) => {
    const numericValue = Number(value);  // Garantir que o valor seja numérico
    if (isNaN(numericValue)) {
      throw new Error("O valor de preço deve ser um número válido.");
    }
    return parseFloat(numericValue.toFixed(3));  // Arredonda para 3 casas decimais
  }, { toClassOnly: true })
  price: number;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsString()
  @Matches(/^data:image\/[a-zA-Z]+;base64,/, {
    message: "A imagem deve estar no formato base64 válido",
  })
  image?: string;

  @IsUUID()
  @IsNotEmpty()
  brandId: string;
}
