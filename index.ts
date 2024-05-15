import express from "express";
import {
  saveAuthor,
  allAuthors,
  getAuthorById,
  getMonographyById,
  allMonographs,
  saveMonography,
} from "./routes/userService";
const router = express.Router();
import cors from "cors";
//import cors = require("cors");
//const usersRouter = require("./routes/users");
const app = express();
app.use(cors());
app.use(express.json());
//const path = require("path");
const port = 3000;
//app.use(express.static("public"));
app.use(router);

//app.use("/", express.static("public"));
//router.get("/first", (req, res) => {
//  res.sendFile(path.join(__dirname + "/public/index.html"));
//  res.send("Hello World2");
//});

router.get("/", (req, res) => {
  res.send("SI");
});
router.get("/authors", allAuthors);
router.get("/authors/:id", getAuthorById);
router.post("/authors", saveAuthor);

router.get("/monographs", allMonographs);
router.get("/monographs/:id", getMonographyById);
router.post("/monographs", saveMonography);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
