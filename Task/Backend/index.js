const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Temporary data storage
let users = [];
let idCounter = 1;


app.post("/users", (req, res) => {
  const newUser = {
    id: idCounter++,
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    address: req.body.address
  };

  users.push(newUser);
  res.json({
    message: "User added successfully",
    user: newUser
  });
});


app.get("/users", (req, res) => {
  res.json(users);
});


app.put("/users/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  const index = users.findIndex(u => u.id === userId);

  if (index === -1) {
    return res.status(404).json({ message: "User not found" });
  }

  users[index] = {
    ...users[index],
    ...req.body
  };

  res.json({
    message: "User updated successfully",
    user: users[index]
  });
});


app.delete("/users/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  users = users.filter(u => u.id !== userId);

  res.json({
    message: "User deleted successfully"
  });
});


app.listen(5000, () => {
  console.log("Backend running on http://localhost:5000");
});