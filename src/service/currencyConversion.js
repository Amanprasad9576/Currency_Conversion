import { axiosConversion } from "@/components/helper/axios";

async function currencyConversion({ queryKey }){
    try {
       const [,from,to] = queryKey;
       const response = await axiosConversion.get(`/${from}/${to}`);
       console.log(response);
       return response.data; 
    } catch (error) {
        console.log('Error in fetching data',error);
        throw error;
    }
}

export default currencyConversion;