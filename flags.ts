import { flag } from "@vercel/flags/next";

export const showFullOMS = flag({ key: "showFullOMS", decide: () => false });
