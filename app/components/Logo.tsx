import { FC } from "react";
import Image from "next/image";

import franqLogo from "@/app/assets/images/franq-logo.svg";
import franqLogoWhite from "@/app/assets/images/franq-logo-white.svg";

type LogoProps = {
  white?: boolean;
  className?: string;
};

const Logo: FC<LogoProps> = ({ white, className }) => {
  return (
    <div className={className}>
      <Image src={white ? franqLogoWhite : franqLogo} alt="" />
    </div>
  );
};

export default Logo;
