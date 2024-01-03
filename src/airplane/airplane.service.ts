import { Injectable } from '@nestjs/common';
import { DBResponse } from 'src/database/postgreSql/dto/dbresponse.dto';
import { sqlQuery } from 'src/database/postgreSql/repository/db.service';

@Injectable()
export class AirplaneService {
    async getUser(): Promise<any> {
        try{
        const query= 'select * from "Airplane-System".userdetail ';
        let dbResponse= new DBResponse();
        dbResponse=await sqlQuery(query);
        console.log(dbResponse)
        return dbResponse;
        }
        catch(e){
          throw new Error(e)
        }
      }
}
