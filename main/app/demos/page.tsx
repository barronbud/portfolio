import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Demos",
    description: "Demo apps exploring new tools and tech",
};

export default function Page() {
    return (
        <section>
            <a href="/demos/order-management-system">Order Management System</a>
        </section>
    );
}
