import TechnicalLeadership from "@/components/technical-leadership";
import { PageContainer } from "@/components/ui/page-container";

export const metadata = {
    title: "Technical Leadership Philosophy",
    description:
        "Pragmatic technology decisions focused on business value, team productivity, and long-term maintainability over technical novelty.",
};

export default function TechnicalLeadershipPage() {
    return (
        <PageContainer>
            <TechnicalLeadership />
        </PageContainer>
    );
}
