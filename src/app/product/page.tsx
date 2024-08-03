import { Container } from "@/components/Container"
import { SectionTitle } from "@/components/SectionTitle"
import { Benefits } from "@/components/Benefits"
import { CTA } from "@/components/CTA"
import { FAQ } from "@/components/FAQ"
import { benefitOne, benefitTwo } from "@/components/data"

export default function Features() {
  return (
    <Container>
      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />
      <SectionTitle
        preTitle="Watch a video"
        title="Learn how to fullfil your needs"
      >
        This section is to highlight a promo or demo video of your product.
        Analysts says a landing page with video has 3% more conversion rate. So,
        don&apos;t forget to add one. Just like this.
      </SectionTitle>
      <SectionTitle
        preTitle="Testimonials"
        title="Here's what our customers said"
      >
        Testimonials is a great way to increase the brand trust and awareness.
        Use this section to highlight your popular customers.
      </SectionTitle>
      <FAQ />
      <CTA />
    </Container>
  )
}
