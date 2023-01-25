import {Router} from 'express';
import {
    EventRecordSortedAlphabetically
} from "../records/sortedAlphabetically.record";

export const sortedAlphabetically = Router();


sortedAlphabetically
    .get('/', async (req, res) =>{
        const Events = await EventRecordSortedAlphabetically.listAll()
        res.json({
            Events,
        })
    })