import { CategoryImage } from "@components/CategoryCard/CategoryCard.style";
import SearchInput from "@components/SearchInput/SearchInput";
import { Section } from "@components/Section/Section.style";
import { useEffect, useState } from "react";
import { Table } from "./ProductListPage.styles";
import {
  getProducts,
  PaginatedResult,
  Product,
} from "@services/productService";
import ProductPaginationSwitcher from "@components/ProductPaginationSwitcher/ProductPaginationSwitcher";

const ImageCell = ({ src }: { src?: string }) => (
  <Table.ImageCellContainer>
    {src && (
      <CategoryImage
        className="category-image"
        src={src || "/assets/images/nuts.png"}
        alt="Produto"
      />
    )}
  </Table.ImageCellContainer>
);

const NameCell = ({ name }: { name: string }) => (
  <Table.BodyCell>{name}</Table.BodyCell>
);

const PriceCell = ({ price }: { price: number }) => (
  <Table.BodyCell>R$ {price.toFixed(2)}</Table.BodyCell>
);

const BrandCell = ({ brand }: { brand: { id: string; name: string } }) => (
  <Table.BodyCell>{brand.name}</Table.BodyCell>
);

export default function ProductListPage() {
  const [products, setProducts] = useState<Product[]>([]);

  const [filter, setFilter] = useState<string>("");
  const [totalPages, setTotalPages] = useState<number>(1);
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(2);
  const [textSearch, setTextSearch] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [useTablePagination, setUseTablePagination] = useState(true);

  const fetchProducts = async (params: {
    page?: number;
    limit?: number;
    search?: string;
  }) => {
    try {
      setLoading(true);
      const dataFetch: PaginatedResult<Product> = await getProducts(params);
      setProducts(dataFetch.data);
      setTotalPages(dataFetch.totalPages);
    } catch (err: unknown) {
      const typedError = err as Error;
      setError(typedError.message || "Erro ao carregar produtos.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts({
      page: page,
      limit: limit,
      search: filter,
    });
  }, [page, limit, filter]);

  if (loading) return <p>Carregando...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <Section>
      <Section.Header>
        <Section.Header.Title>Produtos</Section.Header.Title>
      </Section.Header>

      <Section.Content>
        <SearchInput
          value={textSearch}
          placeholder="Filtrar por nome / marca"
          onChange={(valor) => {
            setLoading(true);
            setTextSearch(valor);
            setFilter(valor);
            setPage(1);
          }}
        />
      </Section.Content>

      <Section.Content>
        <Table>
          <thead>
            <tr>
              <Table.HeadCell width="100px">Imagem</Table.HeadCell>
              <Table.HeadCell>Nome</Table.HeadCell>
              <Table.HeadCell>Preço</Table.HeadCell>
              <Table.HeadCell>Marca</Table.HeadCell>
            </tr>
          </thead>
          <tbody>
            {products.map((product: Product) => (
              <Table.BodyRow key={product.id}>
                <ImageCell src={product.image} />
                <NameCell name={product.name} />
                <PriceCell price={product.price} />
                <BrandCell brand={product.brand} />
              </Table.BodyRow>
            ))}
          </tbody>
        </Table>
      </Section.Content>

      <Section>
        <ProductPaginationSwitcher
          page={page}
          limit={limit}
          totalPages={totalPages}
          products={products}
          setPage={setPage}
          setLimit={setLimit}
          useTablePagination={useTablePagination}
          setUseTablePagination={setUseTablePagination}
        />
      </Section>
    </Section>
  );
}
