import { FC, ReactNode } from "react";
import Centered from "../ui/Centered";
import Typography from "../ui/Typography";

type AssetCardProps = {
  label: string;
  value: ReactNode;
};

const AssetCard: FC<AssetCardProps> = ({ label, value }) => {
  return (
    <Centered
      className="border border-[#CED4DA] rounded-lg p-4 gap-y-2"
      items="start"
      justify="between"
      direction="col"
    >
      <Typography className="text-xl" weight="500">
        {label}
      </Typography>
      {value}
    </Centered>
  );
};

export default AssetCard;
