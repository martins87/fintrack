import React, { FC } from "react";
import Centered from "../ui/Centered";
import Typography from "../ui/Typography";
import { Currency, Index } from "@/app/types/assets";

type AssetHeaderProps = {
  asset: Currency | Index;
};

const AssetHeader: FC<AssetHeaderProps> = ({ asset }) => {
  return (
    <Centered
      className="gap-x-2 flex-col md:flex-row items-start md:items-end"
      // items="start"
      justify="start"
    >
      <Typography className="text-3xl md:text-5xl" weight="500">
        {asset.name}
      </Typography>
      <Typography className="text-2xl md:text-4xl text-[#6C757D]/50">
        {/* &nbsp;({asset.id}) */}({asset.id})
      </Typography>
    </Centered>
  );
};

export default AssetHeader;
