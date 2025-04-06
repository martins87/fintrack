import { twMerge } from "tailwind-merge";

import { Currency } from "@/app/types/currency";
import Centered from "../ui/Centered";
import Typography from "../ui/Typography";
import { FC } from "react";
import Button from "../ui/Button";

type CurrencyTableProps = {
  currencies: Currency[];
};

const CurrencyTable: FC<CurrencyTableProps> = ({ currencies }) => {
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
            Buy
          </Typography>
        </Centered>
        <Centered className="" justify="start">
          <Typography className="text-lg text-[#6C757D]" weight="500">
            Sell
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
      {currencies.map((currency: Currency, index: number) => (
        <Centered
          key={index}
          className={twMerge(
            "pl-4 py-1 gap-x-2",
            index % 2 === 0 ? "bg-[#F8F9FA]" : ""
          )}
        >
          <Centered className="" justify="start">
            <Typography className="text-lg text-[#343A40]" weight="500">
              {currency.name}
            </Typography>
          </Centered>
          <Centered className="" justify="start">
            <Typography className="text-lg text-[#343A40]">
              R$ {currency.buy}
            </Typography>
          </Centered>
          <Centered className="" justify="start">
            <Typography className="text-lg text-[#343A40]">
              {currency && currency.sell ? `R$ ${currency.sell}` : "-"}
            </Typography>
          </Centered>
          <Centered className="" justify="start">
            <Typography
              className={twMerge(
                "text-lg",
                currency.variation > 0 ? "text-green-700" : "text-red-500"
              )}
              weight="500"
            >
              {currency.variation} %
            </Typography>
          </Centered>
          <Centered className="" justify="end">
            <Button className="min-w-36" label="Detalhes" primary />
          </Centered>
        </Centered>
      ))}
    </Centered>
  );
};

export default CurrencyTable;
