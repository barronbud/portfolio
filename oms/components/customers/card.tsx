import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export interface Customer {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    address?: string | null;
    city?: string | null;
    state?: string | null;
    zip?: string | null;
}

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
