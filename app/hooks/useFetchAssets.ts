import { useQuery } from "@tanstack/react-query";
import { getAssets } from "../services/assets";

export const useFetchAssets = () => {
  return useQuery({
    queryKey: ["currencies"],
    queryFn: getAssets,
    staleTime: 60000,
  });
};
