interface ConversionResultProps {
  amount: number;
  from: string;
  to: string;
  result: string;
  exchangeRate: number | null;
  lastUpdated: string;
}

const ConversionResult: React.FC<ConversionResultProps> = ({
  amount,
  from,
  to,
  result,
  exchangeRate,
  lastUpdated,
}) => {
  return (
    <div className="text-center text-gray-700 mt-4">
      <p className="text-lg font-medium">
        {amount} {from} = <span className="font-bold text-xl">{result}</span> {to}
      </p>
      {exchangeRate && (
        <p className="text-sm text-gray-500 mt-1">
          1 {from} = {exchangeRate} {to} <br />
          <span className="text-xs">Last updated: {new Date(lastUpdated).toLocaleString()}</span>
        </p>
      )}
    </div>
  );
};

export default ConversionResult;
