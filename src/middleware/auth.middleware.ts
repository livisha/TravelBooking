import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthMiddleware implements NestMiddleware{
    constructor(private readonly jwtService: JwtService){}

     use(req:Request,res:Response,next:NextFunction){
        const token=req.headers.authorization?.split(' ')[1];
        if(token){
            try{
                console.log("mid token",token)
                const decoded =  this.jwtService.verify(token);
                console.log(decoded)
                req['user'] = decoded;
                next();
            }
            catch(error){
                return res.status(401).json({message: 'Invalid token'})
            }  
        }
        else{
            return res.status(401).json({messgae:'Token not provided'})
        }
    }
}