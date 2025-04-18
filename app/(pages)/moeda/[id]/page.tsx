"use client";

import { useParams } from "next/navigation";
import { twMerge } from "tailwind-merge";

import { useAssetsStore } from "@/app/store/useAssetsStore";
import Sidebar from "@/app/components/Sidebar";
import Centered from "@/app/components/ui/Centered";
import Page from "@/app/components/ui/Page";
import Typography from "@/app/components/ui/Typography";
import { Currency } from "@/app/types/assets";
import AssetCard from "@/app/components/Asset/AssetCard";
import AssetHeader from "@/app/components/Asset/AssetHeader";

const CurrencyPage = () => {
  const params = useParams();
  const { id } = params as { id: string };
  const { getAssetById } = useAssetsStore();
  const currency = getAssetById(id) as Currency;
  console.log("asset", currency);

  if (!currency)
    return (
      <Typography
        className="w-full h-screen flex items-center justify-center text-2xl"
        weight="500"
      >
        404 | Ativo não encontrado
      </Typography>
    );

  return (
    <Centered className="h-screen" items="start">
      <Sidebar />
      <Page title={<AssetHeader asset={currency} />}>
        <Centered className="gap-2 flex-col md:flex-row">
          <AssetCard
            label="Compra"
            value={
              <Typography className="text-lg text-[#6C757D]">
                {currency.buy ? `R$ ${currency.buy}` : "Não disponível"}
              </Typography>
            }
          />
          <AssetCard
            label="Venda"
            value={
              <Typography className="text-lg text-[#6C757D]">
                {currency.sell ? `R$ ${currency.sell}` : "Não disponível"}
              </Typography>
            }
          />
          <AssetCard
            label="Variação"
            value={
              <Typography
                className={twMerge(
                  "text-lg",
                  currency.variation > 0 ? "text-green-600" : "text-red-500"
                )}
                weight="500"
              >
                {currency.variation
                  ? `${currency.variation} %`
                  : "Não disponível"}
              </Typography>
            }
          />
        </Centered>
      </Page>
    </Centered>
  );
};

export default CurrencyPage;
