import LeadershipResults from "@/components/leadership-results";

export const metadata = {
    title: "Leadership Results & Impact",
    description: "Proven track record of delivering measurable results that drive business value and team success. 150% team velocity increase, 60% time savings, and 20+ engineers successfully led.",
};

export default function ResultsPage() {
    return (
        <div className="max-w-7xl mx-auto px-4 lg:px-6 py-8">
            <LeadershipResults />
        </div>
    );
}
