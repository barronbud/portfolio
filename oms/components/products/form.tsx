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
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { oms_ProductModel } from "@jeffreyabarron/portfolio-db/prisma/zod";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";

export default function ProductForm({
    onSaveProduct,
    product,
    children,
}: {
    onSaveProduct: (data: z.infer<typeof oms_ProductModel>) => Promise<void>;
    product?: z.infer<typeof oms_ProductModel> | null;
    children?: React.ReactNode;
}) {
    const form = useForm<z.infer<typeof oms_ProductModel>>({
        resolver: zodResolver(oms_ProductModel),
        defaultValues: {
            id: product?.id || undefined,
            name: product?.name || "",
            description: product?.description || "",
            price: product?.price || 0,
            stock: product?.stock || 0,
            sku: product?.sku || "",
        },
    });

    const { toast } = useToast();
    const router = useRouter();

    const onSubmit = async (data: z.infer<typeof oms_ProductModel>) => {
        try {
            data.price = data.price * 100;

            await onSaveProduct(data);
            toast({
                title: "Product saved",
                description: "Product saved successfully",
            });
            router.refresh();
        } catch (error) {
            toast({
                title: "Error",
                description: `${error}`,
            });
        }
        router.push("/demos/order-management-system/products");
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                {/* Header Section */}
                <div className="flex items-center justify-between mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                        {product ? "Edit Product" : "New Product"}
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
                                    name="name"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="text-sm font-medium text-gray-500 dark:text-gray-400">
                                                Name
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
                                    name="sku"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="text-sm font-medium text-gray-500 dark:text-gray-400">
                                                SKU
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

                            <FormField
                                control={form.control}
                                name="description"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-sm font-medium text-gray-500 dark:text-gray-400">
                                            Description
                                        </FormLabel>
                                        <FormControl>
                                            <Textarea
                                                {...field}
                                                className="mt-1 min-h-[100px] bg-gray-50 dark:bg-gray-700/50 border-gray-200 dark:border-gray-700"
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>

                        {/* Pricing and Inventory Section */}
                        <div className="space-y-4 pt-6 border-t dark:border-gray-700">
                            <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                                Pricing & Inventory
                            </h3>

                            <div className="grid gap-4 md:grid-cols-2">
                                <FormField
                                    control={form.control}
                                    name="price"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="text-sm font-medium text-gray-500 dark:text-gray-400">
                                                Price
                                            </FormLabel>
                                            <FormControl>
                                                <Input
                                                    {...field}
                                                    type="number"
                                                    step="0.01"
                                                    className="mt-1 bg-gray-50 dark:bg-gray-700/50 border-gray-200 dark:border-gray-700"
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="stock"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="text-sm font-medium text-gray-500 dark:text-gray-400">
                                                Stock
                                            </FormLabel>
                                            <FormControl>
                                                <Input
                                                    {...field}
                                                    type="number"
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
