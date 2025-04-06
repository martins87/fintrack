"use client";

import { twMerge } from "tailwind-merge";

import Page from "@/app/components/ui/Page";
import Centered from "@/app/components/ui/Centered";
import Button from "@/app/components/ui/Button";
import Typography from "@/app/components/ui/Typography";
import Sidebar from "@/app/components/Sidebar";
import { useFetchCurrencies } from "@/app/hooks/useFetchCurrencies";
import { Currency } from "@/app/types/currency";

const CotacoesPage = () => {
  const {
    data,
    // isLoading,
    // error
  } = useFetchCurrencies();

  console.log("assets", data);
  const currencies = (data?.currencies as Currency[]) || [];
  console.log("currencies", currencies);

  return (
    <Centered className="h-screen" items="start">
      <Sidebar />
      <Page
        title="Lista de Cotações"
        subtitle="Monitore preços, variações e dados do mercado com facilidade"
      >
        <Centered justify="start" className="gap-x-2 mb-4">
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
        <Centered direction="col" items="start" justify="start">
          <Centered className="pl-4 py-2 gap-x-2">
            <Centered className="" justify="start">
              <Typography className="text-lg text-[#6C757D]" weight="500">
                Name
              </Typography>
            </Centered>
            <Centered className="" justify="start">
              <Typography className="text-lg text-[#6C757D]" weight="500">
                Buy
              </Typography>
            </Centered>
            <Centered className="" justify="start">
              <Typography className="text-lg text-[#6C757D]" weight="500">
                Sell
              </Typography>
            </Centered>
            <Centered className="" justify="start">
              <Typography className="text-lg text-[#6C757D]" weight="500">
                Variation
              </Typography>
            </Centered>
            <Centered className="" justify="end">
              <div />
            </Centered>
          </Centered>
          {currencies.map((currency: Currency, index: number) => (
            <Centered
              key={index}
              className={twMerge(
                "pl-4 py-1 gap-x-2",
                index % 2 === 0 ? "bg-[#F8F9FA]" : ""
              )}
            >
              <Centered className="" justify="start">
                <Typography className="text-lg text-[#343A40]" weight="500">
                  {currency.name}
                </Typography>
              </Centered>
              <Centered className="" justify="start">
                <Typography className="text-lg text-[#343A40]">
                  R$ {currency.buy}
                </Typography>
              </Centered>
              <Centered className="" justify="start">
                <Typography className="text-lg text-[#343A40]">
                  {currency && currency.sell ? `R$ ${currency.sell}` : "-"}
                </Typography>
              </Centered>
              <Centered className="" justify="start">
                <Typography className={twMerge("text-lg", "text-[#343A40]")}>
                  {currency.variation}
                </Typography>
              </Centered>
              <Centered className="" justify="end">
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
