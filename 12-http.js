const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our page");
    return;
  }
  if (req.url === "/about") {
    res.end("Welcome to about");
    return;
  } else {
    res.end(`
        <h1>Ooops!</h1>
        <p> Page not found </p>
        <a href='/'>back home<a>
    `);
  }
});

server.listen(5050);
