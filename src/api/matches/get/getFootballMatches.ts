import axios from "@/core/axios";
import { IDataFetchAllMatchesFootball } from "@/types/sports/football";

export const getFootballMatches = async (): Promise<
  IDataFetchAllMatchesFootball | { data: [] }
> => {
  try {
    const { data } = await axios.get("/get_matches");
    console.log(data);
    return data.data;
  } catch (error) {
    console.log(error);
    return { data: [] };
  }
};
