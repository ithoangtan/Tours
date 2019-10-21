const express = require("express");
const bodyParser = require("body-parser");
var cors = require("cors");
const app = express();

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

if (process.env.NODE_ENV === "production") {
  app.use(
    cors({ origin: "http://frontend-dev22.us-west-2.elasticbeanstalk.com" })
  );
} else {
  app.use(cors({ origin: "https://localhost:3000" }));
}

app.use("/", require("./routes/api"));

app.listen(process.env.port || 8080, function() {
  console.info("ithoangtan", "back end server port 8080");
});
