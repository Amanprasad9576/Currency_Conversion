import useCurrencyConversion from "../Hooks/useCurrencyConversion";

function CurrencyConversion({from,to}) {
    const { error, isLoading, data } = useCurrencyConversion(from, to);
    if (isLoading) return <p>Loading conversion rate…</p>;
    if (error) return <p>Error loading conversion rate</p>;
  
    return (
      <div className="p-4 text-white">
        <p>
          1 {from} = {data?.conversion_rate} {to}
        </p>
      </div>
    );
  }
export default CurrencyConversion;