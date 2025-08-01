import LeadershipResults from "@/components/leadership-results";
import { PageContainer } from "@/components/ui/page-container";

export const metadata = {
    title: "Results & Impact",
    description:
        "Proven track record of delivering measurable results that drive business value and team success. 150% team velocity increase, 60% time savings, and 20+ engineers successfully led.",
};

export default function ResultsPage() {
    return (
        <PageContainer>
            <LeadershipResults />
        </PageContainer>
    );
}
