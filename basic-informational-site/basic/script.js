const http = require("http");
const fs = require("fs");

const hostname = "localhost";
const port = 8080;

function serveErrorPage(res) {
  fs.readFile("./pages/404.html", "utf-8", (err, data) => {
    if (!err) {
      res.statusCode = 404;
      res.end(data);
    }
  });
}

function serveStaticPage(data, res) {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end(data);
}

const server = http.createServer((req, res) => {
  const pathname = req.url;
  let html = "404";

  if (pathname == "/") {
    html = "./pages/index.html";
  } else if (pathname !== "/index") {
    html = `./pages${pathname}.html`;
  }

  fs.readFile(html, "utf-8", (err, data) => {
    if (err) {
      serveErrorPage(res);
    } else {
      serveStaticPage(data, res);
    }
  });
});

server.listen(port, hostname, () => {
	console.log(`App running on port ${port}.`);
});
