import { FC } from "react";
import { useRouter } from "next/navigation";
import { twMerge } from "tailwind-merge";

import Centered from "../ui/Centered";
import Typography from "../ui/Typography";
import Button from "../ui/Button";

type StockTableProps = {
  stocks: string[];
};

const StockTable: FC<StockTableProps> = ({ stocks }) => {
  const router = useRouter();

  const handleClick = (id: string) => router.push(`/acao/${id}`);

  return (
    <Centered direction="col" items="start" justify="start">
      <Centered className="pl-4 py-2 gap-x-2">
        <Centered className="" justify="start">
          <Typography className="text-lg text-[#6C757D]" weight="500">
            Ticker
          </Typography>
        </Centered>
        <Centered className="" justify="end">
          <div />
        </Centered>
      </Centered>
      {stocks.map((stock: string, index: number) => (
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
              {stock}
            </Typography>
          </Centered>
          <Centered className="" justify="end">
            <Button
              className="py-3 px-10 w-fit"
              label="Detalhes"
              secondary
              onClick={() => handleClick(stock)}
            />
          </Centered>
        </Centered>
      ))}
    </Centered>
  );
};

export default StockTable;
