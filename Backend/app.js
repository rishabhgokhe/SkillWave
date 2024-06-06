import express from 'express';
import { config } from 'dotenv';

config({
    path: './Config/config.env'
});

const app = express();

export default app;