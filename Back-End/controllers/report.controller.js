const Report = require("../models/report.model");

exports.getReport = async (req, res, next) => {
  try {
    let listReport = await Report.getReport();

    // Custom listReport
    let report = [];
    for (let i = 0; i < listReport.length - 1; i++) {
      report.push(listReport[i][0]);
    }
    await Object.assign(...report);

    res.status(200).json(report[0]);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    res.status(500).json(err);
  }
};

exports.getReportNumberOfTourists = async (req, res, next) => {
  try {
    const listReport = await Report.getReportNumberOfTourists();

    // Custom listReport
    let report = [];
    for (let i = 0; i < listReport.length - 1; i++) {
      // length -1 là do object cuối là một vài thông số của mysql result
      report.push(listReport[i][0]);
    }
    await Object.assign(...report);

    res.status(200).json(report[0]);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    res.status(500).json(err);
  }
};

exports.getAverage = arr => {
  let numbersPeople = 0;
  let numbersYoung = 0;
  let numbersChildren = 0;
  let numbersBaby = 0;

  let avg = {};

  for (let i = 1; i < arr.length; i++) {
    numbersPeople += arr[i].numbersPeople;
    numbersYoung += arr[i].numbersYoung;
    numbersChildren += arr[i].numbersChildren;
    numbersBaby += arr[i].numbersBaby;
  }

  avg.numbersPeople = numbersPeople / (arr.length - 1);
  avg.numbersYoung = numbersYoung / (arr.length - 1);
  avg.numbersChildren = numbersChildren / (arr.length - 1);
  avg.numbersBaby = numbersBaby / (arr.length - 1);
  return avg;
};

