"use client";

import { useParams } from "next/navigation";
import { twMerge } from "tailwind-merge";

import { useAssetsStore } from "@/app/store/useAssetsStore";
import { Index } from "@/app/types/assets";
import Sidebar from "@/app/components/Sidebar";
import Centered from "@/app/components/ui/Centered";
import Page from "@/app/components/ui/Page";
import Typography from "@/app/components/ui/Typography";
import AssetCard from "@/app/components/Asset/AssetCard";
import AssetHeader from "@/app/components/Asset/AssetHeader";

const StockPage = () => {
  const params = useParams();
  const { id } = params as { id: string };
  const { getAssetById } = useAssetsStore();
  const index = getAssetById(id) as Index;
  console.log("asset", index);

  if (!index)
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
      <Page title={<AssetHeader asset={index} />}>
        <Centered direction="col">
          <Centered className="gap-2 flex-col md:flex-row">
            <AssetCard
              label="Local"
              value={
                <Typography className="text-lg text-[#6C757D]">
                  {index.location}
                </Typography>
              }
            />
            <AssetCard
              label="Pontos"
              value={
                <Typography className="text-lg text-[#6C757D]">
                  {index.points}
                </Typography>
              }
            />
            <AssetCard
              label="Variação"
              value={
                <Typography
                  className={twMerge(
                    "text-lg",
                    index.variation > 0 ? "text-green-600" : "text-red-500"
                  )}
                  weight="500"
                >
                  {index.variation ? `${index.variation} %` : "Não disponível"}
                </Typography>
              }
            />
          </Centered>
        </Centered>
      </Page>
    </Centered>
  );
};

export default StockPage;
