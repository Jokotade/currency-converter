interface AmountInputProps {
  amount: number;
  onAmountChange: (value: number) => void;
}

const AmountInput: React.FC<AmountInputProps> = ({ amount, onAmountChange }) => {
  return (
    <input
      type="number"
      className="w-full border rounded-md px-4 py-3 text-lg font-medium focus:outline-none focus:ring-2 focus:ring-blue-400"
      value={amount}
      onChange={(e) => onAmountChange(Number(e.target.value))}
    />
  );
};

export default AmountInput;
