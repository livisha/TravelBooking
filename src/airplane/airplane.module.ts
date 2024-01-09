import { Module } from '@nestjs/common';
import { AirplaneService } from './airplane.service';
import { AirplaneController } from './airplane.controller';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports:[JwtModule.register({
    secret:'Key',
    signOptions:{expiresIn:'1h'}
  })],
  controllers: [AirplaneController],
  providers: [AirplaneService]
})
export class AirplaneModule {}
