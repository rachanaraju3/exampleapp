const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const auth = require("./src/auth");
const users = require("./src/users");
const categories = require("./src/categories");
const posts = require("./src/posts");
const multer = require("multer");
const path = require("path");

dotenv.config();
app.use(express.json())
app.use("/images", express.static(path.join(__dirname, "/images")));

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(console.log("MongoDB Connected"))
.catch((err) => console.log(err));

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "images");
    },
    filename: (req, file, cb) => {
        cb(null, req.body.name);
    },
});

const upload = multer({ storage: storage });
app.post("/upload", upload.single("file"), (req, res) => {
    res.status(200).json("file uploaded");
});

app.use("/auth", auth);
app.use("/users", users);
app.use("/categories", categories);
app.use("/posts", posts);

app.use("/", (req, res) =>
{
    console.log("this is the home")
})
app.listen("3001", () => {
    console.log("Backend is running.");
});

