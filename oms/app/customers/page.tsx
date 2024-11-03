import prisma from "@/db/client";
import { DataTable } from "@/components/ui/data-table";
import { columns } from "./columns";

export default async function CustomersPage() {
    const customerData = await prisma.oms_Customer.findMany();

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
            <h1 className="text-2xl font-bold mb-4">Customers</h1>
            <DataTable columns={columns} data={customers} />
        </section>
    );
}
