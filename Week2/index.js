const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());

const USERS = [];
let ids = 0;

const checkIfUserAlreadyExists = (req, res, next) => {
  const email = req.body.email;
  const user = USERS.filter((user) => user.email === email);
  if (user.length > 0) {
    res.status(200).send("User already exists");
    return;
  }
  next();
};

const port = 3031;

const createNewUser = (req, res) => {
  const newUser = req.body;
  newUser["id"] = ids;
  ids++;
  USERS.push(newUser);
  res.status(200).send("account created successfully");
};

const getAllUsers = (req, res) => {
  res.status(200).json(USERS);
};

const loginUser = (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const user = USERS.filter(
    (user) => user.email === email && user.password === password
  );
  if (user.length > 0) {
    res.status(200).json({ token: Date.now() });
    return;
  } else {
    res.status(200).send("User not found");
  }
};

app.post("/signUp", checkIfUserAlreadyExists, createNewUser);

app.get("/data", getAllUsers);

app.get("/login", loginUser);

app.listen(port, () => {
  console.log("server is listing on port ", port);
});
