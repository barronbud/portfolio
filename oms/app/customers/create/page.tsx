import CustomerForm from "@/components/customers/form";
import { oms_CustomerModel } from "@jeffreyabarron/portfolio-db/prisma/zod";
import { z } from "zod";
import prisma from "@/db/client";
import { revalidatePath } from "next/cache";
import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";

export default function CreateCustomerPage() {
    const onCreateCustomer = async (
        data: z.infer<typeof oms_CustomerModel>
    ) => {
        "use server";

        await prisma.oms_Customer.create({
            data,
        });

        await revalidatePath("/customers");
        redirect("/demos/order-management-system/customers");
    };

    return (
        <div>
            <h1 className="text-2xl font-bold mb-6">Create New Customer</h1>
            <CustomerForm onSaveCustomer={onCreateCustomer}>
                <div className="flex justify-center mt-4">
                    <Button type="submit">Add new customer</Button>
                </div>
            </CustomerForm>
        </div>
    );
}
