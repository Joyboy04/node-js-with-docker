import { setupMongo } from "./mongo.js"; 
import { setupRoutes } from "./setupRoutes.js"; 

export const initializeApp = async (app, config) => {

    // initialize mongodb
    setupMongo(config);
    console.log(`\n ✅ - MongoDB setup and connected...`);

    // setup express router
    setupRoutes(app);
    console.log(`\n ✅ - Express router and app routes setup...`)

};
