import express, { json } from 'express';
import morgan from 'morgan';
import '@babel/polyfill'

//importin routes
import projectRoutes from './api/components/Projects/index.js'
import taskRoutes from './api/components/Task/index.js'

const app = express();

//middlewares
app.use(morgan('dev'));
app.use(json());

//routes
app.use('/api/projects', projectRoutes);
app.use('/api/tasks', taskRoutes);

export default app;