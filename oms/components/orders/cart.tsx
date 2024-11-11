import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { TrashIcon } from "lucide-react";
import { OrderItem } from "@/app/types";

export default function Cart({
    orderItems,
    handleDeleteItem,
    handleQuantityChange,
}: {
    orderItems: OrderItem[];
    handleDeleteItem: (index: number) => void;
    handleQuantityChange: (index: number, quantity: string) => void;
}) {
    return (
        <>
            {orderItems.map((item, index) => (
                <div
                    key={index}
                    className="flex flex-row items-center gap-4 p-4 rounded-lg bg-gray-50 dark:bg-gray-700"
                >
                    <Button
                        variant="destructive"
                        size="icon"
                        onClick={() => handleDeleteItem(index)}
                    >
                        <TrashIcon className="w-4 h-4" />
                    </Button>
                    <div className="flex-1">
                        <p className="font-medium">{item.product.name}</p>
                        <p className="text-sm text-muted-foreground">
                            {(item.product.price / 100).toLocaleString(
                                "en-US",
                                {
                                    currency: "USD",
                                    style: "currency",
                                }
                            )}
                        </p>
                    </div>
                    <Input
                        type="number"
                        value={item.quantity}
                        onChange={(e) => {
                            handleQuantityChange(index, e.target.value);
                        }}
                        onFocus={(e) => {
                            e.target.select();
                        }}
                        className="w-24"
                    />
                    <p className="font-medium w-24 text-right">
                        {(
                            (item.product.price * item.quantity) /
                            100
                        ).toLocaleString("en-US", {
                            currency: "USD",
                            style: "currency",
                        })}
                    </p>
                </div>
            ))}
        </>
    );
}
