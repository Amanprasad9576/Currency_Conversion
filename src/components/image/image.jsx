import CurrencyCard from '../currency/currencyUI';

function Image() {
  return (
    <div className="w-full h-screen relative flex justify-center items-center">
      <img 
        src={`https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2`}
        className="h-full w-full object-cover"
        alt="Currency Converter"
      />

      {/* Overlay content */}
      <div className="absolute inset-0 flex justify-center items-center">
        <CurrencyCard />
      </div>
    </div>
  );
}

export default Image;



  
  