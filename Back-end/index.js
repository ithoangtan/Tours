const express = require("express");
const bodyParser = require("body-parser");
const path = require('path');
var cors = require("cors");
const app = express();


// settings
app.set('port', process.env.PORT || 8000);

// app.use(express.static("public"));
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



if (process.env.NODE_ENV === "production") {
  app.use(
    cors({ origin: "http://frontend-dev22.us-west-2.elasticbeanstalk.com" })
  );
} else {
  app.use(cors({ origin: "https://localhost:3000" }));
}

app.use("/", require("./routes/api"));

app.listen(app.get('port'), function() {
  console.log(`server on port ${app.get('port')}`);
});


// 
// 
// 
// 
//Upload image with multer
var multer = require('multer');


var Storage = multer.diskStorage({
  destination: function(req, file, callback) {
      callback(null, "../Images");
  },
  filename: function(req, file, callback) {
      callback(null, file.fieldname + "_" + Date.now() + "_" + file.originalname);
  }
});

var upload = multer({
  storage: Storage
}).array("imgUploader", 3); //Field name and max count


app.get("/load", function(req, res) {
  res.sendFile(__dirname + "\\index.html");
});

app.post("/api/Upload", function(req, res) {
  upload(req, res, function(err) {
      if (err) {
          return res.end("Something went wrong!", err);
      }
      return res.end("File uploaded sucessfully!.");
  });
});