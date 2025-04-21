import {Connector } from "../Connector.ts"

export class User {
    #id : string = "";
    #name : string = "";
    #email : string = "";

    #password : string = "";

    setName(name : string) {
        this.#name = name;
    }
    getName() {
        return this.#name;
    }
    setEmail(email : string) {
        this.#email = email;
    }
    getEmail() {
        return this.#email;
    }
    setPassword(password : string) {
        this.#password = password;
    }
    getPassword() {
        return this.#password;
    }
    async initTable() {
        let ConnectorObject = new Connector();
        await ConnectorObject.handleConnection(
            `create table IF NOT EXISTS testuser (
                id uuid DEFAULT gen_random_uuid() primary key,
                name varchar(100),
                password varchar(100),
                email varchar(100) not null UNIQUE
        )`, false);
    
    }

    async insertUser() {
        let ConnectorObject = new Connector();
        let id = await ConnectorObject.handleConnection(
            `
            INSERT INTO testuser (
                name,
                password,
                email
            )
            VALUES (
                '${this.#name}',
                '${this.#password}',
                '${this.#email}'
            )
            RETURNING id;
            `
        );
        // rows 0 0 because of RETURNING ID statement; side effect
        this.#id = id.rows[0][0];
    }

    async getUserFromDB() {
        let ConnectorObject = new Connector();
        let query =             
        `
        SELECT * from testuser
        WHERE email = '${this.#email}'
        or id = '${this.#id}';
        `;
        let result = await ConnectorObject.handleConnection(
            query, false
        );
        return result.rows[0];
    }
}