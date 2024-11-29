import { useQuery } from "@tanstack/react-query";
import { fetchSettings } from "../../services/apiSettings";

export function useSettings() {
  const {
    isLoading,
    error,
    data: settings,
  } = useQuery({
    queryKey: ["settings"],
    queryFn: fetchSettings,
  });
  return { isLoading, error, settings };
}
