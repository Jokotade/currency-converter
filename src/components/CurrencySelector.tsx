import { HiChevronDown } from 'react-icons/hi';

interface CurrencySelectorProps {
  label: string;
  currencies: string[];
  selectedCurrency: string;
  onChangeCurrency: (currency: string) => void;
}

const CurrencySelector: React.FC<CurrencySelectorProps> = ({
  label,
  currencies,
  selectedCurrency,
  onChangeCurrency,
}) => {
  return (
    <div className="relative w-full">
      <label className="sr-only">{label}</label>
      <select
        value={selectedCurrency}
        onChange={(e) => onChangeCurrency(e.target.value)}
        className="appearance-none w-full border rounded-md px-4 py-3 pr-10 text-base font-medium bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        {currencies.map((currency) => (
          <option key={currency} value={currency}>
            {currency}
          </option>
        ))}
      </select>
      <HiChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
    </div>
  );
};

export default CurrencySelector;
