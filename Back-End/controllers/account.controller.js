const { check, validationResult } = require("express-validator");

const Account = require("../models/account.model");

exports.listAll = async (req, res, next) => {
  try {
    listAccount = await Account.getAll();
    res.status(200).json(listAccount);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    res.status(500).json(err);
  }
};

exports.read = async (req, res, next) => {
  try {
    account = await Account.getById();
    res.status(200).json(account);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    res.status(500).json(err);
  }
};

exports.create = async (req, res, next) => {
  try {
    const newAccount = new Account(req.body);
    resultCreate = await Account.create(newAccount);
    res.status(200).json(resultCreate);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    res.status(500).json(err);
  }
};

exports.update = async (req, res, next) => {
  try {
    const updateAccount = new Account(req.body);
    updateResult = await Account.updateById(updateAccount);
    res.status(200).json(updateResult);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    res.status(500).json(err);
  }
};

exports.delete = async (req, res, next) => {
  try {
    deleteResult = await Account.remove(req.query.idAccount);
    res.status(200).json(deleteResult);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    res.status(500).json(err);
  }
};

// exports.updateProfile = async (req, res, next) => {
//   try {
//     const TaiKhoan = req.body.TaiKhoan;
//     const SoDT = req.body.SoDT;
//     const Email = req.body.Email;
//     const HoTen = req.body.HoTen;
//     const MaNhom = req.body.MaNhom;
//     const MaLoaiNguoiDung = req.body.MaLoaiNguoiDung;
//     const MatKhau = req.body.MatKhau;

//     const data = {
//       Email: Email,
//       TaiKhoan: TaiKhoan,
//       SoDT: SoDT,
//       HoTen: HoTen,
//       MaNhom: MaNhom,
//       MaLoaiNguoiDung: MaLoaiNguoiDung,
//       MatKhau: MatKhau
//     };

//     const user = await User.find({ TaiKhoan: TaiKhoan });

//     await User.findByIdAndUpdate(user._id, data);

//     res.status(200).json({ data: data });
//   } catch (err) {
//     if (!err.statusCode) {
//       err.statusCode = 500;
//     }
//     res.status(500).json(err);
//   }
// };
// exports.deleteUser = async (req, res, next) => {
//   try {
//     const TaiKhoan = req.body.TaiKhoan;
//     const user = await User.find({ TaiKhoan: TaiKhoan });
//     await User.findByIdAndRemove(user._id);
//   } catch (err) {
//     if (!err.statusCode) {
//       err.statusCode = 500;
//     }
//     res.status(500).json(err);
//   }
// };
// exports.insertuser = async (req, res, next) => {
//   const err = validationResult(req);
//   if (!err.isEmpty()) {
//     const error = new Error("Validation failed.");
//     error.statusCode = 422;
//     error.data = err.array();
//     res.status(422).json(error);
//     throw error;
//   }
//   const Email = req.body.Email;
//   const TaiKhoan = req.body.TaiKhoan;
//   const MatKhau = req.body.MatKhau;
//   const SoDT = req.body.SoDT;
//   const HoTen = req.body.HoTen;
//   const MaNhom = req.body.MaNhom;
//   const MaLoaiNguoiDung = req.body.MaLoaiNguoiDung;

//   bcrypt
//     .hash(MatKhau, saltRounds)
//     .then(hashedPw => {
//       const user = new User({
//         Email: Email,
//         MatKhau: hashedPw,
//         TaiKhoan: TaiKhoan,
//         SoDT: SoDT,
//         HoTen: HoTen,
//         MaNhom: MaNhom,
//         MaLoaiNguoiDung: MaLoaiNguoiDung
//       });
//       return user.save();
//     })
//     .then(result => {
//       res.status(201).json({ statusCode: 200, userId: result._id });
//     })
//     .catch(err => {
//       if (!err.statusCode) {
//         err.statusCode = 500;
//       }
//       res.status(500).json(err);
//       next(err);
//     });
// };
