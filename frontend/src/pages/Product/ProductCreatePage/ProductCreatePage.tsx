import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { validateForm } from "./validation";
import ImageUploader from "@components/Images/ImageUploader";
import { Section } from "@components/Section/Section.style";
import { createProduct } from "@services/productService";
import axios from "axios";

type Brand = {
  id: string;
  name: string;
};

interface FormData {
  name: string;
  price: number;
  description?: string;
  image?: string;
  brandId: string;
}

export default function ProductCreatePage() {
  const navigate = useNavigate();
  const [brands, setBrands] = useState<Brand[]>([]);
  const [submitError, setSubmitError] = useState("");

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    setError,
  } = useForm<FormData>({
    defaultValues: {
      name: "",
      price: 0,
      description: "",
      image: "",
      brandId: "",
    },
  });

  useEffect(() => {
    const fetchBrands = async () => {
      try {
        const res = await axios.get<Brand[]>("http://localhost:3100/api/v1/brands");
        setBrands(res.data);
      } catch (error) {
        console.error("Erro ao carregar marcas:", error);
      }
    };

    fetchBrands();
  }, []);

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setSubmitError("");

    const validationErrors = await validateForm(data);
    if (validationErrors) {
      validationErrors.forEach((validationError: any) => {
        setError(validationError.path, { message: validationError.message });
      });
    } else {
      try {
        await createProduct(data as FormData);
        navigate("/");
      } catch (err: any) {
        console.error(err);
        setSubmitError("Erro ao criar o produto.");
      }
    }
  };

  const handleImageChange = (image: string) => {
    setValue("image", image, { shouldValidate: true });
  };

  return (
    <Section>
      <Section.Header>
        <Section.Header.Title>Cadastro de Produtos</Section.Header.Title>
      </Section.Header>

      <Section.Content>
        <form
          onSubmit={handleSubmit(onSubmit)}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            maxWidth: 400,
          }}
        >
          {submitError && <p style={{ color: "red" }}>{submitError}</p>}

          <input placeholder="Nome" {...register("name")} />
          {errors.name && (
            <span style={{ color: "red" }}>{errors.name.message}</span>
          )}

          <input
            type="number"
            step="0.01"
            placeholder="Preço"
            {...register("price")}
          />
          {errors.price && (
            <span style={{ color: "red" }}>{errors.price.message}</span>
          )}

          <textarea placeholder="Descrição" {...register("description")} />
          {errors.description && (
            <span style={{ color: "red" }}>{errors.description.message}</span>
          )}

          <ImageUploader onImageChange={handleImageChange} />
          {errors.image && (
            <span style={{ color: "red" }}>{errors.image.message}</span>
          )}

          <select {...register("brandId")}>
            <option value="">Selecione uma marca</option>
            {brands.map((b) => (
              <option key={b.id} value={b.id}>
                {b.name}
              </option>
            ))}
          </select>
          {errors.brandId && (
            <span style={{ color: "red" }}>{errors.brandId.message}</span>
          )}

          <button type="submit">Salvar</button>
        </form>
      </Section.Content>
    </Section>
  );
}
