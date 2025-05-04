import { Application, Router } from "@oak/oak";
import { oakCors } from "@tajpouria/cors";
import { User } from "../Database/Entity/User.ts";

const app = new Application();
app.use(oakCors({
    "origin": "http://localhost:5173",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 204
}
));
const router = new Router();
router.get("/middleware/UserRegistration", (context) => {
    context.response.body = "success";
})
router.post("/middleware/UserRegistration", async context => {
    const toCheck = await context.request.body;
    let request;
    if(toCheck.type() !== "json"){
        context.response.status = 415;
        return;
    } else {
        request = await toCheck.json();
    }

    if(!(request.email && request.password)){
        context.response.status = 400;
        return;
    }
    try {
        const UserObject = new User();
        UserObject.setEmail(request.email);
        UserObject.setPassword(request.password);
        let resultID = await UserObject.insertUser();
        context.response.body = resultID;
        context.response.status = 201;
        
    } catch (e){
        context.response.status = 500;
        context.response.body =e.message;
    }
});



app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port: 8000 });
