import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateSettings } from "../../services/apiSettings";

export function useUpdateSettings() {
  const queryClient = useQueryClient();

  const { mutate: update, isLoading: isUpdating } = useMutation({
    mutationFn: (settings) => updateSettings(settings),
    onMutate: async (newSettings) => {
      // Cancel any ongoing queries for "settings"
      await queryClient.cancelQueries({ queryKey: ["settings"] });

      // Snapshot the current settings for rollback in case of failure
      const previousSettings = queryClient.getQueryData(["settings"]);

      // Optimistically update the cache with new settings
      queryClient.setQueryData(["settings"], (old) => ({
        ...old,
        ...newSettings,
      }));

      return { previousSettings };
    },
    onSuccess: () => {
      toast.success("Settings successfully updated");

      // Refetch to ensure data consistency
      queryClient.invalidateQueries({
        queryKey: ["settings"],
      });
    },
    onError: (error, newSettings, context) => {
      toast.error(error.message);

      // Rollback to the previous state in case of failure
      queryClient.setQueryData(["settings"], context.previousSettings);
    },
  });

  return { isUpdating, update };
}
