import { unstable_flag as flag } from "@vercel/flags/next";

export const showNewApp = flag({ key: "new-app", decide: () => false });
