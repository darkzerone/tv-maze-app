export type ShowSearchResponse = ShowSearch[];

export type ShowSearch = {
  score: number;
  show: Show;
};

export type ShowSchedule = {
  time: string;
  days: string[];
};

export type ShowRating = {
  average: string;
};

export type Country = {
  name: string;
  code: string;
  timezone: string;
};

export type ShowNetwork = {
  id: number;
  name: string;
  country: Country;
  officialSite: string;
};

export type Image = {
  medium?: string;
  original?: string;
};

export type ShowLink = {
  self: {
    href: string;
  };
  previousEpisode: {
    href: string;
  };
};

export type Show = {
  id: number;
  url: string;
  name: string;
  language: string;
  genres: string[];
  status: string;
  runtime: number | null;
  averageRuntime: number;
  premiered: string;
  ended: string;
  officialSite: string;
  schedule: ShowSchedule;
  rating: ShowRating;
  type: string;
  weight: number;
  network: ShowNetwork | null;
  webChannel: string | null;
  dvdCountry: string | null;
  externals: Record<string, number | string>;
  image: Image;
  summary: string;
  updated: number;
  _links: ShowLink;
};

export type ShowCastPerson = {
  id: number;
  url: string;
  name: string;
  country: Country;
  birthday: string;
  deathday: string | null;
  gender: string;
  image: Image;
  updated: number;
};

export type ShowCastCharacter = {
  id: number;
  url: string;
  name: string;
  image: Image;
};

export type ShowCastMember = {
  person: ShowCastPerson;
  character: ShowCastCharacter;
  self?: boolean;
  voice?: boolean;
};

export type ShowDetail = Show & {
  _embedded: {
    cast: ShowCastMember[];
  };
};
