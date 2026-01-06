
// import express from 'express';
// import cors from 'cors';
// import mongoose, { mongo } from 'mongoose';
// import router from './routers/studentsRouters.js';

// const app = express();
// app.use(express.json());
// app.use(cors());

// mongoose.connect("mongodb+srv://saisaraswathiganja_db_user:%40Saraswathi2006@cluster0.limrhmx.mongodb.net/").then(() => console.log("db connected"))
// .catch((error) => console.log(error));

// app.use('/', router);
// app.get('/users', (req, res) => {
//     console.log("hello this is");
//     res.send("hello this is from backend");
// })

// app.listen(7007, () => {
//     console.log("server running at port 7007")
// });
// index.js
import express from "express";
import userRoutes from "./routes/userRoutes.js";

const app = express();
app.use(express.json());

app.use("/api", userRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
