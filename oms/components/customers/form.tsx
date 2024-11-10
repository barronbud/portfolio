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
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                {/* Header Section */}
                <div className="flex items-center justify-between mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                        {customer ? "Edit Customer" : "New Customer"}
                    </h1>
                </div>

                {/* Form Card */}
                <div className="overflow-hidden bg-white rounded-xl shadow-sm dark:bg-gray-800">
                    <div className="p-6 space-y-6">
                        {/* Basic Info Section */}
                        <div className="space-y-4">
                            <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                                Basic Information
                            </h3>

                            <div className="grid gap-4 md:grid-cols-2">
                                <FormField
                                    control={form.control}
                                    name="firstName"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="text-sm font-medium text-gray-500 dark:text-gray-400">
                                                First Name
                                            </FormLabel>
                                            <FormControl>
                                                <Input
                                                    {...field}
                                                    className="mt-1 bg-gray-50 dark:bg-gray-700/50 border-gray-200 dark:border-gray-700"
                                                />
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
                                            <FormLabel className="text-sm font-medium text-gray-500 dark:text-gray-400">
                                                Last Name
                                            </FormLabel>
                                            <FormControl>
                                                <Input
                                                    {...field}
                                                    className="mt-1 bg-gray-50 dark:bg-gray-700/50 border-gray-200 dark:border-gray-700"
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>

                            <div className="grid gap-4 md:grid-cols-2">
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="text-sm font-medium text-gray-500 dark:text-gray-400">
                                                Email
                                            </FormLabel>
                                            <FormControl>
                                                <Input
                                                    {...field}
                                                    className="mt-1 bg-gray-50 dark:bg-gray-700/50 border-gray-200 dark:border-gray-700"
                                                />
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
                                            <FormLabel className="text-sm font-medium text-gray-500 dark:text-gray-400">
                                                Phone
                                            </FormLabel>
                                            <FormControl>
                                                <Input
                                                    {...field}
                                                    className="mt-1 bg-gray-50 dark:bg-gray-700/50 border-gray-200 dark:border-gray-700"
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                        </div>

                        {/* Address Section */}
                        <div className="space-y-4 pt-6 border-t dark:border-gray-700">
                            <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                                Address Information
                            </h3>

                            <div className="grid gap-4 md:grid-cols-1">
                                <FormField
                                    control={form.control}
                                    name="address"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="text-sm font-medium text-gray-500 dark:text-gray-400">
                                                Address
                                            </FormLabel>
                                            <FormControl>
                                                <Input
                                                    {...field}
                                                    className="mt-1 bg-gray-50 dark:bg-gray-700/50 border-gray-200 dark:border-gray-700"
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>

                            <div className="grid gap-4 md:grid-cols-3">
                                <FormField
                                    control={form.control}
                                    name="city"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="text-sm font-medium text-gray-500 dark:text-gray-400">
                                                City
                                            </FormLabel>
                                            <FormControl>
                                                <Input
                                                    {...field}
                                                    className="mt-1 bg-gray-50 dark:bg-gray-700/50 border-gray-200 dark:border-gray-700"
                                                />
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
                                            <FormLabel className="text-sm font-medium text-gray-500 dark:text-gray-400">
                                                State
                                            </FormLabel>
                                            <StateDropdown
                                                value={field.value}
                                                onValueChange={field.onChange}
                                                className="mt-1 bg-gray-50 dark:bg-gray-700/50 border-gray-200 dark:border-gray-700"
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
                                            <FormLabel className="text-sm font-medium text-gray-500 dark:text-gray-400">
                                                Zip
                                            </FormLabel>
                                            <FormControl>
                                                <Input
                                                    {...field}
                                                    className="mt-1 bg-gray-50 dark:bg-gray-700/50 border-gray-200 dark:border-gray-700"
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex justify-end gap-4 pt-6 border-t dark:border-gray-700">
                            {children}
                        </div>
                    </div>
                </div>
            </form>
        </Form>
    );
}
