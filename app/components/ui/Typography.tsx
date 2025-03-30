import { FC, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type TypographyProps = {
  children: string | ReactNode;
  className?: string;
  font?: "neue-montreal" | "sora";
  weight?: "400" | "500" | "600" | "700";
  maxChar?: number;
  onClick?: () => void;
};

const Typography: FC<TypographyProps> = ({
  children,
  className,
  font = "neue-montreal",
  weight = "400",
  maxChar,
  onClick,
}) => {
  return (
    <span
      className={twMerge(
        "text-black/90",
        font === "neue-montreal"
          ? "font-[family-name:var(--font-neue-montreal)]"
          : "font-[family-name:var(--font-sora)]",
        weight === "500"
          ? "font-medium"
          : weight === "600"
          ? "font-semibold"
          : weight === "700"
          ? "font-bold"
          : "font-normal",
        className
      )}
      onClick={onClick}
    >
      {maxChar
        ? children!.toString().length > maxChar
          ? `${children!.toString().slice(0, maxChar)}...`
          : children!.toString()
        : children}
    </span>
  );
};

export default Typography;
