import React, { useEffect, useState } from 'react';
import CurrencySelector from '../components/CurrencySelector';
import AmountInput from '../components/AmountInput';
import ConversionResult from '../components/ConversionResult';


const apiKey = import.meta.env.VITE_EXCHANGE_RATE_API_KEY;
const API_URL = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/`;

const App: React.FC = () => {
  const [currencies, setCurrencies] = useState<string[]>([]);
  const [fromCurrency, setFromCurrency] = useState<string>('USD');
  const [toCurrency, setToCurrency] = useState<string>('EUR');
  const [amount, setAmount] = useState<number>(1);
  const [exchangeRate, setExchangeRate] = useState<number | null>(null);
  const [lastUpdated, setLastUpdated] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(`${API_URL}${fromCurrency}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.result === 'success') {
          setCurrencies(Object.keys(data.conversion_rates));
          setExchangeRate(data.conversion_rates[toCurrency]);
          setLastUpdated(data.time_last_update_utc);
        } else {
          throw new Error('Failed to fetch exchange rates.');
        }
      })
      .catch((err) => {
        console.error(err);
        setError('Unable to fetch exchange rates.');
      });
  }, [fromCurrency, toCurrency]);

  const handleAmountChange = (value: number) => setAmount(value);

  const convertedAmount = exchangeRate ? (amount * exchangeRate).toFixed(2) : '...';

  return (
    <div className="w-full h-screen bg-blue-600 flex flex-col">
      {/* Top Navbar */}
      <header className="flex justify-between items-center px-6 py-4 text-white">
        <div className="text-lg font-semibold">💱 Exchanger</div>
        <div className="flex gap-2">
          <button className="text-sm hover:underline">Login</button>
          <button className="bg-white text-blue-600 text-sm px-3 py-1 rounded-md font-medium hover:bg-gray-100">Sign up</button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex flex-col items-center justify-center flex-grow px-4">
        <h1 className="text-white text-xl md:text-2xl font-semibold mb-6 text-center">
          {amount} {fromCurrency} = {convertedAmount} {toCurrency}
        </h1>

        <div className="bg-white p-6 md:p-8 rounded-3xl shadow-lg w-full max-w-xl space-y-4">
          <AmountInput amount={amount} onAmountChange={handleAmountChange} />
          <CurrencySelector
            label="From"
            currencies={currencies}
            selectedCurrency={fromCurrency}
            onChangeCurrency={setFromCurrency}
          />
          <CurrencySelector
            label="To"
            currencies={currencies}
            selectedCurrency={toCurrency}
            onChangeCurrency={setToCurrency}
          />
          <ConversionResult
            amount={amount}
            from={fromCurrency}
            to={toCurrency}
            result={convertedAmount}
            exchangeRate={exchangeRate}
            lastUpdated={lastUpdated}
          />
        </div>

        {/* Error Message */}
        {error && <div className="text-red-200 mt-4">{error}</div>}
      </main>
    </div>
  );
};

export default App;
