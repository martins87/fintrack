import { twMerge } from "tailwind-merge";

import Centered from "./ui/Centered";
import { FC } from "react";
import Typography from "./ui/Typography";

type AssetTabProps = {
  label: string;
  active: number;
  tab: number;
  setTab: (tab: number) => void;
};

const AssetTab: FC<AssetTabProps> = ({ label, active, tab, setTab }) => {
  return (
    <Centered
      className={twMerge(
        "w-fit px-4 py-2 rounded-lg hover:cursor-pointer transition-colors ease-in-out duration-200",
        active === tab ? "bg-[#007BFF]" : "bg-inherit"
      )}
      onClick={() => setTab(tab)}
    >
      <Typography
        className={twMerge(
          "text-lg",
          active === tab ? "text-white" : "text-black/60"
        )}
      >
        {label}
      </Typography>
    </Centered>
  );
};

export default AssetTab;
