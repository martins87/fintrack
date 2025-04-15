import { FC, useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Legend,
} from "recharts";

type ChartProps = {
  data: Record<string, number>[];
};

const Chart: FC<ChartProps> = ({ data }) => {
  const [chartData, setChartData] = useState<{ time: string; price: number }[]>(
    []
  );

  useEffect(() => {
    if (!data || data.length === 0) return;

    const transformed = data.map((point) => {
      const [time, price] = Object.entries(point)[0];
      return {
        time,
        price,
      };
    });

    setChartData(transformed);
  }, [data]);

  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={chartData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="time" />
        <YAxis dataKey="price" domain={["auto", "auto"]} />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="price"
          stroke="#8884d8"
          strokeWidth={2}
          dot={{ r: 3 }}
          activeDot={{ r: 6 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Chart;
