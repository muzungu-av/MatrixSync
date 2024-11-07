import * as winston from 'winston';
import {
  WinstonModule,
  utilities as nestWinstonModuleUtilities,
} from 'nest-winston';

export const winstonLogger = winston.createLogger({
  transports: [
    new winston.transports.File({
      level: 'info',
      filename: 'logs/app.log',
      format: winston.format.combine(
        winston.format.timestamp(),
        nestWinstonModuleUtilities.format.nestLike(),
      ),
    }),
  ],
});
