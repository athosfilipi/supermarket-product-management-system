import axios from "axios";

export interface Product {
  id: string;
  name: string;
  price: number;
  image?: string;
  brandId: string;
  brand: {
    id: string;
    name: string;
  };
}

export interface ProductCreateInput {
  name: string;
  price: number;
  description?: string;
  image?: string;
  brandId: string;
}

export interface PaginatedResult<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export type SearchRequestParams = {
  page?: number;
  limit?: number;
  search?: string;
};

export const getProducts = async (
  params: SearchRequestParams
): Promise<PaginatedResult<Product>> => {
  const searchParams = new URLSearchParams();
  if (params.page !== undefined) searchParams.append("page", params.page.toString());
  if (params.limit !== undefined) searchParams.append("limit", params.limit.toString());
  if (params.search) searchParams.append("search", params.search);

  const response = await axios.get<PaginatedResult<Product>>(
    `http://localhost:3100/api/v1/products?${searchParams.toString()}`
  );
  return response.data;
};

export const createProduct = async (
  product: ProductCreateInput
): Promise<Product> => {
  const response = await axios.post<Product>(
    "http://localhost:3100/api/v1/products",
    product
  );
  return response.data;
};