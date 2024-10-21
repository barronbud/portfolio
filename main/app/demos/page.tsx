import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Demos",
    description: "Demo apps exploring new tools and tech",
};

export default function Page() {
    return (
        <section>
            <h2 className="text-xl font-bold mb-4">
                <a
                    href="/demos/order-management-system"
                    className="hover:underline underline"
                >
                    Order Management System
                </a>
            </h2>
            <h3 className="font-semibold mb-4">
                Current Status: <em>Work in Progress</em>
            </h3>
            <p className="mb-4">
                The Order Management System is a web-based application designed
                to help businesses manage their sales and order processes
                efficiently.
            </p>
            <ul className="list-disc list-inside">
                <li>
                    Order Processing: The application allows staff to process
                    orders, moving them through various stages from initial
                    creation to completion.
                </li>
                <li>
                    Shopping Cart: It provides a digital shopping cart where
                    items can be added, removed, or modified before finalizing a
                    purchase.
                </li>
                <li>
                    Quick Sale Feature: There&apos;s a feature for processing
                    quick sales, which might be useful for in-person
                    transactions or returning customers.
                </li>
            </ul>
        </section>
    );
}
