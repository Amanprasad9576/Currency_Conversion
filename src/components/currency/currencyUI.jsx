import { Card, CardContent, CardFooter } from "@/components/ui/card";
import ButtonDemo from "../buttom/buttom";
import { useState } from "react";
import CurrencyInput from "./currencyInput";
import useCurrencyConversion from "../Hooks/useCurrencyConversion";

function CurrencyCard() {
  const [fromCurrency, setFromCurrency] = useState(null);
  const [toCurrency, setToCurrency] = useState(null);
  const [amount, setAmount] = useState(""); 
  const [showResult, setShowResult] = useState(false);

  const { data, isLoading, error } = useCurrencyConversion(fromCurrency, toCurrency);

  const handleConvert = () => {
    if (!fromCurrency || !toCurrency || !amount) {
      alert("Please select currencies and enter amount.");
      return;
    }
    setShowResult(true);
  };

  const converted = data?.conversion_rate ? (amount * data.conversion_rate).toFixed(2) : null;

  return (
    <Card className="p-6 bg-black/80 text-white rounded-xl shadow-2xl w-full max-w-[750px]">
      <CardContent className="flex flex-col gap-6 items-center justify-center">
        <div className="bg-sky-900 text-blue-800">
          <h2 className="bg-sky-900 text-blue-400 text-2xl font-bold">Currency Converter</h2>
        </div>

        {/* Amount Input */}
        <input
          type="number"
          placeholder="Enter amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-[200px] py-2 px-3 text-black rounded"
        />

        <div className="flex flex-row items-center justify-center gap-4">
          <CurrencyInput placeholder="From" onChange={setFromCurrency} />
          <ButtonDemo />
          <CurrencyInput placeholder="To" onChange={setToCurrency} />
        </div>

        {/* Result display */}
        {showResult && fromCurrency && toCurrency && amount && !isLoading && !error && (
          <div className="text-white pt-4 text-lg font-semibold">
            {amount} {fromCurrency} = {converted} {toCurrency}
          </div>
        )}

        {isLoading && showResult && <p>Loading conversion rate…</p>}
        {error && showResult && <p>Error loading conversion rate</p>}
      </CardContent>

      <CardFooter>
        <div className="w-full flex justify-center">
          <button
            onClick={handleConvert}
            className="w-[300px] h-[40px] flex items-center justify-center p-1 border border-indigo-500 bg-yellow-400 text-black text-sm rounded hover:bg-yellow-500 transition-colors"
          >
            Convert {fromCurrency || "FROM"} to {toCurrency || "TO"}
          </button>
        </div>
      </CardFooter>
    </Card>
  );
}

export default CurrencyCard;




