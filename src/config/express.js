import express from "express";
import cors from 'cors';
import helmet from 'helmet';


const app = express();

app.use(cors());

app.use(helmet());

// parse application/json
app.use(express.json({ limit: '4mb' }));

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

module.exports = app;