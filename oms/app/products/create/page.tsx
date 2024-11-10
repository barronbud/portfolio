import ProductForm from "@/components/products/form";
import { Button } from "@/components/ui/button";
import { onCreateProduct } from "@/app/products/actions";

export default function CreateProductPage() {
    return (
        <div>
            <ProductForm onSaveProduct={onCreateProduct}>
                <div className="flex justify-center mt-4">
                    <Button type="submit">Add new product</Button>
                </div>
            </ProductForm>
        </div>
    );
}
