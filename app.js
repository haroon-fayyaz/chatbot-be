require("dotenv/config");
const fastify = require("fastify");
const OpenAI = require("openai");

const omit = require("lodash/omit");
const pick = require("lodash/pick");

const { OPENAI_API_KEY } = process.env;

const app = fastify({
  logger: {
    level: "info",
    base: false,
    serializers: {
      req(req) {
        return { url: req.url };
      },
      res(res) {
        return {
          statusCode: res.statusCode,
          ...pick(res.request, "method", "url", "path", "query"),
        };
      },
    },
  },
});

function init() {
  const openai = new OpenAI({ apiKey: OPENAI_API_KEY });

  function getCompletions(body) {
    return openai.chat.completions.create(omit(body, "stream"));
  }

  app.get("/test-api", function handler(_, reply) {
    reply.send({ success: true, message: "Congratulation! It's working" });
  });

  app.post("/", async function handler(request, reply) {
    try {
      const response = await getCompletions(request.body);

      return reply.send({ success: true, response });
    } catch (error) {
      reply
        .status(error.status || 500)
        .send(error.error ? error.error : { message: error.message });
    }
  });

  return app;
}

if (require.main === module) {
  init().listen({ port: 3000 }, (err) => {
    if (err) {
      app.log.error(err);
      process.exit(1);
    }
  });
} else {
  module.exports = init;
}
