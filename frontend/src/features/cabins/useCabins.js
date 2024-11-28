import { useQuery } from "@tanstack/react-query";
import { fetchCabins } from "../../services/apiCabins";

export const useCabins = () => {
  const {
    data: cabins,
    isLoading,
    error,
  } = useQuery(["cabins"], fetchCabins, {
    staleTime: 60 * 1000,
  });
  return { cabins, isLoading, error };
};
