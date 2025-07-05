import useCurrencySymbol from '../Hooks/useCurrencySymbol';

export default function CurrencySymbol() {
    const { data, isLoading, isError } = useCurrencySymbol();
  
     if (isLoading) return <p>Loading…</p>;
     if (isError || !data?.supported_codes) return <p>Error loading symbols</p>;

    
    return (
        <ul>
          {data.supported_codes.map(([code, name]) => (
             <li key={code}>{code}</li>
          ))}
        </ul>
    );
}

  
  
  
    

