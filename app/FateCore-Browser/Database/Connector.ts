import { Client } from "@jersey/postgres";

export class Connector {

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

    async handleConnection(query : string, array : boolean = 1) {
        const client = new Client(this.config);

        await client.connect();
        let result;
        if (array) {
            result = await client.queryArray(query);
        }
        else {
            result = await client.queryObject(query);
        }
        await client.end();
        return result;
    }
}