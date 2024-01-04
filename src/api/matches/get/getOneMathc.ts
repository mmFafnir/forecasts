import axios from "@/core/axios";
import { IMatchFootball } from "@/types/sports/football";

interface IParams {
  sport: string;
  command: string;
}
export const getOneMatch = async (
  params: IParams
): Promise<IMatchFootball | null> => {
  try {
    const { data } = await axios(
      `/single_page_match/ru/${params.sport}/${params.command}`
    );

    return data.data;
  } catch (error) {
    return null;
  }
};
