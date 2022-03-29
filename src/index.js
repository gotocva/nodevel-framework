import app from './config/express';

import env from './config/env';
import connect from './config/mongoose.connect';

connect();

/**
 * Load user module routes
 */
import { userRoutes, API_PREFIX } from "./modules/user/user.module";
for (var routes in userRoutes) {
    const route = userRoutes[routes];
    app.use('/' + routes + '/' + API_PREFIX, route);
}


/**
 * running express application
 */
app.listen(env.PORT, () => {
    console.log(`Application running on port ${env.PORT}`)
});