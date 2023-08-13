import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import config from './config';

import categoryRoutes from './routes/category.routes';

const app = express();

app.set('port', config.PORT || 8000);

app.use(morgan('dev'));

//app.use(cors('https://')) //place the url of the frontend server

app.use(cors()) //delete by having the frontend server up and running
app.use(express.json()); //
app.use(express.urlencoded({extended:false}))


app.use(categoryRoutes);

export default app;