
import CategoryCard from "@components/CategoryCard/CategoryCard";
import { Section } from "@components/Section/Section.style";

export default function Category() {
  return (
    <>
      <Section>
        <Section.Content>
          <CategoryCard
            title={"Product"}
            description="510 products"
            imgProps={{ src: "/assets/images/nuts.png", alt: "Castanha" }}
          />
          <CategoryCard
            title={"Product"}
            description="510 products"
            imgProps={{ src: "/assets/images/nuts.png", alt: "Castanha" }}
          />
          <CategoryCard
            title={"Product"}
            description="510 products"
            imgProps={{ src: "/assets/images/nuts.png", alt: "Castanha" }}
          />
          <CategoryCard
            title={"Product"}
            description="510 products"
            imgProps={{ src: "/assets/images/nuts.png", alt: "Castanha" }}
          />
          <CategoryCard
            title={"Product"}
            description="510 products"
            imgProps={{ src: "/assets/images/nuts.png", alt: "Castanha" }}
          />
        </Section.Content>
      </Section>
    </>
  );
}
