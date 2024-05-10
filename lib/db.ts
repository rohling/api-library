import postgres from "postgres";


//const sql = postgres({ /* options */ }) // will use psql environment variables
const sql = postgres(
  "postgresql://school_owner:tauU52xEWpHC@ep-royal-hill-a576l84m.us-east-2.aws.neon.tech/school?sslmode=require"
);
export default sql;

//outro db...
//postgres://postgres.llfnfuopqpnhxsevyghl:6WsfZqlOurOohGQ0@aws-0-sa-east-1.pooler.supabase.com:6543/postgres

//postgres:6WsfZqlOurOohGQ0@db.llfnfuopqpnhxsevyghl.supabase.co:5432/postgres",


//Neon db
//postgresql://school_owner:tauU52xEWpHC@ep-royal-hill-a576l84m.us-east-2.aws.neon.tech/school?sslmode=require
