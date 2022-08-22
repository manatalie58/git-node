const express = require("express");
const path = require("path");
const app = express();
const homeController = require("./controllers/home.js");
app.set("view engine", "pug");
app.set("views", path.resolve(__dirname, "views"));

app.get("/", homeController);

app.listen(5555, () => {
    console.log("Success Connection");
    console.log("New Feature 2");
    console.log("New Feature 3");
    console.log("New Feature 4");
    console.log("New Feature 5");
    console.log("New Feature 6");
});
