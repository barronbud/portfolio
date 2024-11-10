"use client";

import { z } from "zod";
import {
    Form,
    FormControl,
    FormLabel,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { oms_CustomerModel } from "@jeffreyabarron/portfolio-db/prisma/zod";
import StateDropdown from "@/components/ui/states";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";

export default function CustomerForm({
    onSaveCustomer,
    customer,
    children,
}: {
    onSaveCustomer: (data: z.infer<typeof oms_CustomerModel>) => Promise<void>;
    customer?: z.infer<typeof oms_CustomerModel> | null;
    children?: React.ReactNode;
}) {
    const form = useForm<z.infer<typeof oms_CustomerModel>>({
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

    const onSubmit = async (data: z.infer<typeof oms_CustomerModel>) => {
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
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <div className="grid grid-cols-2 gap-2">
                    <FormField
                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>First Name</FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="lastName"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Last Name</FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <div className="grid grid-cols-2 gap-2">
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Phone</FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <div className="grid grid-cols-4 gap-2">
                    <FormField
                        control={form.control}
                        name="address"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Address</FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="city"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>City</FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="state"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>State</FormLabel>
                                <StateDropdown
                                    value={field.value}
                                    onValueChange={field.onChange}
                                />
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="zip"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Zip</FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                {children}
            </form>
        </Form>
    );
}
