import CustomerForm from "@/components/customers/form";
import { oms_CustomerModel } from "@jeffreyabarron/portfolio-db/prisma/zod";
import { z } from "zod";
import prisma from "@/db/client";
import { revalidatePath } from "next/cache";
import { Button } from "@/components/ui/button";

export default async function EditCustomerPage({
    params,
}: {
    params: Promise<{ customerId: string }>;
}) {
    const { customerId } = await params;

    const onEditCustomer = async (data: z.infer<typeof oms_CustomerModel>) => {
        "use server";

        await prisma.oms_Customer.update({
            where: {
                id: customerId,
            },
            data,
        });

        await revalidatePath("/customers");
    };

    const customer = await prisma.oms_Customer.findUnique({
        where: {
            id: customerId,
        },
    });

    return (
        <div>
            <h1 className="text-2xl font-bold mb-6">Edit Customer</h1>
            <CustomerForm onSaveCustomer={onEditCustomer} customer={customer}>
                <div className="flex justify-center mt-4">
                    <Button type="submit">Save customer</Button>
                </div>
            </CustomerForm>
        </div>
    );
}
