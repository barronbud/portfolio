import CustomerForm from "@/components/customers/form";
import prisma from "@/db/client";
import { Button } from "@/components/ui/button";
import { onEditCustomer } from "@/app/customers/actions";

export default async function EditCustomerPage({
    params,
}: {
    params: Promise<{ customerId: string }>;
}) {
    const { customerId } = await params;

    const customer = await prisma.oms_Customer.findUnique({
        where: {
            id: customerId,
        },
    });

    return (
        <div>
            <CustomerForm onSaveCustomer={onEditCustomer} customer={customer}>
                <div className="flex justify-center mt-4">
                    <Button type="submit">Save customer</Button>
                </div>
            </CustomerForm>
        </div>
    );
}
