import CustomerForm from "@/components/customers/form";
import { Button } from "@/components/ui/button";
import { onCreateCustomer } from "@/app/customers/actions";

export default function CreateCustomerPage() {
    return (
        <div>
            <CustomerForm onSaveCustomer={onCreateCustomer}>
                <div className="flex justify-center mt-4">
                    <Button type="submit">Add new customer</Button>
                </div>
            </CustomerForm>
        </div>
    );
}
