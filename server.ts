import express from "express";
import cors from 'cors';

import {sortedByNumber} from './routers/sortedByNumber'

import {handleError} from "./utlis/error";




const app = express();

app.use(cors({
        origin: 'http://localhost:3000',
    }
));

app.use(express.json());

app.use('/',sortedByNumber);


app.use(handleError);

app.listen(3001, 'localhost', ()=>{
    console.log('Listening on http://localhost:3001')
});