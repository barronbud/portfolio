import prisma from "@/db/client";
import { DataTable } from "@/components/ui/data-table";
import { columns } from "./columns";

export default async function CustomersPage() {
    const customers = await prisma.oms_User.findMany();

    return (
        <section>
            <h1 className="text-2xl font-bold mb-4">Customers</h1>
            <DataTable columns={columns} data={customers} />
        </section>
    );
}
