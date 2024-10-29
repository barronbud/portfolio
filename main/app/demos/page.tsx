import { Metadata } from "next";
import { demoApps } from "./data";
import Demo from "../components/demos";

export const metadata: Metadata = {
    title: "Demos",
    description: "Demo apps exploring new tools and tech",
};

export default function Page() {
    return (
        <section>
            {demoApps.map((demo) => (
                <Demo key={demo.href} {...demo} />
            ))}
        </section>
    );
}
