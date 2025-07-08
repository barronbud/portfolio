import Hero from "./hero";
import CoreCompetencies from "./core-competencies";
import LeadershipPhilosophyBrief from "./leadership-philosophy-brief";

export default function About() {
    return (
        <div className="relative">
            <Hero />
            <LeadershipPhilosophyBrief />
            <CoreCompetencies />
        </div>
    );
}
