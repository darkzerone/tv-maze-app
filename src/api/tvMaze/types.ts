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

export type ShowNetworkCountry = {
  name: string;
  code: string;
  timezone: string;
};

export type ShowNetwork = {
  id: number;
  name: string;
  country: ShowNetworkCountry;
  officialSite: string;
};

export type ShowImage = {
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
  network: ShowNetwork;
  webChannel: string | null;
  dvdCountry: string | null;
  externals: Record<string, number | string>;
  image: ShowImage;
  summary: string;
  updated: number;
  _links: ShowLink;
};
