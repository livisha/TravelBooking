import { Controller, Logger,Get, UseGuards } from '@nestjs/common';
import { AirplaneService } from './airplane.service';

@Controller('airplane')
export class AirplaneController {
  private readonly logger = new Logger(AirplaneController.name)
  constructor(private readonly airplaneService: AirplaneService) {}

  @Get()
  async getUser(): Promise<any> {
    try{
      this.logger.log("calling function get hello")
      return this.airplaneService.getUser();
    }
    catch(error){
      this.logger.error('get hello error',error)
    }
  }
}
