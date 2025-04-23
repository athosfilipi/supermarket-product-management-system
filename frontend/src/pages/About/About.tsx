import SearchInput from "@components/SearchInput/SearchInput";
import { Section } from "@components/Section/Section.style";
import ProductCreatePage from "@pages/Product/ProductCreatePage/ProductCreatePage";
import ProductListPage from "@pages/Product/ProductListPage/ProductListPage";
import { useState } from "react";

export default function About() {

  const [textSearch, setTextSearch] = useState<string>('');

  return (
    <>
      <Section>
        <Section.Header>
          <Section.Header.Title>Sobre</Section.Header.Title>
        </Section.Header>        
        <SearchInput
          value={textSearch}
          onChange={(valor) => {
            console.log({ valor });
            setTextSearch(valor)
          }}
        />
        <hr />
        <ProductListPage />
        <hr />
        <ProductCreatePage />
        {/* <SectionPage.Category />
        <SectionPage.Category /> */}
      </Section>
    </>
  );
}
