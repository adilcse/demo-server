import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import appConfig from './config/app.config';
import { AppLogger } from './config/logger.config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: new AppLogger().getLogger(),
  });
  app.enableCors();
  app.setGlobalPrefix('api/v1');
  const time = new Date().toLocaleString('us-en', {
    timeZone: 'Asia/Kolkata',
    hour12: true,
  });
  const options = new DocumentBuilder()
    .setTitle(appConfig.APP_NAME)
    .setDescription(`Demo app.  Last Updated : ${time}`)
    .setVersion('1.0.1')
    .addBearerAuth()
    .addCookieAuth('Refresh')
    .build();

  const document = SwaggerModule.createDocument(app, options);

  // Show API documentation
  SwaggerModule.setup('swagger', app, document, {
    customSiteTitle: `${appConfig.APP_NAME} documentation`,
  });

  app.use('/', (req, res, next) => {
    console.log(req.originalUrl);
    if (req.originalUrl === '/') {
      return res.redirect('/swagger');
    }
    next();
  });

  await app.listen(appConfig.PORT, () => {
    console.log(
      'Successfully started at port:',
      appConfig.PORT,
      ' in ',
      'prod',
    );
  });
}
bootstrap();
