import axios from 'axios';
import express from 'express';
import session from 'express-session';
import morgan from 'morgan';
import ViteExpress from 'vite-express';
import Stat from './models/model.js';

import appRouter from './router/index.js';

const app = express();
const port = '8000'
ViteExpress.config({ printViteDevServerHost: true });

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(session({ 
    secret: 'shushhhhh',
    saveUninitialized: true,
    resave: false
}));

app.use(appRouter);

app.get('/stats', async (req, res) => {
    const stats = await Stat.findAll();
    res.json(stats);
})

ViteExpress.listen(app, port, () => console.log(`Server is listening on http://localhost:${port}`));