import { DBResponse } from '../dto/dbresponse.dto';
import DBPool from '../connection';

export const responseExtractor = (data: any): DBResponse => {
  let dbresponse = new DBResponse();
  dbresponse.rows = data.rows;
  dbresponse.rowCount=data.rowCount;
  return dbresponse;
};

export const sqlQuery = async (sql: string): Promise<DBResponse> => {
  let dbResponse = new DBResponse();
  return new Promise(async (resolve, reject) => {
    DBPool.query(sql, (error, recordset) => {
      if (error) {
        console.log(error);
        reject('Internal server Error');
      } else {
        dbResponse = responseExtractor(recordset);
        console.log('Query Executes successfully');
        resolve(dbResponse);
      }
    });
  });
  
};
