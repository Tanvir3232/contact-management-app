
import { useQuery } from 'react-query';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { fetchHistoricalData } from '../api/covid';

const formatYAxis = (tick) => {
    const absTick = Math.abs(tick);
    
    if (absTick >= 1000000) {
      return (absTick / 1000000).toLocaleString(undefined, { maximumFractionDigits: 2 }) + 'M';
    } else if (absTick >= 1000) {
      return (absTick / 1000).toLocaleString(undefined, { maximumFractionDigits: 2 }) + 'k';
    }
    
    return tick.toLocaleString();
  };
  

const LineGraph = () => {
  const { data: historicalData } = useQuery('historical', fetchHistoricalData);

  const formattedData = historicalData && Object.entries(historicalData.cases).map(([date, value]) => ({
    date,
    cases: Number(value),
  }));
   
  return (
    <div className='my-5'>
      
      {formattedData && (
        <LineChart  width={600} height={300} data={formattedData}>
          <XAxis dataKey="date" />
          <YAxis tickFormatter={formatYAxis} />
          <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="cases" name="Cases" stroke="#8884d8" />
        </LineChart>
      )}
    </div>
  );
};

export default LineGraph;
