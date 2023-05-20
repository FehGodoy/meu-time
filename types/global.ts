export interface Country {
  country: string;
  code: string;
}

export interface League {
  id: number;
  logo: string;
  name: string;
  type: string;
}

export interface Seasons {
  year: number;
  start: string;
  end: string;
  current: boolean;
}

export interface TeamsLists {
  code: string;
  logo: string;
  name: string;
}

export interface MinuteData {
  total: number | unknown;
  percentage: string | unknown;
}

export interface TeamSelect {
  total: any;
  team: {
    id: number;
    logo: string;
    name: string;
  };
  goals: {
    for: {
      minute: {
        [key: number]: MinuteData;
      };
    };
  };
}

export interface PlayersTeam {
  id: number;
  name: string;
  age: number;
  nationality: string;
  photo: string;
}
