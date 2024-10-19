import { unstable_flag as flag } from "@vercel/flags/next";

export const showDemos = flag({ key: "showDemos", decide: () => false });
