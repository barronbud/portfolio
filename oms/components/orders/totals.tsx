export default function Totals({ subtotal }: { subtotal: number }) {
    return (
        <>
            <div className="flex justify-end pt-4 border-t border-border">
                <p className="font-medium mr-2">Subtotal:</p>
                <p className="font-medium">
                    {(subtotal / 100).toLocaleString("en-US", {
                        currency: "USD",
                        style: "currency",
                    })}
                </p>
            </div>

            <div className="flex justify-end pt-4 border-t border-border">
                <p className="font-medium mr-2">Tax:</p>
                <p className="font-medium">
                    {((subtotal * 0.06) / 100).toLocaleString("en-US", {
                        currency: "USD",
                        style: "currency",
                    })}
                </p>
            </div>

            <div className="flex justify-end pt-4 border-t border-border">
                <p className="font-medium mr-2">Shipping:</p>
                <p className="font-medium">
                    {((subtotal * 0.1) / 100).toLocaleString("en-US", {
                        currency: "USD",
                        style: "currency",
                    })}
                </p>
            </div>

            <div className="flex justify-end pt-4 border-t border-border">
                <p className="font-medium mr-2">Total:</p>
                <p className="font-medium">
                    {((subtotal * 1.16) / 100).toLocaleString("en-US", {
                        currency: "USD",
                        style: "currency",
                    })}
                </p>
            </div>
        </>
    );
}
