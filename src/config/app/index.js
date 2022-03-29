import env from '../env';

import development from './development';
import production from './production';
import staging from './staging';

/**
 * 
 * @returns {Object} appConfig
 */
export const appConfig = () => {

    switch (env.ENVIRONMENT) {
        case 'development':
            return development;
            break;

        case 'production':
            return production;
            break;

        case 'staging':
            return staging;
            break;

        default:
            console.log('Unknown environment');
            return false;
            break;
    }
}