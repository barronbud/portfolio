import LeadershipPhilosophy from "@/components/leadership-philosophy";

export const metadata = {
    title: "Leadership Philosophy",
    description: "Authentic leadership through transparency, psychological safety, and servant leadership. Creating environments where innovation thrives through honest communication and genuine care.",
};

export default function PhilosophyPage() {
    return (
        <div className="max-w-7xl mx-auto px-4 lg:px-6 py-8">
            <LeadershipPhilosophy />
        </div>
    );
}
