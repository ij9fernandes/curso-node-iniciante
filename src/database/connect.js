const mongoose = require("mongoose");

const connectToDatabase = async () => {
  await mongoose.connect(
    `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.lyd3z.mongodb.net/database?retryWrites=true&w=majority`,
    (error) => {
      if (error) {
        return console.log("Ocorreu um erro ao conectar com o DB: ", error);
      }

      return console.log("Conexão com DB realizada com Sucesso! ");
    }
  );
};

module.exports = connectToDatabase;
