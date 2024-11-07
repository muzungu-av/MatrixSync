import {
  Controller,
  Get,
  Post,
  UseGuards,
  Request,
  Head,
} from '@nestjs/common';
import { AppService } from './app.service';
import { winstonLogger as logger } from 'winston.logger';

@Controller('/api')
export class AppController {
  constructor(private appService: AppService) {}

  @Get('/')
  getHello(): string {
    logger.info('HELLO');
    return this.appService.getPublicHello();
  }

  // @UseGuards(JwtAuthGuard)
  // @Head('/check')
  // checkJwt(): void {}

  // @UseGuards(LocalAuthGuard)
  // @Post('auth/login')
  // async login(@Request() req) {
  //   winstonLogger.info('Successful user authorisation');
  //   return this.authService.login(req.user);
  // }
}
