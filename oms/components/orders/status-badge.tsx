export default function StatusBadge({ status }: { status: string }) {
    let color = "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300";
    if (status === "completed") {
        color =
            "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400";
    } else if (status === "pending") {
        color =
            "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400";
    } else if (status === "cancelled") {
        color = "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400";
    } else if (status === "processing") {
        color =
            "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400";
    }

    return (
        <span
            className={`inline-flex px-3 py-1 text-xs font-medium rounded-full ${color}`}
        >
            {status}
        </span>
    );
}
