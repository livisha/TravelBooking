import { Controller, Logger,Get ,Post, Query, Param} from '@nestjs/common';
import { AirplaneService } from './airplane.service';
import { Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('travel')
export class AirplaneController {
  private readonly logger = new Logger(AirplaneController.name)
  constructor(private readonly airplaneService: AirplaneService) {}

  @Get('/api/airports')
  async getAllAirports(@Req() request: Request): Promise<any> {
    try{
      console.log("user detail",request["user"])
      this.logger.log("calling function get hello")
      return this.airplaneService.getAllAirports();
    }
    catch(error){
      this.logger.error('getAllAirports API',error)
    }
  }

  @Get('/api/flights/:flight_id')
  async getFlightById(@Param() param: any): Promise<any> {
    try{
      return this.airplaneService.getFlightById(param.flight_id);
    }
    catch(error){
      this.logger.error('getFlightById API',error)
    }
  }

  @Get('/api/flights')
  async getAllFlights(@Req() request: Request): Promise<any> {
    try{
      console.log("user detail",request["user"])
      this.logger.log("calling function get hello")
      return this.airplaneService.getAllFlights();
    }
    catch(error){
      this.logger.error('getAllFlights API',error)
    }
  }

  @Get(`/api/flights/passengers`)
  async getPassengersByFlight(@Query('flight_id') flightId: string): Promise<any> {
    try{
      return this.airplaneService.getPassengersByFlight(flightId);
    }
    catch(error){
      this.logger.error('getPassengersByFlight API',error)
    }
  }


 
}
