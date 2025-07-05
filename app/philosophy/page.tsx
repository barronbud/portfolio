import LeadershipPhilosophy from "@/components/leadership-philosophy";
import { PageContainer } from "@/components/ui/page-container";

export const metadata = {
    title: "Leadership Philosophy & Remote Expertise",
    description:
        "Authentic leadership through transparency, psychological safety, and servant leadership. 3+ years leading distributed teams across multiple time zones, building high-performing remote-first cultures.",
};

export default function PhilosophyPage() {
    return (
        <PageContainer>
            <LeadershipPhilosophy />
        </PageContainer>
    );
}
