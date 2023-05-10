import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";
import "./Chart.css";
import { ResponsiveContainer } from "recharts";
import ActivitiesCard from "./ActivitiesCard";
import { useEffect, useState } from "react";
import { fetchChartData } from "./fetchChartData";

function Chart() {
  const [chartData, setChartData] = useState(null);

  const transform = (rawData) => {
    const temp = Object.keys(rawData, []);
    const transformedData = temp.map((element) => {
      return rawData[element];
    });

    return transformedData;
  };

  useEffect(() => {
    (async function () {
      const rawData = await fetchChartData();
      const transformedData = transform(rawData);
      setChartData(transformedData);
    })();
  }, []);

  return (
    <div className="root">
      <ActivitiesCard />
      <ResponsiveContainer width="100%" height={212}>
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis dataKey="pv" />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Chart;
