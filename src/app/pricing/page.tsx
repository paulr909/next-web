import { Container } from "@/components/Container"
import { SectionTitle } from "@/components/SectionTitle"
import { CTA } from "@/components/CTA"
import { FAQ } from "@/components/FAQ"

export default function Features() {
  return (
    <Container>
      <SectionTitle preTitle="FAQ" title="Frequently Asked Questions">
        Answer your customers possible questions here, it will increase the
        conversion rate as well as support or chat requests.
      </SectionTitle>
      <FAQ />
      <CTA />
    </Container>
  )
}
