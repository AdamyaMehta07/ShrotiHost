import { Accordion } from "@/components/ui/Accordion";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { sharedFaqs } from "@/data/shared-hosting";

export default function Home() {
  return (
    <>
      <PageHero
        eyebrow="Components test"
        title="Shared Hosting"
        description="Ye sirf test page hai, components dekhne ke liye."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Hosting", href: "/hosting" },
          { label: "Shared Hosting" },
        ]}
      >
        <Button href="/hosting">See hosting plans</Button>
        <Button href="/contact" variant="secondary">Talk to us</Button>
      </PageHero>

      <Section title="FAQ test" intro="Sawal pe click karke dekh." tinted>
        <div className="mb-4 flex gap-2">
          <Badge>Most popular</Badge>
          <Badge tone="neutral">Soon</Badge>
          <Badge tone="success">Included</Badge>
        </div>
        <Accordion items={sharedFaqs} />
      </Section>
    </>
  );
}