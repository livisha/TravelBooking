import {Pool , PoolClient} from 'pg'

const DBConfig ={
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    database: 'postgres',
    synchronize: true,
}

const DBPool = new Pool(DBConfig);

DBPool.on('error', (err:Error, client:PoolClient)=>{
    console.log(`DBPool error: ${err}`, 'PostgreSqlConnection')
})

DBPool.on('connect',()=>{
    console.log(`DBPool status totalcount: ${DBPool.totalCount}, idleCount: ${DBPool.waitingCount}`,'PostgreSqlConnection')
})

export default DBPool;