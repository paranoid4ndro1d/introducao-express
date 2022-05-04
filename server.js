const express = require("express");
const app = express();
const port = 3000;

// * http://localhost:3000/
app.get("/", (request, response) => {
  console.log(request);
  response.send("Batatinha 123");
});
// * http://localhost:3000/ola
app.get("/ola", (request, response) => {
  response.send("Ola Mundo!");
});
app.post("/frutas", (request, response) => {
  response.send("Frutas");
});
// * localhost
// * 127.0.0.1
app.listen(port, () => {
  console.log("Nosso servidor está rodando na porta " + port);
});