exports.getReportNumberPeopleFollowDestination = async (req, res, next) => {
  try {
    // Lấy thông số của tour đầu tiên được tạo
    const years = await Report.getYearFirstNewTour();
    const yearOldest = await parseInt(years[0][0].dateOldest, 10);
    const yearLatest = await parseInt(years[1][0].dateLatest, 10);

    let arrYears = [];

    for (let i = yearOldest; i <= yearLatest; i++) {
      arrYears.push(i);
    }

    const listReport = await Report.getReportNumberPeopleFollowDestinationAll(
      yearOldest,
      yearLatest
    );

    let reports = [];
    for (let index = 0; index < arrYears.length; index++) {
      let report = [];

      let VietNam = [];
      let NorthernVietnam = [];
      let NorthCentral = [];
      let SouthCentralCoast = [];
      let CentralHighlands = [];
      let Southeast = [];
      let MekongRiverDelta = [];
      let Asian = [];
      let Europe = [];
      let America = [];

      NorthernVietnam = ["NorthernVietnam", ...listReport[0 + 8 * index]];
      for (let i = 1; i < NorthernVietnam.length; i++) {
        if (NorthernVietnam[i].numbersPeople === null)
          NorthernVietnam[i].numbersPeople = 0;
        if (NorthernVietnam[i].numbersYoung === null)
          NorthernVietnam[i].numbersYoung = 0;
        if (NorthernVietnam[i].numbersChildren === null)
          NorthernVietnam[i].numbersChildren = 0;
        if (NorthernVietnam[i].numbersBaby === null)
          NorthernVietnam[i].numbersBaby = 0;
      }
      NorthCentral = ["NorthCentral", ...listReport[1 + 8 * index]];
      for (let i = 1; i < NorthCentral.length; i++) {
        if (NorthCentral[i].numbersPeople === null)
          NorthCentral[i].numbersPeople = 0;
        if (NorthCentral[i].numbersYoung === null)
          NorthCentral[i].numbersYoung = 0;
        if (NorthCentral[i].numbersChildren === null)
          NorthCentral[i].numbersChildren = 0;
        if (NorthCentral[i].numbersBaby === null)
          NorthCentral[i].numbersBaby = 0;
      }
      SouthCentralCoast = ["SouthCentralCoast", ...listReport[2 + 8 * index]];
      for (let i = 1; i < SouthCentralCoast.length; i++) {
        if (SouthCentralCoast[i].numbersPeople === null)
          SouthCentralCoast[i].numbersPeople = 0;
        if (SouthCentralCoast[i].numbersYoung === null)
          SouthCentralCoast[i].numbersYoung = 0;
        if (SouthCentralCoast[i].numbersChildren === null)
          SouthCentralCoast[i].numbersChildren = 0;
        if (SouthCentralCoast[i].numbersBaby === null)
          SouthCentralCoast[i].numbersBaby = 0;
      }
      CentralHighlands = ["CentralHighlands", ...listReport[3 + 8 * index]];
      for (let i = 1; i < CentralHighlands.length; i++) {
        if (CentralHighlands[i].numbersPeople === null)
          CentralHighlands[i].numbersPeople = 0;
        if (CentralHighlands[i].numbersYoung === null)
          CentralHighlands[i].numbersYoung = 0;
        if (CentralHighlands[i].numbersChildren === null)
          CentralHighlands[i].numbersChildren = 0;
        if (CentralHighlands[i].numbersBaby === null)
          CentralHighlands[i].numbersBaby = 0;
      }
      Southeast = ["Southeast", ...listReport[4 + 8 * index]];
      for (let i = 1; i < Southeast.length; i++) {
        if (Southeast[i].numbersPeople === null) Southeast[i].numbersPeople = 0;
        if (Southeast[i].numbersYoung === null) Southeast[i].numbersYoung = 0;
        if (Southeast[i].numbersChildren === null)
          Southeast[i].numbersChildren = 0;
        if (Southeast[i].numbersBaby === null) Southeast[i].numbersBaby = 0;
      }
      MekongRiverDelta = ["MekongRiverDelta", ...listReport[5 + 8 * index]];
      for (let i = 1; i < MekongRiverDelta.length; i++) {
        if (MekongRiverDelta[i].numbersPeople === null)
          MekongRiverDelta[i].numbersPeople = 0;
        if (MekongRiverDelta[i].numbersYoung === null)
          MekongRiverDelta[i].numbersYoung = 0;
        if (MekongRiverDelta[i].numbersChildren === null)
          MekongRiverDelta[i].numbersChildren = 0;
        if (MekongRiverDelta[i].numbersBaby === null)
          MekongRiverDelta[i].numbersBaby = 0;
      }
      VietNam = [
        "VietNam",
        NorthernVietnam,
        NorthCentral,
        SouthCentralCoast,
        CentralHighlands,
        Southeast,
        MekongRiverDelta
      ];
      // Tính sum của VietNam
      let VietNamSum = ["VietNamSum"];
      for (let i = 1; i < 13; i++) {
        //Chạy từ 1 bởi vì phần tử đầu tiên là tên ý nghĩa của mảng
        let sum = {
          numbersPeople: 0,
          numbersYoung: 0,
          numbersChildren: 0,
          numbersBaby: 0
        };
        for (let j = 1; j < VietNam.length; j++) {
          //Chạy từ 1 bởi vì phần tử đầu tiên là tên ý nghĩa của mảng
          sum.numbersPeople += VietNam[j][i].numbersPeople;
          sum.numbersYoung += VietNam[j][i].numbersYoung;
          sum.numbersChildren += VietNam[j][i].numbersChildren;
          sum.numbersBaby += VietNam[j][i].numbersBaby;
        }
        VietNamSum.push(sum);
      }
      VietNam.push(VietNamSum);

      Asian = ["Asian", ...listReport[6 + 8 * index]];
      for (let i = 1; i < Asian.length; i++) {
        if (Asian[i].numbersPeople === null) Asian[i].numbersPeople = 0;
        if (Asian[i].numbersYoung === null) Asian[i].numbersYoung = 0;
        if (Asian[i].numbersChildren === null) Asian[i].numbersChildren = 0;
        if (Asian[i].numbersBaby === null) Asian[i].numbersBaby = 0;
      }
      Europe = ["Europe", ...listReport[7 + 8 * index]];
      for (let i = 1; i < Europe.length; i++) {
        if (Europe[i].numbersPeople === null) Europe[i].numbersPeople = 0;
        if (Europe[i].numbersYoung === null) Europe[i].numbersYoung = 0;
        if (Europe[i].numbersChildren === null) Europe[i].numbersChildren = 0;
        if (Europe[i].numbersBaby === null) Europe[i].numbersBaby = 0;
      }
      America = ["America", ...listReport[8 + 8 * index]];
      for (let i = 1; i < America.length; i++) {
        if (America[i].numbersPeople === null) America[i].numbersPeople = 0;
        if (America[i].numbersYoung === null) America[i].numbersYoung = 0;
        if (America[i].numbersChildren === null) America[i].numbersChildren = 0;
        if (America[i].numbersBaby === null) America[i].numbersBaby = 0;
      }
      report.push(arrYears[index], VietNam, Asian, Europe, America);

      // Tính sum của VietNam
      let allSum = ["AllSum"];
      for (let i = 1; i < 13; i++) {
        //Chạy từ 1 bởi vì phần tử đầu tiên là tên ý nghĩa của mảng
        let sum = {
          numbersPeople: 0,
          numbersYoung: 0,
          numbersChildren: 0,
          numbersBaby: 0
        };
        for (let j = 1; j < report.length; j++) {
          if (j === 1) {
            sum.numbersPeople +=
              report[j][report[j].length - 1][i].numbersPeople;
            sum.numbersYoung += report[j][report[j].length - 1][i].numbersYoung;
            sum.numbersChildren +=
              report[j][report[j].length - 1][i].numbersChildren;
            sum.numbersBaby += report[j][report[j].length - 1][i].numbersBaby;
          } else {
            //Chạy từ 1 bởi vì phần tử đầu tiên là tên ý nghĩa của mảng
            sum.numbersPeople += report[j][i].numbersPeople;
            sum.numbersYoung += report[j][i].numbersYoung;
            sum.numbersChildren += report[j][i].numbersChildren;
            sum.numbersBaby += report[j][i].numbersBaby;
          }
        }
        allSum.push(sum);
      }
      report.push(allSum);
      reports.push(report);
    }
    res.status(200).json(reports);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    res.status(500).json(err);
  }
};

exports.getReportRevenueFollowMonthAll = async (req, res, next) => {
  try {
    // Lấy thông số của tour đầu tiên được tạo
    const years = await Report.getYearFirstNewOrder();
    const yearOldest = await parseInt(years[0][0].dateOldest, 10);
    const yearLatest = await parseInt(years[1][0].dateLatest, 10);

    let arrYears = [];

    for (let i = yearOldest; i <= yearLatest; i++) {
      arrYears.push(i);
    }
    let listReport = await Report.getReportRevenueFollowMonthAll(
      yearOldest,
      yearLatest
    );

    let report = [];

    for (let index = 0; index < arrYears.length; index++) {
      let arrTotalMonth = [];
      for (let j = 0; j < listReport[index].length; j++) {
        if (listReport[index][j].totalMonth === null)
          listReport[index][j].totalMonth = 0;
        arrTotalMonth.push(listReport[index][j].totalMonth);
      }
      report.push([arrYears[index], { totalMonth: arrTotalMonth }]);
    }
    res.status(200).json(report);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    res.status(500).json(err);
  }
};

exports.getDestinationByTime = async (req, res, next) => {
  try {
    const { month } = req.query;
    let listReport = await Report.getDestinationByTime(month);
    res.status(200).json(listReport);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    res.status(500).json(err);
  }
};
