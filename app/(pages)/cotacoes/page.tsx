"use client";

import Page from "@/app/components/ui/Page";
import Centered from "@/app/components/ui/Centered";
import Typography from "@/app/components/ui/Typography";
import Sidebar from "@/app/components/Sidebar";
import { useFetchCurrencies } from "@/app/hooks/useFetchCurrencies";
import { Currency } from "@/app/types/currency";
import CurrencyTable from "@/app/components/Table/CurrencyTable";
import StocksTable from "@/app/components/Table/StocksTable";
import { Stock } from "@/app/types/stock";
import { useState } from "react";
import AssetTab from "@/app/components/AssetTab";

const CotacoesPage = () => {
  const {
    data,
    isLoading,
    // error
  } = useFetchCurrencies();
  const [tab, setTab] = useState<number>(0);

  console.log("assets", data);
  const currencies = (data?.currencies as Currency[]) || [];
  const stocks = (data?.stocks as Stock[]) || [];

  return (
    <Centered className="h-screen" items="start">
      <Sidebar />
      <Page
        title="Lista de Cotações"
        subtitle="Monitore preços, variações e dados do mercado com facilidade"
      >
        <Centered justify="start" className="gap-x-2 mb-4">
          <AssetTab label="Currencies" active={tab} tab={0} setTab={setTab} />
          <AssetTab label="Stocks" active={tab} tab={1} setTab={setTab} />
          <AssetTab label="Taxes" active={tab} tab={2} setTab={setTab} />
          <AssetTab label="Bitcoin" active={tab} tab={3} setTab={setTab} />
        </Centered>
        {isLoading ? (
          <Centered className="h-full my-20" items="center" justify="center">
            <Typography className="text-lg text-black/60">
              Loading data...
            </Typography>
          </Centered>
        ) : tab === 0 ? (
          <CurrencyTable currencies={currencies} />
        ) : tab === 1 ? (
          <StocksTable stocks={stocks} />
        ) : null}
      </Page>
    </Centered>
  );
};

export default CotacoesPage;
