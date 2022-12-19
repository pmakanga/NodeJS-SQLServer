// import express, and cors modules
// Express is for building the Rest apis
// cors provides Express middleware to enable CORS with various options.
const express = require("express");
const cors = require("cors");

// create an Express app, then add body-parser (json and urlencoded) and cors
// middlewares using app.use() method. Notice that we set origin: http://localhost:8081
const app = express();

var corsOptions = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

//parse request of content-type - application/json
app.use(express.urlencoded({ extended: true }));

const db = require("./app/models");

db.sequelize.sync();

// In development, you may need to drop existing tables and re-sync database. 
// Just use force: true as following code:
// db.sequelize.sync({ force: true }).then(() => {
//     console.log("Drop and re-sync db.");
// });

// simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to bezkoder application." });
  });
  

// Include routes
require("./app/routes/tutorial.routes")(app);
// set port, listen for incoming requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}.`);
});
