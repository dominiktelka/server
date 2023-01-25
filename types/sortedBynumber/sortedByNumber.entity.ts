
export interface SortedByNumberEntity{
        sport_event_id: string;
        start_date: string;
        sport_name: string;
        competition_name: string;
        competition_id: string;
        season_name: string;
        competitors: {id: string, name: string, country: string, country_code: string, abbreviation: string, qualifier: string, gender: string}[];
        venue: {};
        probability_home_team_winner: number;
        probability_draw: number;
        probability_away_team_winner: number;
        highestNumber?: number;
}

