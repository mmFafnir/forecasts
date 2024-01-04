export type TypeCountry<T> = {
  code: string;
  league: T[];
  name: string;
  translation: string;
};

export interface IParamsDataCountries {
  current_page: number;
  first_page_url: string;
  from: 1;
  next_page_url: string | null;
  path: string;
  per_page: number;
  prev_page_url: null | string;
  to: number;
}

export interface IFetchDataCountry<T> extends IParamsDataCountries {
  data: TypeCountry<T>[];
}
