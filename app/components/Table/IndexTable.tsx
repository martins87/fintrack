import { FC } from "react";
import { useRouter } from "next/navigation";
import { twMerge } from "tailwind-merge";

import Centered from "../ui/Centered";
import Typography from "../ui/Typography";
import Button from "../ui/Button";
import { Index } from "@/app/types/assets";

type IndexTableProps = {
  indexes: Index[];
};

const IndexTable: FC<IndexTableProps> = ({ indexes }) => {
  const router = useRouter();

  const handleClick = (id: string) => router.push(`/indice/${id}`);

  return (
    <Centered direction="col" items="start" justify="start">
      <Centered className="pl-4 py-2 gap-x-2">
        <Centered className="" justify="start">
          <Typography className="text-lg text-[#6C757D]" weight="500">
            Nome
          </Typography>
        </Centered>
        <Centered className="hidden md:flex" justify="start">
          <Typography className="text-lg text-[#6C757D]" weight="500">
            Local
          </Typography>
        </Centered>
        <Centered className="hidden md:flex" justify="start">
          <Typography className="text-lg text-[#6C757D]" weight="500">
            Pontos
          </Typography>
        </Centered>
        <Centered className="hidden md:flex" justify="start">
          <Typography className="text-lg text-[#6C757D]" weight="500">
            Variação
          </Typography>
        </Centered>
        <Centered className="" justify="end">
          <div />
        </Centered>
      </Centered>
      {indexes.map((index: Index, i: number) => (
        <Centered
          key={i}
          className={twMerge(
            "pl-4 py-1 gap-x-2",
            i % 2 === 0 ? "bg-[#F8F9FA]" : ""
          )}
        >
          <Centered className="" justify="start">
            <Typography
              className="text-lg text-[#343A40] leading-5"
              weight="500"
            >
              {index.name}
            </Typography>
          </Centered>
          <Centered className="hidden md:flex" justify="start">
            <Typography className="text-lg text-[#343A40]">
              {index.location}
            </Typography>
          </Centered>
          <Centered className="hidden md:flex" justify="start">
            <Typography className="text-lg text-[#343A40]">
              {index.points}
            </Typography>
          </Centered>
          <Centered className="hidden md:flex" justify="start">
            <Typography
              className={twMerge(
                "text-lg",
                index.variation > 0 ? "text-green-700" : "text-red-500"
              )}
              weight="500"
            >
              {index.variation} %
            </Typography>
          </Centered>
          <Centered className="" justify="end">
            <Button
              className="py-3 px-10 w-fit"
              label="Detalhes"
              secondary
              onClick={() => handleClick(index.id)}
            />
          </Centered>
        </Centered>
      ))}
    </Centered>
  );
};

export default IndexTable;
