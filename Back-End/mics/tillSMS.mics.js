var request = require("request-json");
var url = require("url");

var TILL_URL = url.parse(process.env.TILL_URL);
//is url: username="https://platform.tillmobile.com/addon/heroku/dashboard/"&api_key="https://platform.tillmobile.com/addon/heroku/dashboard/"
var TILL_BASE = TILL_URL.protocol + "//" + TILL_URL.host;
var TILL_PATH = TILL_URL.pathname;

if (TILL_URL.query != null) {
  TILL_PATH += "?" + TILL_URL.query;
}

request.createClient(TILL_BASE).post(
  TILL_PATH,
  {
    phone: ["84983982933", "84376687806"],
    text: "Hello Heroku!"
  },
  function(err, res, body) {
    return console.log(res.statusCode);
  }
);
