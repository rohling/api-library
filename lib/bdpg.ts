import { Pool, Client } from "pg";
//

const connectionString =
  "postgresql://school_owner:tauU52xEWpHC@ep-royal-hill-a576l84m.us-east-2.aws.neon.tech/school?sslmode=require";

export const pool = new Pool({
  connectionString,
});

export const client = new Client({
  connectionString,
});
