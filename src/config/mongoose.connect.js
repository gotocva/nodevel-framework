import mongoose from 'mongoose';


import env from './env';
import LOG from './logger';

/**
 * mongodb connection establishment
 */
const connect = () => {

    if (env.MONGODB_PASSWORD == 'NULL') {
        LOG.info('Mongodb Connecting without password');
        mongoose.connect(`mongodb://${env.MONGODB_HOST}/${env.MONGODB_DB_NAME}`);
    } else {
        LOG.info('Mongodb Connecting with password');
        mongoose.connect(`mongodb://${env.MONGODB_USERNAME}:${env.MONGODB_PASSWORD}@${env.MONGODB_HOST}:${env.MONGODB_PORT}/${env.MONGODB_DB_NAME}`);
    }
    // when successfully connected
    mongoose.connection.on('connected', () => {
        LOG.info('Mongodb successfully connected');
    });
    // if the connection throws an error
    mongoose.connection.on("error", (err) => {
        //   if you get error for the first time when this gets started make sure to run mongod
        LOG.error('Mongodb connection failed', err);
    });
    // when the connection is disconnected
    mongoose.connection.on("disconnected", () => {
        LOG.error('Mongodb connection disconnected');
    });
}


module.exports = connect;