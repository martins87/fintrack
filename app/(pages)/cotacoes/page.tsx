"use client";

import { useEffect, useState } from "react";

import { Currency, Index } from "@/app/types/assets";
import { useFetchAssets } from "@/app/hooks/useFetchAssets";
import Page from "@/app/components/ui/Page";
import Centered from "@/app/components/ui/Centered";
import Typography from "@/app/components/ui/Typography";
import Sidebar from "@/app/components/Sidebar";
import CurrencyTable from "@/app/components/Table/CurrencyTable";
import IndexTable from "@/app/components/Table/IndexTable";
import AssetTab from "@/app/components/AssetTab";
import StockTable from "@/app/components/Table/StockTable";
import { useAssetsStore } from "@/app/store/useAssetsStore";
// import { useFetchStocks } from "@/app/hooks/useFetchStocks";
import { mainStocks } from "@/app/constants/mainStocks";

const CotacoesPage = () => {
  const {
    data: assets,
    isLoading: isAssetsLoading,
    // error
  } = useFetchAssets();
  // const {
  //   data: stocks,
  //   isLoading: isStocksLoading,
  //   // error
  // } = useFetchStocks();
  const [tab, setTab] = useState<number>(0);
  const { setAssets } = useAssetsStore();

  useEffect(() => {
    if (assets) setAssets(assets);
  }, [assets, setAssets]);

  const currencies = (assets?.currencies as Currency[]) || [];
  const indexes = (assets?.indexes as Index[]) || [];

  return (
    <Centered className="h-screen" items="start">
      <Sidebar />
      <Page
        title="Lista de Cotações"
        subtitle="Monitore preços, variações e dados do mercado com facilidade"
      >
        <Centered justify="start" className="gap-x-2 mb-4">
          <AssetTab label="Índices" active={tab} tab={0} setTab={setTab} />
          <AssetTab label="Moedas" active={tab} tab={1} setTab={setTab} />
          <AssetTab label="Ações" active={tab} tab={2} setTab={setTab} />
          <AssetTab label="FIIs" active={tab} tab={3} setTab={setTab} />
          <AssetTab label="BDRs" active={tab} tab={4} setTab={setTab} />
          <AssetTab label="Taxas" active={tab} tab={5} setTab={setTab} />
          <AssetTab label="Bitcoin" active={tab} tab={6} setTab={setTab} />
        </Centered>
        {isAssetsLoading ? (
          <Centered className="h-full my-20" items="center" justify="center">
            <Typography className="text-lg text-black/60">
              Carregando...
            </Typography>
          </Centered>
        ) : tab === 0 ? (
          <IndexTable indexes={indexes} />
        ) : tab === 1 ? (
          <CurrencyTable currencies={currencies} />
        ) : tab === 2 ? (
          // <StockTable stocks={stocks} />
          <StockTable stocks={mainStocks} />
        ) : null}
      </Page>
    </Centered>
  );
};

export default CotacoesPage;
