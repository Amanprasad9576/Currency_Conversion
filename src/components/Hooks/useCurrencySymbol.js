
import { useQuery } from '@tanstack/react-query';
import currencySymbol from '@/service/currencySymbol';


 function useCurrencySymbol() {
  const { error, isLoading, data } = useQuery({
    queryKey: ['currency-symbols'],
    queryFn: currencySymbol,
    staleTime: 1000 * 60 * 60,
  });
   console.log('data in Hooks', data);       
   console.log('error in Hooks ', error);     

  return {
    error,
    isLoading,
    data,  
  };
}

export default useCurrencySymbol;