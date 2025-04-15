"use client";

import Chart from "@/app/components/Chart";
import Sidebar from "@/app/components/Sidebar";
import Centered from "@/app/components/ui/Centered";
import Page from "@/app/components/ui/Page";
import Typography from "@/app/components/ui/Typography";
import { useFetchStock } from "@/app/hooks/useFetchStock";
import { useParams } from "next/navigation";

const StockPage = () => {
  const params = useParams();
  const { ticker } = params as { ticker: string };
  const {
    data,
    isLoading,
    // isError
  } = useFetchStock(ticker);
  console.log("stock data", data);

  return (
    <Centered className="h-screen" items="start">
      <Sidebar />
      <Page title={ticker}>
        <Centered direction="col">
          {isLoading ? (
            <Typography className="text-xl">Carregando gráfico...</Typography>
          ) : (
            data && (
              <Centered direction="col" items="start" className="gap-y-10">
                <Typography className="text-xl text-black/80">
                  Preços do último dia de pregão
                </Typography>
                <Chart data={data as Record<string, number>[]} />
              </Centered>
            )
          )}
        </Centered>
      </Page>
    </Centered>
  );
};

export default StockPage;
