import express from 'express';
import bookRoutes from './routes/book.routes.js';
import config from "./configuration/config.js";

const app = express();

app.use(express.json());

app.use('/', bookRoutes);

app.listen(config.port, () => console.log(`Server running on port ${config.port}. Press Ctrl+C to stop.`));