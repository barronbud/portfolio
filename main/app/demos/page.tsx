import { Metadata } from "next";
import { ExternalButton } from "../components/buttons";
import Image from "next/image";
export const metadata: Metadata = {
    title: "Demos",
    description: "Demo apps exploring new tools and tech",
};

export default function Page() {
    return (
        <section>
            <h1 className="mb-8 text-5xl font-semibold tracking-tighter">
                Demos
            </h1>
            <div className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
                <div className="pt-6 space-y-4 flex flex-col items-center sm:flex-row">
                    <div className="">
                        <a href="/demos/order-management-system">
                            <Image
                                src="/images/order-demo.png"
                                alt=""
                                width={1308}
                                height={816}
                            />
                        </a>
                    </div>
                    <div className="font-medium text-center">
                        <div className="text-amber-700 dark:text-amber-500 text-3xl">
                            Order Management System
                        </div>
                        <div className="text-slate-700 dark:text-slate-500 text-lg mb-4">
                            Current Status: <em>Work in Progress</em>
                        </div>

                        <blockquote className="text-left mx-4">
                            <p className="text-lg font-medium">
                                The Order Management System is a demo web-based
                                application designed to help businesses create
                                and manage their orders with an easy-to-use
                                interface.
                            </p>

                            <p className="font-medium text-lg mt-4">
                                Tech Stack:
                            </p>
                            <ul className="list-disc list-inside">
                                <li>Next.js</li>
                                <li>Tailwind CSS</li>
                                <li>Prisma</li>
                                <li>PostgreSQL</li>
                            </ul>
                            <div className="flex justify-center">
                                <ExternalButton href="/demos/order-management-system">
                                    View Demo
                                </ExternalButton>
                            </div>
                        </blockquote>
                    </div>
                </div>
            </div>
        </section>
    );
}
