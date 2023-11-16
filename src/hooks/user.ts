import { useQuery } from "@tanstack/react-query";
import { apiClient } from "../lib/api";

export function useUser() {
  return useQuery({
    queryKey: ["user"],
    async queryFn() {
      return await apiClient
        .get<{
          user: {
            studio_id: number;
            name: string;
            role: "ADMIN" | "STUDIO";
          };
        }>("/user")
        .then((res) => res.data.user);
    },
  });
}
