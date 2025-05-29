import express from 'express';
import config from './config.js';

export const startServer = () => {

    const httpServer = express();
    const port = config.port;

    try {
        httpServer.listen(port, () => {
            console.log('server started on port', port);
        });
    } catch(err) {
        throw new Error(`Error starting server: ${err}`);
    }
}