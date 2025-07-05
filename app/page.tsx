import About from "@/components/about";
import Recommendations from "@/components/recommendations";
import ContactCTA from "@/components/contact-cta";
import TechnicalSkills from "@/components/technical-skills";
import { PageContainer } from "@/components/ui/page-container";

export const dynamic = "force-dynamic";

export default function Page() {
    return (
        <section className="space-y-0">
            <div id="about" className="mb-24">
                <About />
            </div>

            <PageContainer>
                <TechnicalSkills />
            </PageContainer>

            <div id="recommendations" className="mb-24">
                <Recommendations />
            </div>

            <div id="contact" className="mb-24">
                <ContactCTA />
            </div>
        </section>
    );
}
