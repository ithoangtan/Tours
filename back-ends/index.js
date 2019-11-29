const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
var cors = require("cors");
const app = express();

// settings
app.set("port", process.env.PORT || 8000);
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

if (process.env.NODE_ENV === "production") {
  app.use(
    cors({ origin: "http://frontend-dev22.us-west-2.elasticbeanstalk.com" })
  );
} else {
  app.use(
    cors({
      origin: ["http://localhost:9000", "http://localhost:9999"],
      default: "http://localhost:9999"
    })
  );
}

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, Content-Language, Accept-Language, Last-Event-ID"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, HEAD, GET, POST, PUT, PATCH, DELETE"
  );
  next();
});

app.use((error, req, res, next) => {
  const status = error.statusCode || 500;
  const message = error.message;
  const data = error.data;
  res.status(status).json({ message: message, data: data });
  next();
});

app.use("/", require("./routes/api"));

app.listen(app.get("port"), function() {
  console.log(`server on port ${app.get("port")}`);
});

//Test upload img
app.get("/load", function(req, res) {
  res.sendFile(__dirname + "\\index.html");
});
