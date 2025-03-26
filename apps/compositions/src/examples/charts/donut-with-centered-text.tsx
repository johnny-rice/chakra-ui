"use client"

import { Chart, useChartState } from "@chakra-ui/charts"
import { Cell, Label, Pie, PieChart, Tooltip } from "recharts"

export const DonutWithCenteredText = () => {
  const chart = useChartState({
    data: [
      { name: "windows", value: 400, color: "blue.solid" },
      { name: "mac", value: 300, color: "orange.solid" },
      { name: "linux", value: 300, color: "pink.solid" },
      { name: "other", value: 200, color: "green.solid" },
    ],
  })

  return (
    <Chart.Root aspectRatio="square" maxW="200px" chart={chart}>
      <PieChart>
        <Tooltip
          cursor={false}
          animationDuration={100}
          content={<Chart.Tooltip hideLabel />}
        />
        <Pie
          innerRadius={80}
          outerRadius={100}
          isAnimationActive={false}
          data={chart.data}
          dataKey={chart.key("value")}
          nameKey="name"
        >
          <Label
            content={({ viewBox }) => {
              if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                return (
                  <text
                    x={viewBox.cx}
                    y={viewBox.cy}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fill={chart.color("fg")}
                  >
                    <tspan
                      x={viewBox.cx}
                      y={viewBox.cy}
                      style={{ fontSize: 36, fontWeight: 600 }}
                    >
                      {chart.getTotal("value").toLocaleString()}
                    </tspan>
                    <tspan
                      x={viewBox.cx}
                      y={(viewBox.cy || 0) + 24}
                      style={{ fontWeight: 500, fill: chart.color("fg.muted") }}
                    >
                      users
                    </tspan>
                  </text>
                )
              }
            }}
          />
          {chart.data.map((item, index) => {
            const { color } = chart.series[index]
            return <Cell key={item.name} fill={chart.color(color)} />
          })}
        </Pie>
      </PieChart>
    </Chart.Root>
  )
}
