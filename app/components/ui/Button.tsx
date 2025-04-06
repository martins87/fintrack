"use client";

import { FC, ReactNode } from "react";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { twMerge } from "tailwind-merge";
import Typography from "./Typography";

type ButtonProps = {
  label: string | ReactNode;
  primary?: boolean;
  secondary?: boolean;
  className?: string;
  icon?: StaticImport;
  onClick?: () => void;
  full?: boolean;
  disabled?: boolean;
};

const Button: FC<ButtonProps> = ({
  label,
  primary,
  secondary,
  className,
  icon,
  onClick,
  full,
  disabled,
}) => {
  return (
    <button
      className={twMerge(
        "w-full group flex items-center justify-center gap-x-3 py-4 rounded-lg transition-colors ease-in-out duration-200 hover:cursor-pointer",
        primary
          ? "bg-main-purple hover:bg-main-purple/80 border-0"
          : secondary
          ? "bg-[inherit] border border-main-purple hover:bg-[#0057FC]/10"
          : "",
        disabled && "bg-[#E9ECEF] hover:bg-[#E9ECEF] hover:cursor-not-allowed",
        full && "w-full",
        className
      )}
      onClick={onClick}
    >
      {icon && <Image src={icon} alt="button icon" />}
      <Typography
        className={twMerge(
          "text-xl tracking-wider",
          primary ? "text-white" : secondary ? "text-main-purple" : "",
          disabled && "text-[#ADB5BD]"
        )}
      >
        {label}
      </Typography>
    </button>
  );
};

export default Button;
