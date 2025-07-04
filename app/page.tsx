import About from "@/components/about";
import Recommendations from "@/components/recommendations";
import ContactCTA from "@/components/contact-cta";
import TechnicalSkills from "@/components/technical-skills";

export const dynamic = "force-dynamic";

export default function Page() {
    return (
        <section className="space-y-0">
            <div id="about" className="mb-24">
                <About />
            </div>

            <div className="max-w-7xl mx-auto px-4 lg:px-6 py-8">
                <TechnicalSkills />
            </div>

            <div id="recommendations" className="mb-24">
                <Recommendations />
            </div>

            <div id="contact" className="mb-24">
                <ContactCTA />
            </div>
        </section>
    );
}
