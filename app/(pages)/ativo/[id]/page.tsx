"use client";

import { useParams } from "next/navigation";

import { useAssetsStore } from "@/app/store/useAssetsStore";
import Sidebar from "@/app/components/Sidebar";
import Centered from "@/app/components/ui/Centered";
import Page from "@/app/components/ui/Page";
import Typography from "@/app/components/ui/Typography";

const AtivoPage = () => {
  const params = useParams();
  const { id } = params as { id: string };
  const { getAssetById } = useAssetsStore();
  const asset = getAssetById(id);
  console.log("asset", asset);

  return (
    <Centered className="h-screen" items="start">
      <Sidebar />
      <Page title="Ativo">
        <Typography>ativo page</Typography>
      </Page>
    </Centered>
  );
};

export default AtivoPage;
