import HiringInnovation from "@/components/hiring-innovation";
import { PageContainer } from "@/components/ui/page-container";

export const metadata = {
    title: "Hiring Innovation & Philosophy",
    description:
        "Revolutionizing technical hiring through human-centered approaches, practical assessments, and transparent communication.",
};

export default function HiringPage() {
    return (
        <PageContainer>
            <HiringInnovation />
        </PageContainer>
    );
}
