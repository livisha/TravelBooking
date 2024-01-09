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
import { Injectable, Logger, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { DBResponse } from "src/database/postgreSql/dto/dbresponse.dto";
import { sqlQuery } from "src/database/postgreSql/repository/db.service";
import { SignUpRequestBody } from "./dto/signBody.response.dto";
import { response } from "express";

@Injectable()
export class AuthService{
    constructor(private readonly jwtService: JwtService){}
    private readonly logger = new Logger(AuthService.name)


    async signUp(signUpRequestBody:SignUpRequestBody): Promise<any> {
        try{
        let response ={"messgae":"Invalid Error"}
        const user=`select email from airplane_system.userdetail where email = ${signUpRequestBody.email_Id}`
        if(user){
            throw new Error("User already existed")
        }
        const query = `INSERT INTO airplane_system.userdetail
        (firstname, lastname, email, phonenumber, "password")
        VALUES('${signUpRequestBody.first_name}', '${signUpRequestBody.last_name}', '${signUpRequestBody.email_Id}', ${signUpRequestBody.phone_number}, '${signUpRequestBody.password}');`
        console.log(query)
        let dbResponse= new DBResponse();
        dbResponse=await sqlQuery(query);
        console.log("db response",dbResponse)
        if(dbResponse.rowCount==1){
           response.messgae="Record Inserted Successfully";
           return response;
        }
        else{
            this.logger.error('Internal Server Error')
            return response;
        }
        }
        catch(error){
            this.logger.error('signUp API',error)
        }
      }

    async validateUser(email: string, password: string): Promise<any> {
        const query = 'select * from airplane_system.userdetail'
        let dbResponse= new DBResponse();
        dbResponse=await sqlQuery(query);
        const user=dbResponse.rows[0];
        console.log('user validate',user)
        if(user.email==email && user.password==password){
            return user;
        }
        else{
            throw new Error("Invalid Credential")
        }
      }

    async generateToken(payload: { email: string; sub: string }){
        return this.jwtService.signAsync(payload);
    }
}