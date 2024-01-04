import axios from "@/core/axios";

export const asyncFetchLeagues = async () => {
  const { data } = await axios.get("/get_league");
  return data;
};
