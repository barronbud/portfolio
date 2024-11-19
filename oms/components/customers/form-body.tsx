import {
    FormControl,
    FormLabel,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import StateDropdown from "@/components/ui/states";
import { UseFormReturn } from "react-hook-form";
import { Customer } from "@/app/types";

export default function CustomerFormBody({
    form,
}: {
    form: UseFormReturn<Customer>;
}) {
    return (
        <div className="overflow-hidden bg-white rounded-xl shadow-sm dark:bg-gray-800">
            <div className="p-6 space-y-6">
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
            </div>
        </div>
    );
}
