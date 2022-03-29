import winston from 'winston';

const options = winston.LoggerOptions = {
    format: winston.format.combine(
        winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
        winston.format.errors({ stack: true }),
        winston.format.colorize(),
        winston.format.splat(),
        winston.format.printf(
            ({ timestamp, level, label, message, stack, ...rest }) => {
                const namespace = label ? `(${label})` : '';
                const errStack = stack ? `\n${stack}` : '';
                // const meta = rest && Object.keys(rest).length ? `\n${JSON.stringify(rest, undefined, 2)}` : '';
                return `[${timestamp}] ${level}: ${namespace} ${message} ${errStack}`;
            }
        )
    ),
    transports: [
        // new winston.transports.Console({ level: process.env.NODE_ENV === 'production' ? 'error' : 'debug' }),
        new winston.transports.Console({ level: process.env.NODE_ENV === 'production' ? 'debug' : 'debug' }),
        new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
        new winston.transports.File({ filename: 'logs/debug.log', level: 'debug' }),
    ]
};

const LOG = winston.createLogger(options);
export default LOG;