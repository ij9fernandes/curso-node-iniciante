const fs = require("fs");
const path = require("path");

fs.mkdir(path.join(__dirname, "./test"), (error) => {
  if (error) {
    return console.log("Erro: ", error);
  }

  console.log("Pasta Criada com sucesso!");
});

fs.writeFile(
  path.join(__dirname, "/test", "test.txt"),
  "hello node!",
  (error) => {
    if (error) {
      return console.log("Erro: ", error);
    }
    console.log("Arquivo criado com sucesso!");

    fs.appendFile(
      path.join(__dirname, "/test", "test.txt"),
      "hello world",
      (error) => {
        if (error) {
          return console.log("Erro: ", error);
        }

        console.log("Arquivo modificado com sucesso!");
      }
    );

    fs.readFile(
      path.join(__dirname, "/test", "test.txt"),
      "utf8",
      (error, data) => {
        if (error) {
          return console.log("Erro: ", error);
        }

        console.log(data);
      }
    );
  }
);
