import { Client } from "https://deno.land/x/postgres/mod.ts";

let config;

// You can use the connection interface to set the connection properties
config = {
  applicationName: "my_custom_app",
  connection: {
    attempts: 1,
  },
  database: "postgres",
  hostname: "db",
  host_type: "tcp",
  password: "NEEDTOCHANGEDENO",
  options: {
    //max_index_keys: "32",
  },
  port: 5432,
  user: "postgres",
  tls: {
    enforce: false,
  },
};

// Alternatively you can use a connection string
//config =
//  "postgres://user:password@localhost:5432/test?application_name=my_custom_app&sslmode=require";

const client = new Client(config);
console.log("Client config read in")
await client.connect();
console.log("Client connected")
await client.queryObject(`create table IF NOT EXISTS testproduct (
    id integer primary key,
    name varchar(100) not null,
    price real not null
  )`);
await client.end();
console.log("Client disconnected")