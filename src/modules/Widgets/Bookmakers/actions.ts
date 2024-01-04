import axios from "@/core/axios";

export const asyncFetchBookmakers = async () => {
  const { data } = await axios.get("/get_best_bookmaker");
  return data.data;
};
