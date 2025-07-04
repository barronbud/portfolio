import TechnicalLeadership from "@/components/technical-leadership";

export const metadata = {
    title: "Technical Leadership Philosophy",
    description: "Pragmatic technology decisions focused on business value, team productivity, and long-term maintainability over technical novelty.",
};

export default function TechnicalLeadershipPage() {
    return (
        <div className="max-w-7xl mx-auto px-4 lg:px-6 py-8">
            <TechnicalLeadership />
        </div>
    );
}
