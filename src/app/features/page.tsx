import { Container } from "@/components/Container"
import { SectionTitle } from "@/components/SectionTitle"
import { Video } from "@/components/Video"
import { Testimonials } from "@/components/Testimonials"
import { FAQ } from "@/components/FAQ"

export default function Features() {
  return (
    <Container>
      <Video videoId="fZ0D0cnR88E" />
      <SectionTitle
        preTitle="Testimonials"
        title="Here's what our customers said"
      >
        Testimonials is a great way to increase the brand trust and awareness.
        Use this section to highlight your popular customers.
      </SectionTitle>
      <Testimonials />
      <SectionTitle preTitle="FAQ" title="Frequently Asked Questions">
        Answer your customers possible questions here, it will increase the
        conversion rate as well as support or chat requests.
      </SectionTitle>
      <FAQ />
    </Container>
  )
}
