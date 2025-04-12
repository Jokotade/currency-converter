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
    <div className="flex items-center gap-4">
      <label className="sr-only">{label}</label>
      <select
        value={selectedCurrency}
        onChange={(e) => onChangeCurrency(e.target.value)}
        className="w-full border rounded-md px-4 py-3 text-base font-medium bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        {currencies.map((currency) => (
          <option key={currency} value={currency}>
            {currency}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CurrencySelector;
