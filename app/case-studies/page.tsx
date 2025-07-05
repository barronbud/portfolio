import CaseStudies from "@/components/case-studies";
import { PageContainer } from "@/components/ui/page-container";

export const metadata = {
    title: "Case Studies & Project Portfolio",
    description:
        "Detailed case studies showcasing successful engineering leadership projects, team transformations, and technical implementations.",
};

export default function CaseStudiesPage() {
    return (
        <PageContainer>
            <CaseStudies />
        </PageContainer>
    );
}
