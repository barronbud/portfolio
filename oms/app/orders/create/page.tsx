import OrderForm from "@/components/order-form";

// Server Action
// async function createOrder(formData: FormData) {
//     "use server";

// try {
//     // Convert FormData to object and validate
//     const rawFormData = {
//         customerId: formData.get("customerId"),
//         status: formData.get("status"),
//         total: formData.get("total"),
//         orderItems: JSON.parse(formData.get("orderItems") as string),
//     };

//     const validatedData = OrderSchema.parse(rawFormData);

//     // Create order with items in a transaction
//     await prisma.$transaction(async (tx) => {
//         const order = await tx.oms_Order.create({
//             data: {
//                 customerId: validatedData.customerId,
//                 status: validatedData.status,
//                 total: validatedData.total,
//                 orderItems: {
//                     create: validatedData.orderItems.map((item) => ({
//                         productId: item.productId,
//                         quantity: item.quantity,
//                         price: item.price,
//                     })),
//                 },
//             },
//         });
//     });

//     revalidatePath("/orders");
//     redirect("/orders");
// } catch (error) {
//     console.error("Failed to create order:", error);
//     throw new Error("Failed to create order");
// }
// }

export default function CreateOrderPage() {
    return (
        <div className="max-w-2xl mx-auto p-6">
            <h1 className="text-2xl font-bold mb-6">Create New Order</h1>
            <OrderForm />
        </div>
    );
}

// Separate client component for order items
// "use client"
// function OrderItemsField() {
//     const [orderItems, setOrderItems] = useState([
//         { productId: "", quantity: "", price: "" },
//     ]);

//     const addOrderItem = () => {
//         setOrderItems([
//             ...orderItems,
//             { productId: "", quantity: "", price: "" },
//         ]);
//     };

//     // Update hidden input with JSON string of order items
//     useEffect(() => {
//         const input = document.getElementById(
//             "orderItemsJson"
//         ) as HTMLInputElement;
//         if (input) {
//             input.value = JSON.stringify(orderItems);
//         }
//     }, [orderItems]);

//     return (
//         <div className="space-y-4">
//             <h2 className="text-lg font-semibold">Order Items</h2>
//             {orderItems.map((item, index) => (
//                 <div key={index} className="p-4 border rounded-md space-y-4">
//                     <div>
//                         <label className="block text-sm font-medium text-gray-700">
//                             Product ID
//                         </label>
//                         <input
//                             type="number"
//                             value={item.productId}
//                             onChange={(e) => {
//                                 const newItems = [...orderItems];
//                                 newItems[index].productId = e.target.value;
//                                 setOrderItems(newItems);
//                             }}
//                             className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
//                             required
//                         />
//                     </div>
//                     <div>
//                         <label className="block text-sm font-medium text-gray-700">
//                             Quantity
//                         </label>
//                         <input
//                             type="number"
//                             value={item.quantity}
//                             onChange={(e) => {
//                                 const newItems = [...orderItems];
//                                 newItems[index].quantity = e.target.value;
//                                 setOrderItems(newItems);
//                             }}
//                             className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
//                             required
//                         />
//                     </div>
//                     <div>
//                         <label className="block text-sm font-medium text-gray-700">
//                             Price
//                         </label>
//                         <input
//                             type="number"
//                             step="0.01"
//                             value={item.price}
//                             onChange={(e) => {
//                                 const newItems = [...orderItems];
//                                 newItems[index].price = e.target.value;
//                                 setOrderItems(newItems);
//                             }}
//                             className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
//                             required
//                         />
//                     </div>
//                 </div>
//             ))}
//             <input
//                 type="hidden"
//                 id="orderItemsJson"
//                 name="orderItems"
//                 value="[]"
//             />
//             <button
//                 type="button"
//                 onClick={addOrderItem}
//                 className="mt-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200"
//             >
//                 Add Another Item
//             </button>
//         </div>
//     );
// }
