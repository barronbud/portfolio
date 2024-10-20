import { NextResponse } from "next/server";
import { db } from "./db";
import { Order } from "@/app/types";

export async function GET() {
    const orders = await db.getOrders();
    return NextResponse.json(orders);
}
