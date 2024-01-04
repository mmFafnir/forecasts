import axios from "@/core/axios";
import { IFetchDataCountry } from "@/types/countries";
import { TypeLeagueFootball } from "@/types/leagues/football";

interface IParams {
  search?: string;
}

export const asyncFetchCountries = async (
  params: IParams
): Promise<IFetchDataCountry<TypeLeagueFootball>> => {
  const { search = "" } = params;
  const { data } = await axios.get(`/get_country?search=${search}`);
  return data.data;
};
