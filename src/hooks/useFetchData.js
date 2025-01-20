import { useQuery } from "react-query";
import apiClient from "../api/apiClient";

export const useFetchData = (endpoint) => {
  return useQuery(endpoint, async () => {
    const { data } = await apiClient.get(`/${endpoint}`);
    return data;
  });
};
