import winston from 'winston';

const { combine, timestamp, label, printf } = winston.format;

const logFormat = printf(({ level, message, label, timestamp }) => {
   return `${timestamp} [${label}] ${level}: ${message}`;
});

const logger = winston.createLogger({
   format: combine(
      timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
      label({ label: '42seoul-42km' }),
      logFormat,
   ),
   transports: [
      new winston.transports.Console(),
   ],
});

export default logger;