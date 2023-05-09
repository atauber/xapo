import { ApolloServer, ApolloServerOptionsWithSchema, BaseContext } from "@apollo/server";
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import bodyParser from 'body-parser';
import cors from 'cors';
import express, { Express, RequestHandler } from 'express';
import http, { IncomingMessage, Server, ServerResponse } from 'http';
import { schema } from "./schema.js";

const app: Express = express();
let requestListener: (request: IncomingMessage, response: ServerResponse) => void = app
//requestListener = (request: IncomingMessage, response: ServerResponse) => {
//    response.end('Hello world!');
//}
export const httpServer: Server<typeof IncomingMessage, typeof ServerResponse> = http.createServer(requestListener);


const options: ApolloServerOptionsWithSchema<BaseContext> = {
    schema: schema,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer: httpServer })],
}

const server = new ApolloServer(options);
await server.start();

let handlers: RequestHandler[] = [cors(), bodyParser.json(), expressMiddleware(server)]

app.use("/graphql", handlers);

const port = 4000

let listenFunc = () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
}

app.listen(port, listenFunc)

console.log(`🚀  Server ready`);