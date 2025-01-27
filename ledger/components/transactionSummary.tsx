"use client";

import { Pie, PieChart } from "recharts";

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    ChartConfig,
    ChartContainer,
    ChartLegend,
    ChartLegendContent,
} from "@/components/ui/chart";

export default function TransactionSummary() {
    const chartData = [
        { vendor: "bezos", total: 275, fill: "var(--color-bezos)" },
        { vendor: "other", total: 90, fill: "var(--color-other)" },
    ];

    const flaggedTransactionTotal = 14012;

    const chartConfig = {
        total: {
            label: "Total",
        },
        bezos: {
            label: "Bezos",
            color: "hsl(var(--chart-1))",
        },
        other: {
            label: "Other",
            color: "hsl(var(--chart-2))",
        },
    } satisfies ChartConfig;

    return (
        <Card className="flex flex-col min-w-[450px]">
            <CardHeader className="items-center pb-0">
                <CardTitle>Total Spent on By Company</CardTitle>
                <CardDescription>January - June 2024</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 pb-0">
                <div className="flex flex-col items-center justify-center">
                    <span className="text-2xl font-bold">
                        {flaggedTransactionTotal.toLocaleString("en-US", {
                            style: "currency",
                            currency: "USD",
                        })}
                    </span>
                </div>
                <ChartContainer
                    config={chartConfig}
                    className="mx-auto aspect-square max-h-[250px]"
                >
                    <PieChart>
                        <Pie
                            data={chartData}
                            dataKey="total"
                            nameKey="vendor"
                            innerRadius={60}
                        />
                        <ChartLegend
                            content={<ChartLegendContent nameKey="vendor" />}
                            className="-translate-y-2 flex-wrap gap-2 [&>*]:basis-1/4 [&>*]:justify-center"
                        />
                    </PieChart>
                </ChartContainer>
            </CardContent>
        </Card>
    );
}
