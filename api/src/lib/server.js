import express from 'express';
import config from './config.js';

export const startServer = () => {

    const httpServer = express();
    const port = config.port;

    httpServer.get('/ping', (req, res) => {
        console.log('-ping route:', req.url, Date.now());
        res.status(200).json({
            Message: 'pong - test successful',
        })
    })

    try {
        httpServer.listen(port, () => {
            console.log('server started on port', port);
        });
    } catch(err) {
        throw new Error('Error starting server: ${err}');
    }
}