// Requiring dependencies
const express = require("express");
const cors = require("cors");
const passport = require("passport");
const bodyParser = require('body-parser');

// Requiring database
const db = require("./config/mongoose");

// Initializing port
const port = process.env.PORT || 8000;

// Initializing app
const app = express();

// Initializing CORS options
const corsOptions = {
  origin: "http://localhost:3000", // Replace with the origin of your React application
};

// Enabling CORS middleware
app.use(cors(corsOptions));

//including bodyparser 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport strategies
const passportJWT = require("./config/passport-jwt-strategy");
app.use(passport.initialize());

// Using router (should always be defined after session middleware)
app.use("/", require("./routes"));

// Firing up server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
