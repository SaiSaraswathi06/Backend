// controllers/userController.js
let users = [];

// GET → check endpoint
export const getUsers = (req, res) => {
  res.status(200).json(users);
};

// POST → add data
export const addUser = (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({ message: "Name and email required" });
  }

  const newUser = {
    id: users.length + 1,
    name,
    email,
  };

  users.push(newUser);
  res.status(201).json(newUser);
};

// PUT → update data
export const updateUser = (req, res) => {
  const id = parseInt(req.params.id);
  const { name, email } = req.body;

  const user = users.find(u => u.id === id);
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  user.name = name || user.name;
  user.email = email || user.email;

  res.status(200).json(user);
};

// DELETE → remove data
export const deleteUser = (req, res) => {
  const id = parseInt(req.params.id);
  const index = users.findIndex(u => u.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "User not found" });
  }

  const deletedUser = users[index];
  users.splice(index, 1);

  res.status(200).json({ message: "User deleted", deletedUser });
};
