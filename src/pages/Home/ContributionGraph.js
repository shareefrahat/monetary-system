import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const ContributionGraph = () => {
  const data = [
    {
      name: "20",
      employer: 20,
      employee: 20,
      interest: 20,
    },
    {
      name: "25",
      employer: 25,
      employee: 25,
      interest: 25,
    },
    {
      name: "30",
      employer: 30,
      employee: 30,
      interest: 30,
    },
    {
      name: "35",
      employer: 35,
      employee: 35,
      interest: 35,
    },
    {
      name: "40",
      employer: 40,
      employee: 40,
      interest: 40,
    },
    {
      name: "45",
      employer: 45,
      employee: 45,
      interest: 45,
    },
    {
      name: "50",
      employer: 50,
      employee: 50,
      interest: 50,
    },
    {
      name: "55",
      employer: 55,
      employee: 55,
      interest: 55,
    },
    {
      name: "60",
      employer: 60,
      employee: 60,
      interest: 60,
    },
    {
      name: "65",
      employer: 65,
      employee: 65,
      interest: 65,
    },
  ];
  return (
    <div className="w-full overflow-auto">
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 20,
          right: 0,
          left: -20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="employer" stackId="a" fill="#4935ff" />
        <Bar dataKey="employee" stackId="a" fill="#4935ffde" />
        <Bar dataKey="interest" stackId="a" fill="#6ab0eee9" />
      </BarChart>
    </div>
  );
};

export default ContributionGraph;
