import { FC, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

import Centered from "./Centered";
import Typography from "./Typography";

type PageProps = {
  children: ReactNode;
  title: string;
  subtitle?: string;
  className?: string;
};

const Page: FC<PageProps> = ({ children, title, subtitle, className }) => {
  return (
    <Centered className="min-h-screen flex-1" items="start">
      <Centered
        className={twMerge("w-[95%] h-full flex-col mx-auto my-10", className)}
        items="center"
        justify="start"
      >
        <Centered
          className="gap-y-4 mb-10"
          direction="col"
          items="start"
          justify="between"
        >
          <Typography className="text-5xl" weight="500">
            {title}
          </Typography>
          {subtitle && (
            <Typography className="text-xl text-black/65" weight="400">
              {subtitle}
            </Typography>
          )}
        </Centered>
        <Centered
          className="h-full border border-[#E9ECEF] rounded-lg bg-white p-4"
          direction="col"
          items="start"
          justify="start"
        >
          {children}
        </Centered>
      </Centered>
    </Centered>
  );
};

export default Page;
