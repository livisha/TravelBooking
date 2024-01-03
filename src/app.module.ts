import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AirplaneModule } from './airplane/airplane.module';
import { AuthMiddleware } from './middleware/auth.middleware';
import { AirplaneController } from './airplane/airplane.controller';
import { JwtModule } from '@nestjs/jwt';
import { AuthModule } from './authentication/auth.module';

@Module({
  imports: [
    JwtModule.register({
      secret:'Key',
      signOptions:{expiresIn:'1h'}
    }),
    AirplaneModule,AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule{
  configure(consumer: MiddlewareConsumer):void{
    consumer.apply(AuthMiddleware).forRoutes(AirplaneController)
  }
}
