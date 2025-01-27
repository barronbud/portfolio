"use client";

import { useQuery } from "@tanstack/react-query";
import { Preferences } from "@/app/types";

export function usePreferences() {
    return useQuery<Preferences>({
        queryKey: ["preferences"],
        queryFn: () => {
            return {
                flaggedCompanies: [],
            };
            // fetch(
            //     `${
            //         import.meta.env.VITE_BEZOS_WALLET_BACKEND_URL
            //     }/api/userpreferences`
            // ).then((res) => res.json()),
        },
    });
}
