const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());

const USERS = [];
let ids = 0;

const generateIds = (req, res, next) => {
  const newUser = req.body;
  newUser["id"] = ids;
  ids++;
  USERS.push(newUser);
  next();
};

app.use(generateIds);

const port = 3031;

const createNewUser = (req, res) => {
  console.log("users", USERS);
  res.status(200).send("account created successfully");
};

const getAllUsers = (req, res) => {
  res.status(200).json(USERS);
};

const showData = (req, res) => {
  res.send("showing hello world data");
};

app.post("/signUp", createNewUser);

app.get("/data", getAllUsers);


app.listen(port, () => {
  console.log("server is listing on port ", port);
});
