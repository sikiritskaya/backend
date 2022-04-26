import winston, { format } from 'winston';

const logger = winston.createLogger({
    format: format.combine(
        format.timestamp({ format: 'DD-MM-YYYY HH:mm:ss' }),
        format.align(),
        format.json(),
        format.colorize({all: true})),
    transports: [new winston.transports.Console({
        level: process.env.LOG_LEVEL_INFO || 'info',
        
    }),
    new winston.transports.File({
        level: process.env.LOG_LEVEL_ERROR || 'error',
        filename: './logger/errors.log'
    })
    ]
});

export default logger;
