require("dotenv").config();

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const express = require("express");
const favicon = require("serve-favicon");
const hbs = require("hbs");
const mongoose = require("mongoose");
const logger = require("morgan");
const path = require("path");
const graphqlHTTP = require('express-graphql')

// modules required after generator

const http = require("https");
const oauth2lib = require("oauth20-provider");
const oauth2 = new oauth2lib({ log: { level: 2 } });
const passport = require("passport");
const express_graphql = require("express-graphql");
const { buildSchema } = require("graphql");
const schema = require('./graphql/schema')

require("./config/passport");

mongoose
  .connect(
    "mongodb://localhost/dexappapi",
    { useNewUrlParser: true }
  )
  .then(x => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });

const app_name = require("./package.json").name;
const debug = require("debug")(
  `${app_name}:${path.basename(__filename).split(".")[0]}`
);

const app = express();

// Oauth Setup

app.use(oauth2.inject());

// Middleware Setup
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Express View engine setup

app.use(
  require("node-sass-middleware")({
    src: path.join(__dirname, "public"),
    dest: path.join(__dirname, "public"),
    sourceMap: true
  })
);

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");
app.use(express.static(path.join(__dirname, "public")));
app.use(favicon(path.join(__dirname, "public", "images", "favicon.ico")));

// Config Body Parser

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.locals.title = "dejCom historical data display";

// graphql setup

app.use("/graphql",graphqlHTTP({
  schema,
  graphiql: true
})
);

// Route Setup

const index = require("./routes/index");
app.use("/", index);

const authRoutes = require("./routes/authRoutes");
app.use("/api", authRoutes);

const oAuthRoutes = require("./routes/oAuthRoutes");
app.use("/api", oAuthRoutes);

const dayRoutes = require("./routes/dayRoutes");
app.use("/api", dayRoutes);

const monthRoutes = require("./routes/monthRoutes");
app.use("/api", monthRoutes);

const yearRoutes = require("./routes/yearRoutes");
app.use("/api", yearRoutes);

module.exports = app;
