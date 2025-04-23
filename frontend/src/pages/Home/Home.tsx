import { SectionPage } from "./SectionPage";
import { Section } from "@components/Section/Section.style";



export default function Home() {
  return (
    <>
      <Section>
        <Section.Header>
          <Section.Header.Title>Título da Seção</Section.Header.Title>
        </Section.Header>

        <SectionPage.Category />
        
      </Section>
    </>
  );
}
