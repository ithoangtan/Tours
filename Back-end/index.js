const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
var cors = require("cors");
const app = express();

// settings
app.set("port", process.env.PORT || 8000);

// app.use(express.static("public"));
app.use(express.static(path.join(__dirname, "public")));

app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

if (process.env.NODE_ENV === "production") {
  app.use(
    cors({ origin: "http://frontend-dev22.us-west-2.elasticbeanstalk.com" })
  );
} else {
  app.use(cors({ origin: "http://localhost:9000" }));
}

app.use("/", require("./routes/api"));

app.listen(app.get("port"), function() {
  console.log(`server on port ${app.get("port")}`);
});

//Test upload img
app.get("/load", function(req, res) {
  res.sendFile(__dirname + "\\index.html");
});
