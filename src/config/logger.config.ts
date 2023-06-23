import { Logger } from '@nestjs/common';

export class AppLogger {
  getLogger() {
    if (process.env.NODE_ENV === 'production') return new Logger();
  }
}
