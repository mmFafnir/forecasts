export type TypeBestBetFootball = {
  id: number;
  best_bet: "Yes" | "No";
  game_id: number;
  event_id: number;
  bet: string;
  odds: null | number;
  why: string;
  why_best: string;
  created_at: string | null;
  updated_at: string | null;
  risk_id: number;
};

export type TTeamFootball = {
  id: number;
  sport_id: number;
  team_id: number;
  team_name: string;
  team_cc: string;
  has_quad: number;
  get_photo: string;
  created_at: string | null;
  updated_at: string;
};

export type TGameFootball = {
  id: number;
  real_time_carbon: string;
  real_date: string;
  real_time: string;
  foreign_league_id: number;
  foreign_home_id: number;
  foreign_away_id: number;
  home_team: TTeamFootball;
  away_team: TTeamFootball;
  best_bet_card: TypeBestBetFootball[];
  url: string;
};

export type TLeaguesFootball = {
  id: number;
  sport_id: number;
  favorit: "0" | "1";
  league_id: number;
  league_name: string;
  league_cc: string;
  has_leaguetable: number;
  has_toplist: number;
  games: TGameFootball[];
};

export interface IDataFetchAllMatchesFootball {
  current_page: number;
  data: TLeaguesFootball[];
  first_page_url: string;
  from: number;
  next_page_url: string | null;
  per_page: number;
  prev_page_url: string | null;
  to: number;
}

export interface IEventCardFootball {
  id: number;
  best_bet: "Yes" | "No";
  game_id: number;
  event_id: number;
  bet: string;
  odds: string;
  why: string;
  why_best: string | null;
  created_at: string;
  updated_at: string;
  risk_id: number;
}

export interface IMatchFootball {
  id: number;
  sport_id: number;
  favorite_game: "0" | "1";
  game_id: number;
  time: number;
  time_status: number;
  league_id: number;
  home_id: number;
  away_id: number;
  foreign_league_id: number;
  foreign_home_id: number;
  foreign_away_id: number;
  real_time_carbon: string;
  real_date: string;
  real_time: string;
  created_at: string;
  updated_at: string;
  chat_gpt_text: string | null;
  game_analize: string | null;
  game_cf: string | null;
  url: string;
  home_team: TTeamFootball;
  away_team: TTeamFootball;
  best_bet_card: IEventCardFootball[];
  cards: IEventCardFootball[];
}
