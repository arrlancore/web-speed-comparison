"use client";
import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function Chart(props: {
  data: Array<{ size: number; time: number; name: string }>;
}) {
  return (
    <ResponsiveContainer
      id="chart-c"
      width="100%"
      height="100%"
      minHeight={300}
    >
      <BarChart
        width={500}
        height={500}
        data={props.data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
        <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
        <Tooltip />
        <Legend />
        <Bar yAxisId="left" dataKey="time" fill="#8884d8" />
        <Bar yAxisId="right" dataKey="size" fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
  );
}
