import express from 'express';
import routes from "../routes/index.js"; // Adjust the path as necessary

export const setupRouter = (app) => {

    const router = routes()
    app.use('/api', router);
};
