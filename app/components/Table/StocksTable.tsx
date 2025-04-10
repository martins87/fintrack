import { FC } from "react";
import { useRouter } from "next/navigation";
import { twMerge } from "tailwind-merge";

import Centered from "../ui/Centered";
import Typography from "../ui/Typography";
import Button from "../ui/Button";
import { Stock } from "@/app/types/assets";

type StocksTableProps = {
  stocks: Stock[];
};

const StocksTable: FC<StocksTableProps> = ({ stocks }) => {
  const router = useRouter();

  const handleClick = (id: string) => router.push(`/ativo/${id}`);

  return (
    <Centered direction="col" items="start" justify="start">
      <Centered className="pl-4 py-2 gap-x-2">
        <Centered className="" justify="start">
          <Typography className="text-lg text-[#6C757D]" weight="500">
            Name
          </Typography>
        </Centered>
        <Centered className="" justify="start">
          <Typography className="text-lg text-[#6C757D]" weight="500">
            Location
          </Typography>
        </Centered>
        <Centered className="" justify="start">
          <Typography className="text-lg text-[#6C757D]" weight="500">
            Points
          </Typography>
        </Centered>
        <Centered className="" justify="start">
          <Typography className="text-lg text-[#6C757D]" weight="500">
            Variation
          </Typography>
        </Centered>
        <Centered className="" justify="end">
          <div />
        </Centered>
      </Centered>
      {stocks.map((stock: Stock, index: number) => (
        <Centered
          key={index}
          className={twMerge(
            "pl-4 py-1 gap-x-2",
            index % 2 === 0 ? "bg-[#F8F9FA]" : ""
          )}
        >
          <Centered className="" justify="start">
            <Typography
              className="text-lg text-[#343A40] leading-5"
              weight="500"
            >
              {stock.name}
            </Typography>
          </Centered>
          <Centered className="" justify="start">
            <Typography className="text-lg text-[#343A40]">
              {stock.location}
            </Typography>
          </Centered>
          <Centered className="" justify="start">
            <Typography className="text-lg text-[#343A40]">
              {stock.points}
            </Typography>
          </Centered>
          <Centered className="" justify="start">
            <Typography
              className={twMerge(
                "text-lg",
                stock.variation > 0 ? "text-green-700" : "text-red-500"
              )}
              weight="500"
            >
              {stock.variation} %
            </Typography>
          </Centered>
          <Centered className="" justify="end">
            <Button
              className="py-3"
              label="Detalhes"
              primary
              onClick={() => handleClick(stock.id)}
            />
          </Centered>
        </Centered>
      ))}
    </Centered>
  );
};

export default StocksTable;
