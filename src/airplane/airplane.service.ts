import { Injectable ,Logger} from '@nestjs/common';
import { DBResponse } from 'src/database/postgreSql/dto/dbresponse.dto';
import { sqlQuery } from 'src/database/postgreSql/repository/db.service';

@Injectable()
export class AirplaneService {
  private readonly logger = new Logger(AirplaneService.name)

    async getAllAirports(): Promise<any> {
        try{
        const query= 'select * from airplane_system.airport ';
        let dbResponse= new DBResponse();
        dbResponse=await sqlQuery(query);
        this.logger.log(dbResponse)
        return dbResponse;
        }
        catch(error){
          this.logger.error('getAllAirports API',error)
        }
      }

      async getAllFlights(): Promise<any> {
        try{
        const query= 'select * from airplane_system.flight_details ';
        let dbResponse= new DBResponse();
        dbResponse=await sqlQuery(query);
        this.logger.log(dbResponse)
        return dbResponse;
        }
        catch(error){
          this.logger.error('getAllFlights API',error)
        }
      }

      async getFlightById(flightId:string): Promise<any> {
        try{
        const query= `select * from airplane_system.flight_details where flight_id= ${flightId}`;
        let dbResponse= new DBResponse();
        dbResponse=await sqlQuery(query);
        this.logger.log(dbResponse.rows)
        return dbResponse;
        }
        catch(error){
          this.logger.error('getAllFlights API',error)
        }
      }

      async getPassengersByFlight(flightId:string): Promise<any> {
        try{
        const query= `select * from airplane_system.passengers where flight_id= ${flightId}`;
        let dbResponse= new DBResponse();
        dbResponse=await sqlQuery(query);
        this.logger.log(dbResponse.rows)
        return dbResponse;
        }
        catch(error){
          this.logger.error('getPassengersByFlight API',error)
        }
      }
}
