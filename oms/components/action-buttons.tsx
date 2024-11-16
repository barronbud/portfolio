"use client";

import { Button } from "@/components/ui/button";
import { onProcessOrder, onCancelOrder } from "@/app/orders/actions";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";

export default function ProcessOrderButton({ orderId }: { orderId: string }) {
    const { toast } = useToast();
    const router = useRouter();

    const processOrder = async () => {
        await onProcessOrder(orderId);
        toast({
            title: "Order processed",
            description: "The order has been processed",
        });
        router.refresh();
    };

    return (
        <Button variant="default" className="mx-2" onClick={processOrder}>
            Process order
        </Button>
    );
}

export function CancelOrderButton({ orderId }: { orderId: string }) {
    const { toast } = useToast();
    const router = useRouter();

    const cancelOrder = async () => {
        await onCancelOrder(orderId);
        toast({
            title: "Order cancelled",
            description: "The order has been cancelled",
        });
        router.refresh();
    };

    return (
        <Button variant="destructive" className="mx-2" onClick={cancelOrder}>
            Cancel order
        </Button>
    );
}
