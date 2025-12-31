const port = Number(process.env.PORT) || 3000;

const server = Bun.serve({
  port,
  async fetch(req) {
    return new Response("Hello World!");
  },
});

console.log(`Listening on http://localhost:${server.port}`);
