"use client";

import { useEffect, useState } from "react";

import { Currency, Stock } from "@/app/types/assets";
import { useFetchAssets } from "@/app/hooks/useFetchAssets";
import Page from "@/app/components/ui/Page";
import Centered from "@/app/components/ui/Centered";
import Typography from "@/app/components/ui/Typography";
import Sidebar from "@/app/components/Sidebar";
import CurrencyTable from "@/app/components/Table/CurrencyTable";
import StocksTable from "@/app/components/Table/StocksTable";
import AssetTab from "@/app/components/AssetTab";
import { useAssetsStore } from "@/app/store/useAssetsStore";

const CotacoesPage = () => {
  const {
    data,
    isLoading,
    // error
  } = useFetchAssets();
  const [tab, setTab] = useState<number>(0);
  const { setAssets } = useAssetsStore();

  useEffect(() => {
    if (data) setAssets(data);
  }, [data, setAssets]);

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
              Carregando...
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
