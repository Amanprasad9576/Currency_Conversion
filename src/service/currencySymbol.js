import { axiosSymbols } from "@/components/helper/axios";

async function currencySymbol() {
    try {
       const response = await axiosSymbols.get();
       console.log('Fetched currency symbols:',response.data.conversion_rates); 
       return response.data; 
    } catch (error) {
       console.error('Error fetching currency symbols:', error);
       throw error;
    }
}
  
export default currencySymbol;