import { useQuery } from "@tanstack/react-query";
import { getCurrencies } from "../services/currencyService";

export const useFetchCurrencies = () => {
  return useQuery({
    queryKey: ["currencies"],
    queryFn: getCurrencies,
    staleTime: 60000,
  });
};
