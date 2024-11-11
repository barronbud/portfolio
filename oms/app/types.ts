export interface Order {
    id?: string;
    customer: Customer;
    subtotal: number;
    tax: number;
    shipping: number;
    total: number;
    orderItems: OrderItem[];
    createdAt?: Date;
    updatedAt?: Date;
}

export interface OrderItem {
    id?: string;
    product: Product;
    quantity: number;
}

export interface Product {
    id: string;
    name: string;
    price: number;
}

export interface Customer {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    address: string;
    city: string;
    state: string;
    zip: string;
    phone: string;
    isActive: boolean;
}
