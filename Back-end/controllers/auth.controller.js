const { validationResult } = require("express-validator/check");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../models/user.model");

exports.signup = (req, res, next) => {
   const errors = validationResult(req);
   if (!errors.isEmpty()) {
      const error = new Error("Validation failed.");
      error.statusCode = 422;
      error.data = errors.array();
      res.status(422).json(error);
      throw error;
   }
   const Email = req.body.Email;
   const TaiKhoan = req.body.TaiKhoan;
   const MatKhau = req.body.MatKhau;
   const SoDT = req.body.SoDT;
   const HoTen = req.body.HoTen;
   const MaNhom = req.body.MaNhom;

   bcrypt
      .hash(MatKhau, 12)
      .then(hashedPw => {
         const user = new User({
            Email: Email,
            MatKhau: hashedPw,
            TaiKhoan: TaiKhoan,
            SoDT: SoDT,
            HoTen: HoTen,
            MaNhom: MaNhom,
            MaLoaiNguoiDung: "KhachHang"
         });
         return user.save();
      })
      .then(result => {
         res.status(201).json({ statusCode: 200, userId: result._id });
      })
      .catch(err => {
         if (!err.statusCode) {
            err.statusCode = 500;
         }
         res.status(500).json(err);
         next(err);
      });
};

exports.login = (req, res, next) => {
   console.log(req.body);
   const TaiKhoan = req.body.TaiKhoan;
   const MatKhau = req.body.MatKhau;
   let loadedUser;

   User.findOne({ TaiKhoan: TaiKhoan })
      .then(user => {
         if (!user) {
            const error = new Error(
               "A user with this email could not be found."
            );
            error.statusCode = 401;
            res.status(500).json(error);
            throw error;
         }
         loadedUser = user;
         return bcrypt.compare(MatKhau, user.MatKhau);
      })
      .then(isEqual => {
         if (!isEqual) {
            const error = new Error("Wrong password!");
            error.statusCode = 401;
            res.status(500).json(error);
            throw error;
         }
         const token = jwt.sign(
            {
               TaiKhoan: loadedUser.TaiKhoan,
               userId: loadedUser._id.toString(),
               MaLoaiNguoiDung: loadedUser.MaLoaiNguoiDung
            },
            "somesupersecretsecret"
         );
         res.status(200).json({
            token: token,
            TaiKhoan: loadedUser.TaiKhoan,
            userId: loadedUser._id.toString(),
            MaLoaiNguoiDung: loadedUser.MaLoaiNguoiDung
         });
      })
      .catch(err => {
         if (!err.statusCode) {
            err.statusCode = 500;
         }
         res.status(500).json(err);
      });
};

exports.getListUser = async (req, res, next) => {
   try {
      const listuser = await User.find({});
      console.log(listuser);
      res.status(200).json({ listuser: listuser });
   } catch (err) {
      if (!err.statusCode) {
         err.statusCode = 500;
      }
      res.status(500).json(err);
   }
};

exports.updateProfile = async (req, res, next) => {
   try {
      const TaiKhoan = req.body.TaiKhoan;
      const SoDT = req.body.SoDT;
      const Email = req.body.Email;
      const HoTen = req.body.HoTen;
      const MaNhom = req.body.MaNhom;
      const MaLoaiNguoiDung = req.body.MaLoaiNguoiDung;
      const MatKhau = req.body.MatKhau;

      const data = {
         Email: Email,
         TaiKhoan: TaiKhoan,
         SoDT: SoDT,
         HoTen: HoTen,
         MaNhom: MaNhom,
         MaLoaiNguoiDung: MaLoaiNguoiDung,
         MatKhau: MatKhau
      };

      const user = await User.find({ TaiKhoan: TaiKhoan });

      await User.findByIdAndUpdate(user._id, data);

      res.status(200).json({ data: data });
   } catch (err) {
      if (!err.statusCode) {
         err.statusCode = 500;
      }
      res.status(500).json(err);
   }
};
exports.deleteUser = async (req, res, next) => {
   try {
      const TaiKhoan = req.body.TaiKhoan;
      const user = await User.find({ TaiKhoan: TaiKhoan });
      await User.findByIdAndRemove(user._id);
   } catch (err) {
      if (!err.statusCode) {
         err.statusCode = 500;
      }
      res.status(500).json(err);
   }
};
exports.insertuser = async (req, res, next) => {
   const errors = validationResult(req);
   if (!errors.isEmpty()) {
      const error = new Error("Validation failed.");
      error.statusCode = 422;
      error.data = errors.array();
      res.status(422).json(error);
      throw error;
   }
   const Email = req.body.Email;
   const TaiKhoan = req.body.TaiKhoan;
   const MatKhau = req.body.MatKhau;
   const SoDT = req.body.SoDT;
   const HoTen = req.body.HoTen;
   const MaNhom = req.body.MaNhom;
   const MaLoaiNguoiDung = req.body.MaLoaiNguoiDung;

   bcrypt
      .hash(MatKhau, 12)
      .then(hashedPw => {
         const user = new User({
            Email: Email,
            MatKhau: hashedPw,
            TaiKhoan: TaiKhoan,
            SoDT: SoDT,
            HoTen: HoTen,
            MaNhom: MaNhom,
            MaLoaiNguoiDung: MaLoaiNguoiDung
         });
         return user.save();
      })
      .then(result => {
         res.status(201).json({ statusCode: 200, userId: result._id });
      })
      .catch(err => {
         if (!err.statusCode) {
            err.statusCode = 500;
         }
         res.status(500).json(err);
         next(err);
      });
};
