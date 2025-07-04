import CaseStudies from "@/components/case-studies";

export const metadata = {
    title: "Case Studies & Project Portfolio",
    description: "Detailed case studies showcasing successful engineering leadership projects, team transformations, and technical implementations.",
};

export default function CaseStudiesPage() {
    return (
        <div className="max-w-7xl mx-auto px-4 lg:px-6 py-8">
            <CaseStudies />
        </div>
    );
}
