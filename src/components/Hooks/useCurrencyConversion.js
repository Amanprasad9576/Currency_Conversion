import { useQuery } from "@tanstack/react-query";
import currencyConversion from "@/service/currencyConversion";

 function useCurrencyConversion(from, to){
    const { isLoading,error,data} = useQuery({
        queryKey: ['currency-conversion', from, to],
        queryFn: currencyConversion,
        enabled: !!from && !!to,   
    });
    return {
        isLoading,
        error,
        data
    }
}
export default useCurrencyConversion;