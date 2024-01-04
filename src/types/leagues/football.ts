export type TypeLeagueFootball = {
  id: number;
  league_cc: string;
  league_id: number;
  league_name: string;
  url: string;
};

export interface IPindLeaguesFootball {
  created_at: string;
  id: number;
  league: TypeLeagueFootball;
  league_id: number;
  status: "0" | "1";
  updated_at: string;
  user_id: null;
}

export interface IFetchLeaguesDataFootball {
  current_page: number;
  data: IPindLeaguesFootball[];
  first_page_url: string;
  from: number;
  next_page_url: string | null;
  path: string;
  per_page: number;
  prev_page_url: string | null;
  to: number;
}
