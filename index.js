const awsLambdaFastify = require("@fastify/aws-lambda");
const init = require("./app.js");

const app = init();

const proxy = awsLambdaFastify(app);
exports.handler = proxy;
