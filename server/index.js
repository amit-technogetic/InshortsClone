import express from 'express';
import Connection from './database/db.js';
const app = express();
 import DefaultData from './default.js';
import cors from 'cors';
// import Route from './routes/Route';
import Route from './routes/Route.js';
const PORT = 8000;
Connection();
app.use(cors());
app.use('/', Route);
app.listen(PORT , () => {
    console.log(`Server is running started successfully on PORT ${PORT}`);
});

DefaultData();