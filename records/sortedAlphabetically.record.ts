import {Events} from '../data/BE_data.json'
import { SortedByNumberEntity } from '../types';
import {
    SortedAlphabeticallyEntity
} from "../types/sortedAlphabetically/sortedAlphabetically.entity";


export class EventRecordSortedAlphabetically implements SortedAlphabeticallyEntity {
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
    teamMember?: void[]


    // @ts-ignore
    static async listAll(): Promise<EventRecordSortedAlphabetically[]> {

        Events.map((item:SortedAlphabeticallyEntity) => {
            item.teamMember = item.competitors.map( item =>{
                item.name
            })
        })
        const sorted = Events.sort((a:any,b:any) => {
            const nameA = a.teamMember.toLocaleLowerCase();
            const nameB = b.teamMember.toLocaleLowerCase();
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }
            return 0;
        })
        return sorted

    }
}