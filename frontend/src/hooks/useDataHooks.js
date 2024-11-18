import { useQuery } from "@tanstack/react-query";
import { fetchCabins } from "../services/apiCabins";

export const useCabins = () =>
  useQuery(["cabins"], fetchCabins, {
    staleTime: 1000 * 60,
  });
