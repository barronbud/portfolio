export default function Home() {
    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">
                Welcome to Order Management System (OMS)
            </h1>
            <h3 className="text-lg font-semibold mb-4">
                Current Status: <em>Work in Progress</em>
            </h3>
            <h3 className="text-lg font-semibold mb-4">Overview</h3>
            <p className="mb-4">
                The Order Management System is a web-based application designed
                to help businesses manage their sales and order processes
                efficiently. Here's what it does:
            </p>
            <ul className="list-disc list-inside">
                <li>
                    Order Processing: The application allows staff to process
                    orders, moving them through various stages from initial
                    creation to completion.
                </li>
                <li>
                    Shopping Cart: It provides a digital shopping cart where
                    items can be added, removed, or modified before finalizing a
                    purchase.
                </li>
                <li>
                    Quick Sale Feature: There's a feature for processing quick
                    sales, which might be useful for in-person transactions or
                    returning customers.
                </li>
            </ul>
        </div>
    );
}
