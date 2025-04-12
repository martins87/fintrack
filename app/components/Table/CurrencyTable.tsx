import { FC } from "react";
import { useRouter } from "next/navigation";
import { twMerge } from "tailwind-merge";

import { Currency } from "@/app/types/assets";
import Centered from "../ui/Centered";
import Typography from "../ui/Typography";
import Button from "../ui/Button";

type CurrencyTableProps = {
  currencies: Currency[];
};

const CurrencyTable: FC<CurrencyTableProps> = ({ currencies }) => {
  const router = useRouter();

  const handleClick = (id: string) => router.push(`/moeda/${id}`);

  return (
    <Centered direction="col" items="start" justify="start">
      <Centered className="pl-4 py-2 gap-x-2">
        <Centered className="" justify="start">
          <Typography className="text-lg text-[#6C757D]" weight="500">
            Nome
          </Typography>
        </Centered>
        <Centered className="" justify="start">
          <Typography className="text-lg text-[#6C757D]" weight="500">
            Compra
          </Typography>
        </Centered>
        <Centered className="" justify="start">
          <Typography className="text-lg text-[#6C757D]" weight="500">
            Venda
          </Typography>
        </Centered>
        <Centered className="" justify="start">
          <Typography className="text-lg text-[#6C757D]" weight="500">
            Variação
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
                currency.variation > 0 ? "text-green-600" : "text-red-500"
              )}
              weight="500"
            >
              {currency.variation} %
            </Typography>
          </Centered>
          <Centered justify="end">
            <Button
              className="py-3 px-10 w-fit"
              label="Detalhes"
              secondary
              onClick={() => handleClick(currency.id)}
            />
          </Centered>
        </Centered>
      ))}
    </Centered>
  );
};

export default CurrencyTable;
