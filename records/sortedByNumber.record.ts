import {Events} from '../data/BE_data.json'
import { SortedByNumberEntity} from '../types';

export class EventRecord implements SortedByNumberEntity{
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


    static async listAll(): Promise<EventRecord[]>{
        Events
            .map((item:SortedByNumberEntity) => {

                item.highestNumber  = Math.max(item.probability_away_team_winner, item.probability_home_team_winner, item.probability_draw);
            })


        const sorted = Events.sort((a:SortedByNumberEntity,b:SortedByNumberEntity)=> b.highestNumber - a.highestNumber)
        return sorted
    }

}