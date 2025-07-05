import useCurrencySymbol from "../Hooks/useCurrencySymbol";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

function CurrencyInput({ onChange, placeholder }) {
  const { data, isLoading, isError } = useCurrencySymbol();

  return (
    <div className="bg-yellow-600 text-blue-400 p-4">
      <div className="flex flex-col gap-2 w-[180px]">
        {isLoading ? (
          <p>Loading currencies…</p>
        ) : isError || !data?.supported_codes ? (
          <p>Error loading currencies</p>
        ) : (
          <Select onValueChange={onChange}>
            <SelectTrigger className="text-base">
              <SelectValue placeholder={placeholder || "Select Currency"} />
            </SelectTrigger>
            <SelectContent>
              {data.supported_codes.map(([code]) => (
                <SelectItem key={code} value={code}>
                   {code}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        )}
      </div>
    </div>
  );
}
export default CurrencyInput;



