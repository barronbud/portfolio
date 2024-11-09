import prisma from "@/db/client";
import { DataTable } from "@/components/ui/data-table";
import { columns } from "./columns";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function CustomersPage() {
    const customerData = await prisma.oms_Customer.findMany({
        where: {
            isActive: true,
        },
        orderBy: {
            createdAt: "desc",
        },
    });

    const customers = customerData.map((customer) => ({
        id: customer.id,
        firstName: customer.firstName,
        lastName: customer.lastName,
        email: customer.email,
        createdAt: customer.createdAt,
        address: customer.address ?? "",
        city: customer.city ?? "",
        state: customer.state ?? "",
        zip: customer.zip ?? "",
        phone: customer.phone ?? "",
    }));

    return (
        <section>
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold">Customers</h1>
                <Link href="/demos/order-management-system/customers/create">
                    <Button variant="default">Create new customer</Button>
                </Link>
            </div>
            <DataTable columns={columns} data={customers} />
        </section>
    );
}
