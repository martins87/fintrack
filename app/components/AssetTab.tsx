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
        "w-fit px-3 md:px-4 py-2 rounded-lg hover:cursor-pointer transition-colors ease-in-out duration-200",
        active === tab ? "bg-main-purple" : "bg-inherit hover:bg-main-purple/10"
      )}
      onClick={() => setTab(tab)}
    >
      <Typography
        className={twMerge(
          "text-base md:text-lg",
          active === tab ? "text-white" : "text-main-purple"
        )}
      >
        {label}
      </Typography>
    </Centered>
  );
};

export default AssetTab;
