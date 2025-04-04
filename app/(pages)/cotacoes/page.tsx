"use client";

import { twMerge } from "tailwind-merge";

import Page from "@/app/components/ui/Page";
import Centered from "@/app/components/ui/Centered";
import Button from "@/app/components/ui/Button";
import Typography from "@/app/components/ui/Typography";
import Sidebar from "@/app/components/Sidebar";
import { table } from "@/app/constants/table";
import { useFetchCurrencies } from "@/app/hooks/useFetchCurrencies";

const CotacoesPage = () => {
  const {
    data: assets,
    // isLoading,
    // error
  } = useFetchCurrencies();

  console.log("assets", assets);

  return (
    <Centered className="h-screen" items="start">
      <Sidebar />
      <Page
        title="Lista de Cotações"
        subtitle="Monitore preços, variações e dados do mercado com facilidade"
      >
        <Centered justify="start" className="gap-x-2">
          <Centered className="w-fit px-4 py-2 rounded-lg bg-blue-500">
            <Typography className="text-lg text-white">Currencies</Typography>
          </Centered>
          <Centered className="w-fit px-4 py-2">
            <Typography className="text-lg text-black/60">Stocks</Typography>
          </Centered>
          <Centered className="w-fit px-4 py-2">
            <Typography className="text-lg text-black/60">Taxes</Typography>
          </Centered>
          <Centered className="w-fit px-4 py-2">
            <Typography className="text-lg text-black/60">Bitcoin</Typography>
          </Centered>
        </Centered>
        <Centered direction="col" className="">
          {table.map((row, index) => (
            <Centered
              key={row.index}
              className={twMerge(
                "py-2 gap-x-2",
                index % 2 ? "bg-[#E9ECEF]/50" : ""
              )}
            >
              <Centered className="w-28">
                <Typography className="text-lg text-[#343A40]">
                  {row.index}
                </Typography>
              </Centered>
              <Centered className="w-[20%]" justify="start">
                <Typography className="text-lg text-[#343A40]">
                  {row.nome}
                </Typography>
              </Centered>
              <Centered className="w-[15%] " justify="start">
                <Typography className="text-lg text-[#343A40]">
                  {row.preco}
                </Typography>
              </Centered>
              <Centered className="w-[15%]" justify="start">
                <Typography
                  className={twMerge(
                    "text-lg",
                    typeof row.variacao24h === "string"
                      ? "text-[#343A40]"
                      : row.variacao24h < 1
                      ? "text-red-500"
                      : "text-green-700"
                  )}
                >
                  {row.variacao24h}
                </Typography>
              </Centered>
              <Centered className="w-[15%]" justify="start">
                <Typography
                  className={twMerge(
                    "text-lg",
                    typeof row.variacao7d === "string"
                      ? "text-[#343A40]"
                      : +row.variacao7d >= 0
                      ? "text-green-700"
                      : "text-red-500"
                  )}
                >
                  {row.variacao7d}
                </Typography>
              </Centered>
              <Centered className="" justify="start">
                <Typography className="text-lg text-[#343A40]">
                  {row.variacaoSemanal}
                </Typography>
              </Centered>
              <Centered className="w-fit" justify="end">
                <Button className="min-w-36" label="Detalhes" primary />
              </Centered>
            </Centered>
          ))}
        </Centered>
      </Page>
    </Centered>
  );
};

export default CotacoesPage;
