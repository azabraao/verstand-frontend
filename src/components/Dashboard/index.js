import React, { memo, useState } from "react";
import DashboardStyle from "./styles";
import Chart from "react-apexcharts";

const Dashboard = () => {
  const [memory, setMemory] = useState(100);
  const [happiness, setHappiness] = useState(80);
  const [reasoning, setReasoning] = useState(50);
  const [analysis, setAnalysis] = useState(90);
  const [intelligence, setIntelligence] = useState(60);

  return (
    <DashboardStyle>
      <h3>Dashboard</h3>

      <Chart
        options={{
          chart: {
            height: 200,
            width: 100,
            type: "radar",
            toolbar: {
              show: false,
            },
          },
          xaxis: {
            categories: [
              "Memory",
              "Happiness",
              "Reasoning",
              "Analysis",
              "Intelligence",
            ],
          },
        }}
        series={[
          {
            name: "Series 1",
            data: [memory, happiness, reasoning, analysis, intelligence],
          },
        ]}
        type="radar"
        width={290}
        height={290}
      />
    </DashboardStyle>
  );
};

export default memo(Dashboard);
