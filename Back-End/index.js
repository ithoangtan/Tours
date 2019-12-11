const express = require("express");
const bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
const path = require("path");
var cors = require("cors");
const app = express();

// settings
app.set("port", process.env.PORT || 8000);
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser("ithoangtansecurity"));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, Content-Language, Accept-Language, Last-Event-ID, X-Requested-With"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, HEAD, GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("credentials", true); // required to pass);

  next();
});

app.use((error, req, res, next) => {
  const status = error.statusCode || 500;
  const message = error.message;
  const data = error.data;
  res.status(status).json({ message: message, data: data });
  next();
});

const corsOptions = {
  origin: ["http://localhost:9000", "http://localhost:9999"], // reqexp will match all prefixes
  default: "http://localhost:9999",
  methods: "GET,HEAD,POST,PATCH,DELETE,OPTIONS",
  credentials: true // required to pass
  // allowedHeaders:
  // "Content-Type, Authorization, Content-Language, Accept-Language, Last-Event-ID, X-Requested-With"
};

if (process.env.NODE_ENV === "production") {
  app.use(
    cors({ origin: "http://frontend-dev22.us-west-2.elasticbeanstalk.com" })
  );
} else {
  app.use(cors(corsOptions));
}

app.use("/", require("./routes/api"));

app.listen(app.get("port"), function() {
  console.log(`server on port ${app.get("port")}`);
});

//Test upload img
app.get("/load", function(req, res) {
  res.sendFile(__dirname + "\\index.html");
});