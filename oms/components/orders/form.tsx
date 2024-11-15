"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import CustomerLookup from "@/components/customers/customer-lookup";
import CustomerCard from "@/components/customers/card";
import ProductLookup from "@/components/products/product-lookup";
import Cart from "./cart";
import Totals from "./totals";
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";
import { Product, OrderItem, Customer, Order } from "@/app/types";
import { PlusIcon } from "@radix-ui/react-icons";
import CustomerFormBody from "@/components/customers/form-body";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import { oms_CustomerModel } from "@jeffreyabarron/portfolio-db/prisma/zod";
import { onCreateOrder } from "@/app/orders/actions";
import { onCreateCustomer } from "@/app/customers/actions";

export default function OrderForm() {
    const [customer, setCustomer] = useState<Customer | null>(null);
    const [orderItems, setOrderItems] = useState<OrderItem[]>([]);
    const [subtotal, setSubtotal] = useState(0);
    const router = useRouter();
    const { toast } = useToast();

    const form = useForm<Customer>({
        resolver: zodResolver(oms_CustomerModel),
    });

    const handleAddCustomer = () => {
        const newCustomer = {
            id: "",
            firstName: "",
            lastName: "",
            email: "",
            address: "",
            city: "",
            state: "",
            zip: "",
            phone: "",
            isActive: true,
        };
        setCustomer(newCustomer);
        form.reset(newCustomer);
    };

    const handleSelect = (customer: Customer) => {
        setCustomer(customer);
        form.reset(customer);
    };

    const handleAddProduct = (product: Product) => {
        setOrderItems([
            ...orderItems,
            {
                quantity: 1,
                product: product,
            },
        ]);
        setSubtotal(subtotal + product.price);
    };

    const handleQuantityChange = (index: number, quantity: string) => {
        const quantityNumber = parseInt(quantity);

        if (quantityNumber === 0) {
            return handleDeleteItem(index);
        }

        const updatedItems = [...orderItems];
        updatedItems[index].quantity = quantityNumber || 0;
        setOrderItems(updatedItems);
        setSubtotal(
            updatedItems.reduce(
                (acc, item) => acc + item.product.price * item.quantity,
                0
            )
        );
    };

    const handleDeleteItem = (index: number) => {
        const updatedItems = [...orderItems];
        updatedItems.splice(index, 1);
        setOrderItems(updatedItems);
        setSubtotal(
            updatedItems.reduce(
                (acc, item) => acc + item.product.price * item.quantity,
                0
            )
        );
    };

    const handleSubmit = async (data: Customer) => {
        if (!customer) {
            return;
        }

        const orderData: Order = {
            customer: data,
            orderItems,
            subtotal,
            tax: subtotal * 0.06,
            shipping: subtotal * 0.1,
            total: subtotal * 1.16,
        };

        try {
            if (!data.id) {
                const newCustomer = { ...data, id: undefined };
                orderData.customer = await onCreateCustomer(newCustomer);
            }
            await onCreateOrder(orderData);
            toast({
                title: "Order created",
                description: "The order has been created successfully",
            });
            router.refresh();
        } catch (error) {
            toast({
                title: "Error",
                description: `${error}`,
            });
        }
        router.push("/demos/order-management-system/orders");
    };

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(handleSubmit, (errors) => {
                    console.log(errors);
                })}
                className="space-y-6"
            >
                <div>
                    <div className="flex items-center justify-between mb-8">
                        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                            New Order
                        </h1>
                    </div>

                    <div className="overflow-hidden bg-white rounded-xl shadow-sm dark:bg-gray-800">
                        <div className="p-6 space-y-6">
                            <div className="space-y-4">
                                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                                    Customer Information
                                </h3>
                                {!customer ? (
                                    <div className="flex flex-row gap-4">
                                        <div className="w-1/2">
                                            <CustomerLookup
                                                handleSelect={handleSelect}
                                            />
                                        </div>
                                        <Button
                                            className="bg-teal-600 hover:bg-teal-600"
                                            onClick={handleAddCustomer}
                                        >
                                            <PlusIcon /> Add Customer
                                        </Button>
                                    </div>
                                ) : !customer.id ? (
                                    <CustomerFormBody form={form} />
                                ) : (
                                    <CustomerCard customer={customer} />
                                )}
                            </div>
                            {customer && (
                                <div>
                                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                                        Order Items
                                    </h3>
                                    <div className="grid grid-cols-2 gap-4 space-y-4 pt-6 border-t dark:border-gray-700">
                                        <div>
                                            <ProductLookup
                                                handleSelect={handleAddProduct}
                                            />
                                        </div>

                                        <div className="mt-4 space-y-4">
                                            <Cart
                                                orderItems={orderItems}
                                                handleDeleteItem={
                                                    handleDeleteItem
                                                }
                                                handleQuantityChange={
                                                    handleQuantityChange
                                                }
                                            />
                                        </div>
                                    </div>

                                    <Totals subtotal={subtotal} />
                                </div>
                            )}

                            {customer && (
                                <div className="flex justify-end gap-4 pt-6 border-t border-border">
                                    <Button
                                        type="submit"
                                        disabled={orderItems.length === 0}
                                    >
                                        Create Order
                                    </Button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </form>
        </Form>
    );
}
