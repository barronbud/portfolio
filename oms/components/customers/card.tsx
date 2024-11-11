import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Customer } from "@/app/types";

export default function CustomerCard({
    customer,
    children,
}: {
    customer: Customer;
    children?: React.ReactNode;
}) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{`${customer.firstName} ${customer.lastName}`}</CardTitle>
            </CardHeader>
            <CardContent>
                {children}
                <p>{customer.email}</p>
                <p>{customer.address}</p>
                <p>{`${customer.city}, ${customer.state} ${customer.zip}`}</p>
            </CardContent>
        </Card>
    );
}
