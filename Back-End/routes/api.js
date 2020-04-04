const express = require("express");

// const { check } = require("express-validator");

const router = express.Router();

const tour = require("../controllers/tour.controller");
const schedule = require("../controllers/schedule.controller");
const image = require("../controllers/image.controller");
const order = require("../controllers/order.controller");
const account = require("../controllers/account.controller");
const notification = require("../controllers/notification.controller");
const noticeTo = require("../controllers/noticeTo.controller");
const evaluate = require("../controllers/evaluate.controller");
const post = require("../controllers/post.controller");
const auth = require("../controllers/auth.controller");
const favorite = require("../controllers/favorite.controller");
const tag = require("../controllers/tag.controller");
const timeline = require("../controllers/timeline.controller");
const service = require("../controllers/service.controller");
const config = require("../controllers/config.controller");
//authencation
const authenticated = require("../middleware/auth.middleware");
//report
const report = require("../controllers/report.controller");

// for config
router.get("/config", config.read);
router.get("/configs", config.listAll);
router.post("/config", config.create);
router.put("/config", authenticated, config.update);
router.delete("/config", authenticated, config.delete);

//for tour
router.get("/tour", tour.read);
router.get("/tours", tour.listAll);
router.post("/tours/search", tour.listTourSearch);
router.post("/tour", authenticated, tour.create); //sẽ tạo luôn một schedule tương ứng với idTour mới tạo
router.patch("/tour", authenticated, tour.update);
router.patch("/tour/tags-and-services", authenticated, tour.putTagsAndServices);
router.delete("/tour", authenticated, tour.delete);

//for schedule
router.get("/schedule", schedule.read);
router.get("/schedules", schedule.listAll);
router.post("/schedule", authenticated, schedule.create);
router.patch("/schedule", authenticated, schedule.update);
router.delete("/schedule", authenticated, schedule.delete);

//for img
router.get("/imagesTour", image.listAllImageTour);
router.get("/imagesPost", image.listAllImagePost);
router.get("/imagesConfig", image.listAllImageConfig);
router.get("/image", image.listAllImageTourById);
router.delete("/image", authenticated, image.delete);
router.post("/image", image.create);
router.post("/avatar", image.avatar);
router.post("/upload", image.upload);

//for account
router.get("/account", authenticated, account.read);
router.get("/accountWithEmail", authenticated, account.readByEmail);

router.get("/accounts", authenticated, account.listAll);
router.post("/account", authenticated, account.create);
router.patch("/account", authenticated, account.update);
router.delete("/account", authenticated, account.delete);

//for payment
router.post("/getLinkPayment", order.getLinkPayment);
router.post("/resultPayment", order.resultPayment);
router.post("/cancelPayment", order.cancelPayment);
//for order`
router.get("/order", order.read);
router.get("/orderWithEmail", order.readByEmail);
router.get("/orders", order.listAll);
router.post("/order", order.create);
router.patch("/order", order.update);
router.delete("/order", authenticated, order.delete);

//favorites
router.get("/favoritesWithEmail", favorite.readByEmail);

//for authencation
router.post("/login", auth.login);
router.post("/register", auth.register);
router.get("/verify", auth.verify);
router.post("/forgotPasswordStep1", auth.forgotPasswordStep1);
router.post("/forgotPasswordStep2", auth.forgotPasswordStep2);

//for notification
router.get("/notification", authenticated, notification.read);
router.get("/notifications", authenticated, notification.listAll);
router.post(
  "/notifications/search",
  authenticated,
  notification.listNotificationSearch
);
router.post("/notification", authenticated, notification.create);
router.put("/notification", authenticated, notification.update);
router.delete("/notification", authenticated, notification.delete);

//for noticeTo
router.post("/noticeTo", authenticated, noticeTo.create);
router.put("/noticeTo", authenticated, noticeTo.update);
router.delete("/noticeTo", authenticated, noticeTo.delete);

//for evaluate
router.get("/evaluate", evaluate.read);
router.get("/evaluate/bytour", evaluate.readByIdTour);
router.post("/evaluate", authenticated, evaluate.create);
router.put("/evaluate", authenticated, evaluate.update);
router.delete("/evaluate", authenticated, evaluate.delete);

//for post
router.get("/post", post.read);
router.get("/posts", post.listAll);
router.post("/posts/search", post.listPostSearch);
router.post("/post", authenticated, post.create);
router.put("/post", authenticated, post.update);
router.put("/post/tags", authenticated, post.putTags);
router.delete("/post", authenticated, post.delete);

//report
router.get("/report", authenticated, report.getReport);
router.get(
  "/report-number-of-tourists",
  authenticated,
  report.getReportNumberOfTourists
);
router.get(
  "/report-number-people-follow-destination",
  authenticated,
  report.getReportNumberPeopleFollowDestination
);
router.get(
  "/report-revenue-follow-month",
  authenticated,
  report.getReportRevenueFollowMonthAll
);
router.get(
  "/report/destination-by-time",
  authenticated,
  report.getDestinationByTime
);

router.get("/report/destination-by-time", report.getDestinationByTime);

//for tag
router.get("/tag", authenticated, tag.read);
router.get("/tags", authenticated, tag.listAll);
router.post("/tag/search", authenticated, tag.listTagSearch);
router.post("/tag", authenticated, tag.create);
router.put("/tag", authenticated, tag.update);
router.delete("/tag", authenticated, tag.delete);

//for timeline
router.get("/timeline", timeline.read);
router.get("/timelines", authenticated, timeline.listAll);
router.post("/timeline/search", authenticated, timeline.listTimelineSearch);
router.post("/timeline", authenticated, timeline.create);
router.put("/timeline", authenticated, timeline.update);
router.delete("/timeline", authenticated, timeline.delete);

//for service
router.get("/service", service.read);
router.get("/services", authenticated, service.listAll);
router.post("/service/search", authenticated, service.listServiceSearch);
router.post("/service", authenticated, service.create);
router.put("/service", authenticated, service.update);
router.delete("/service", authenticated, service.delete);

module.exports = router;
