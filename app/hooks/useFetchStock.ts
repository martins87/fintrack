import { useQuery } from "@tanstack/react-query";
import { getStock } from "../services/assets";

export const useFetchStock = (ticker: string) => {
  return useQuery({
    queryKey: ["stock"],
    queryFn: () => getStock(ticker),
    staleTime: 60000,
  });
};
