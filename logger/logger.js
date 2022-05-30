import winston, { format } from 'winston';

const logger = winston.createLogger({
    format: format.combine(
        format.timestamp({ format: 'DD-MM-YYYY HH:mm:ss' }),
        format.align(),
        format.json(),
        format.colorize({all: true})),
    transports: [new winston.transports.Console()]
});

export default logger;
