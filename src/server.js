const express = require("express");

const app = express();

app.use(express.json());

const bancoDeDados = {
  users: [
    {
      id: 1,
      nome: "Jose",
      profissao: "Instrutor",
    },
    {
      id: 2,
      nome: "Edu",
      profissao: "Developer",
    },
    {
      id: 3,
      nome: "Ricardo",
      profissao: "Estudante",
    },
    {
      id: 4,
      nome: "Filipe",
      profissao: "Músico",
    },
  ],
};

app.get("/users", (req, res) => {
  res.status(200).json(bancoDeDados.users);
});

app.get("/users/:id", (req, res) => {
  const usuario = bancoDeDados.users.find((user) => user.id == req.params.id);

  if (!usuario) {
    res.status(404).send({
      error: "Usuário não encontrado",
    });
  } else {
    res.status(200).send(usuario);
  }
});

app.post("/users", (req, res) => {
  const user = req.body;

  if (!user.nome || !user.profissao) {
    res.status(400).send({
      error: "Requisição inválida",
    });
    return;
  }

  bancoDeDados.users.push(user);
  res.status(201).json(user);
});

app.put("/users", (req, res) => {
  // configurar a rota para receber o parametro ID
  // buscar usuario pelo ID
  //  se não existir, retornar erro
  //  se existir, atualizar o usuario
  //  retornar o usuario atualizado
});

app.delete("/users/:id", (req, res) => {
  const id = req.params.id;
  const usuario = bancoDeDados.users.find((user) => user.id == id);

  if (!usuario) {
    res.status(404).send({
      error: "Usuário não encontrado",
    });
  }

  bancoDeDados.users = bancoDeDados.users.filter((user) => user.id != id);
  res.status(204).send();
});

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
