import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "./select";
import { FormControl } from "./form";

const states = [
    "AL",
    "AK",
    "AZ",
    "AR",
    "CA",
    "CO",
    "CT",
    "DE",
    "FL",
    "GA",
    "HI",
    "ID",
    "IL",
    "IN",
    "IA",
    "KS",
    "KY",
    "LA",
    "ME",
    "MD",
    "MA",
    "MI",
    "MN",
    "MS",
    "MO",
    "MT",
    "NE",
    "NV",
    "NH",
    "NJ",
    "NM",
    "NY",
    "NC",
    "ND",
    "OH",
    "OK",
    "OR",
    "PA",
    "RI",
    "SC",
    "SD",
    "TN",
    "TX",
    "UT",
    "VT",
    "VA",
    "WA",
    "WV",
    "WI",
    "WY",
];

export default function StateDropdown({
    value,
    onValueChange,
}: {
    value: string;
    onValueChange: (value: string) => void;
}) {
    return (
        <Select defaultValue={value} onValueChange={onValueChange}>
            <FormControl>
                <SelectTrigger>
                    <SelectValue placeholder="Select a state" />
                </SelectTrigger>
            </FormControl>
            <SelectContent>
                {states.map((state) => (
                    <SelectItem key={state} value={state}>
                        {state}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    );
}
