import LeadershipPhilosophy from "@/components/leadership-philosophy";
import { PageContainer } from "@/components/ui/page-container";

export const metadata = {
    title: "Leadership & Technical Philosophy",
    description:
        "Combining people leadership with technical excellence to drive consistent results. Proven approach to building high-velocity teams through process optimization and pragmatic technology decisions.",
};

export default function PhilosophyPage() {
    return (
        <PageContainer>
            <LeadershipPhilosophy />
        </PageContainer>
    );
}
