import { Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { DBResponse } from "src/database/postgreSql/dto/dbresponse.dto";
import { sqlQuery } from "src/database/postgreSql/repository/db.service";

@Injectable()
export class AuthService{
    constructor(private readonly jwtService: JwtService){}

    async validateUser(email: string, password: string): Promise<any> {
        const query = 'select * from "Airplane-System".userdetail '
        let dbResponse= new DBResponse();
        dbResponse=await sqlQuery(query);
        const user=dbResponse.rows[0];
        return user;
      }

    async generateToken(payload: { email: string; sub: string }){
        return this.jwtService.signAsync(payload);
    }
}