"use client";

import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { oms_CustomerModel } from "@jeffreyabarron/portfolio-db/prisma/zod";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import { Customer } from "@/app/types";
import CustomerFormBody from "./form-body";

export default function CustomerForm({
    onSaveCustomer,
    customer,
    children,
}: {
    onSaveCustomer: (data: Customer) => Promise<Customer>;
    customer?: Customer | null;
    children?: React.ReactNode;
}) {
    const form = useForm<Customer>({
        resolver: zodResolver(oms_CustomerModel),
        defaultValues: {
            id: customer?.id || undefined,
            firstName: customer?.firstName || "",
            lastName: customer?.lastName || "",
            email: customer?.email || "",
            phone: customer?.phone || "",
            address: customer?.address || "",
            city: customer?.city || "",
            state: customer?.state || "",
            zip: customer?.zip ?? "",
        },
    });

    const { toast } = useToast();
    const router = useRouter();

    const onSubmit = async (data: Customer) => {
        try {
            await onSaveCustomer(data);
            toast({
                title: "Customer saved",
                description: "Customer saved successfully",
            });
            router.refresh();
        } catch (error) {
            toast({
                title: "Error",
                description: `${error}`,
            });
        }
        router.push("/demos/order-management-system/customers");
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="flex items-center justify-between mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                        {customer?.id ? "Edit Customer" : "New Customer"}
                    </h1>
                </div>

                <CustomerFormBody form={form} />
                {children}
            </form>
        </Form>
    );
}
