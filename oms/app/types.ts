export interface Order {
    id: number;
    cartID: string;
    orderNumber: string;
    orderDate: string;
    user: User;
    subtotal: number;
    tax: number;
    shipping: number;
    total: number;
    items: OrderItem[];
}

export interface OrderItem {
    id: number;
    orderID: number;
    product: Product;
    quantity: number;
}

export interface Product {
    id: number;
    name: string;
    price: number;
}

export interface User {
    id: number;
    name: string;
}
