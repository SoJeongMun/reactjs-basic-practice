import { useQuery } from "react-query";
import { fetchChartHistory } from "../api";
import ReactApexChart from "react-apexcharts";

interface ChartId {
  coinId: string;
}
interface IHistory {
  time_open: number;
  time_close: number;
  open: string;
  high: string;
  low: string;
  close: string;
  volume: string;
  market_cap: number;
}

export default function Chart({ coinId }: ChartId) {
  const { isLoading, data } = useQuery<IHistory[]>(["ohlcv", coinId], () =>
    fetchChartHistory(coinId)
  );

  return (
    <>
      {isLoading ? (
        "Loading Chart..."
      ) : (
        <ReactApexChart
          type="line"
          series={[
            {
              name: 'price',
              data: data?.map((price => Number(price.close))) ?? [],
            }
          ]}
          options={{
            theme:{
              mode: 'dark'
            },
            chart: {
              height: 500,
              width: 500,
              background: 'transparent'
            },
            stroke:{
              curve: "smooth"
            },
            yaxis: {
              show: false
            },
            xaxis: {
              axisTicks: {
                show: false
              },
              labels: {
                show: false
              },
              type: 'datetime',
              categories: data?.map((price => price.time_close)) ?? [],
            },
            tooltip: {
              y: {
                formatter: (value) => `${value.toFixed(2)}`
              }
            }
          }}
        />
      )}
    </>
  );
}
