import React, { memo } from "react";
import DashboardStyle from "./styles";
import Chart from "react-apexcharts";

const Dashboard = ({
  memory,
  happiness,
  reasoning,
  analysis,
  intelligence,
}) => {
  if (!memory || !happiness || !reasoning || !analysis || !intelligence)
    return null;

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
