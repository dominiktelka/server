import {Router} from 'express';
import {EventRecord} from "../records/sortedByNumber.record";
export const sortedByNumber = Router();


sortedByNumber
.get('/', async (req, res) =>{
    const Events = await EventRecord.listAll()
    res.json({
        Events,
    })
})
