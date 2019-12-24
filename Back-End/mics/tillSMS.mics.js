var request = require("request-json");
var url = require("url");

var TILL_URL = url.parse(process.env.TILL_URL);

var TILL_BASE = TILL_URL.protocol + "//" + TILL_URL.host;
var TILL_PATH = TILL_URL.pathname;

if (TILL_URL.query != null) {
  TILL_PATH += "?" + TILL_URL.query;
}
exports.sendSMS = (
  arrPhone = ["84983982933"],
  text = "Hello my customer !"
) => {
  request.createClient(TILL_BASE).post(
    TILL_PATH,
    {
      phone: arrPhone,
      text: text
    },
    function(err, res, body) {
      //You can do something
      return console.log(res.statusCode);
    }
  );
};
