import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import noteRoutes from './src/routes/note.js'


dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

const corsOptions = {
  origin: "http://localhost:3000", // for vite application
  optionsSuccessStatus: 200,
};

//middleware
app.use(cors(corsOptions));
app.use(express.json());

// api routes
 app.use("/notes", noteRoutes);

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});