const { promisify } = require('util');
import * as redis from 'redis'

const redisClient = redis.createClient( );

export default class RedisCacheService{
  constructor(){}

  setCacheAsync = promisify(redisClient.set).bind(redisClient)

  getCacheAsync = promisify(redisClient.get).bind(redisClient)

  delCacheAsync = promisify(redisClient.del).bind(redisClient)

  async getCache(id:string):Promise<any>{
    return new Promise(async (resolve, reject)=>{
      try{
        await redisClient.get(id);
      }catch(err){
        console.log("get cache error" + err);
        reject(err);
      }
    });
  }


  async setCache(id:string, data:any , expiryTime:number):Promise<any>{
    return new Promise(async (resolsve, reject)=>{
      try{
        await redisClient.setEx(id,expiryTime,JSON.stringify(data));
      }catch(err){
        console.log("set cache error" + err);
        reject(err);
      }
    });
  }

  async delCache(id:string):Promise<any>{
    return new Promise(async (resolve, reject)=>{
      try{
        await redisClient.del(id);
      }catch(err){
        console.log("del cache error" + err);
        reject(err);
      }
    });
  }


}

