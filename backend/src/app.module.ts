import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { configuration } from 'config/configuration';
import { validationSchema } from 'config/validation';
import { WinstonModule } from 'nest-winston';
import { winstonLogger } from 'winston.logger';

@Module({
  imports: [
    WinstonModule.forRoot({
      transports: [winstonLogger],
    }),
    ConfigModule.forRoot({
      envFilePath: `${process.cwd()}/.env.${process.env.NODE_ENV}`,
      load: [configuration],
      validationSchema, // Validating the env variables
      isGlobal: true, // environment variables are available to all modules
      expandVariables: true, // allow create nested environment variables
    }),
  ],
  controllers: [AppController],
  providers: [
    {
      provide: 'winstonLogger',
      useValue: winstonLogger,
    },
    AppService,
  ],
})
export class AppModule {}
