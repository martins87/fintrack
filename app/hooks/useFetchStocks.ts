import { useQuery } from "@tanstack/react-query";
import { getStocks } from "../services/assets";

export const useFetchStocks = () => {
  return useQuery({
    queryKey: ["stocks"],
    queryFn: getStocks,
    staleTime: 60000,
  });
};
