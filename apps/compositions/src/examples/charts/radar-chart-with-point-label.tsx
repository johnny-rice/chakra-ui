"use client"

import { Chart, useChart } from "@chakra-ui/charts"
import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts"

export const RadarChartWithPointLabel = () => {
  const chart = useChart({
    data: [
      { windows: 110, month: "January" },
      { windows: 130, month: "February" },
      { windows: 110, month: "March" },
      { windows: 90, month: "May" },
      { windows: 75, month: "June" },
    ],
    series: [{ name: "windows", color: "teal.solid" }],
  })

  return (
    <Chart.Root maxW="sm" chart={chart} mx="auto">
      <RadarChart data={chart.data}>
        <PolarGrid stroke={chart.color("border")} />
        <PolarAngleAxis dataKey={chart.key("month")} tickLine={false} />
        {chart.series.map((item) => (
          <Radar
            isAnimationActive={false}
            key={item.name}
            name={item.name}
            label={{ fill: chart.color("fg") }}
            dataKey={chart.key(item.name)}
            stroke={chart.color(item.color)}
            fill={chart.color(item.color)}
            fillOpacity={0.2}
          />
        ))}
      </RadarChart>
    </Chart.Root>
  )
}
