const winston = require("winston");

const level = process.env.LOG_LEVEL || 'debug';
const DailyRotateFile = require('winston-daily-rotate-file');

const transport = new winston.transports.DailyRotateFile({
    filename: './logs/application-%DATE%.log',
    datePattern: 'YYYY-MM-DD-HH',
    zippedArchive: false,
    maxSize: '20m',
    maxFiles: '14d'
     });

const logger = winston.createLogger({
    level: level,
     transports: [
      transport ,
      new winston.transports.Console({
         handleExceptions: true,
        colorize: true
      }) 
    ]
  });

module.exports = logger


