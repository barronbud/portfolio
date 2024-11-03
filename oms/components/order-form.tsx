"use client";

import { z } from "zod";
import {
    Form,
    FormControl,
    FormLabel,
    FormField,
    FormItem,
} from "@/components/ui/form";
import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectItem,
} from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import CustomerLookup from "./customer-lookup";
const OrderSchema = z.object({
    customerId: z.string().min(1).transform(Number).optional(),
    status: z.enum(["pending", "processing", "completed", "cancelled"]),
});

export default function OrderForm() {
    const useFormSchema = () => {
        return useForm({
            resolver: zodResolver(OrderSchema),
            defaultValues: {
                customerId: "",
                status: "",
                total: 0,
                orderItems: [],
            },
        });
    };
    const form = useFormSchema();
    const handleSelect = (id: string) => {
        form.setValue("customerId", id, {
            shouldValidate: true,
        });
    };

    return (
        <Form {...form}>
            <form>
                {!form.getValues("customerId") && (
                    <CustomerLookup handleSelect={handleSelect} />
                )}

                <FormField
                    control={form.control}
                    name="status"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Status</FormLabel>
                            <FormControl>
                                <Select {...field}>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select a status" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="pending">
                                            Pending
                                        </SelectItem>
                                        <SelectItem value="processing">
                                            Processing
                                        </SelectItem>
                                        <SelectItem value="completed">
                                            Completed
                                        </SelectItem>
                                        <SelectItem value="cancelled">
                                            Cancelled
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                            </FormControl>
                        </FormItem>
                    )}
                />
            </form>
        </Form>
    );
}
