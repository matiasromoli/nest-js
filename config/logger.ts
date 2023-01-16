import { Logger } from '@nestjs/common';

export class LoggerService {
  private readonly logger = new Logger();

  Error(error: string) {
    return this.logger.error(error);
  }
  Warn(error: string) {
    return this.logger.warn(error);
  }
  Log(message: string) {
    return this.logger.log(message);
  }
}
