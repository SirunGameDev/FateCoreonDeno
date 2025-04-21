import { User } from "./Entity/User.ts"

let UserObject = new User();
await UserObject.initTable();
await UserObject.setEmail("test+testafa1a3caava23aac332@test.de");
await UserObject.insertUser();
console.log(await UserObject.getUserFromDB())