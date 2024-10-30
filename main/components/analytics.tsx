"use client";

import { Analytics } from "@vercel/analytics/react";

export default function AnalyticsWrapper() {
    return (
        <Analytics
            beforeSend={(event) => {
                if (localStorage.getItem("disable-analytics")) {
                    return null;
                }

                return event;
            }}
        ></Analytics>
    );
}
