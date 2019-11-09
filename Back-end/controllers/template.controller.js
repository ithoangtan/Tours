const Film = require("../models/template.model");

exports.createfilm = async (req, res, next) => {
   try {
      const MaPhim = req.body.MaPhim;
      const TenPhim = req.body.TenPhim;
      const Trailer = req.body.Trailer;
      const HinhAnh = req.body.HinhAnh;
      const DanhGia = req.body.DanhGia;
      const MoTa = req.body.MoTa;
      const NgayKhoiChieu = req.body.NgayKhoiChieu;
      const MaNhom = req.body.MaNhom;

      const data = new Film({
         MaPhim: MaPhim,
         TenPhim: TenPhim,
         Trailer: Trailer,
         HinhAnh: HinhAnh,
         DanhGia: DanhGia,
         MoTa: MoTa,
         NgayKhoiChieu: NgayKhoiChieu,
         MaNhom: MaNhom
      });

      await data.save();

      res.status(200).json({ data: data });
   } catch (err) {
      if (!err.statusCode) {
         err.statusCode = 500;
      }
      res.status(500).json(err);
   }
};
exports.getFilm = async (req, res, next) => {
   try {
      const MaPhim = req.params.MaPhim;
      const infofilm = await Film.find({ MaPhim: MaPhim });
      res.status(200).json({ data: infofilm });
   } catch (err) {
      if (!err.statusCode) {
         err.statusCode = 500;
      }
      res.status(500).json(err);
   }
};
exports.getListFilm = async (req, res, next) => {
   try {
      const Loai = res.params.loai;

      const listfilm = await Film.find({ Loai: Loai });
      res.status(200).json({ data: listfilm });
   } catch (err) {
      if (!err.statusCode) {
         err.statusCode = 500;
      }
      res.status(500).json(err);
   }
};
exports.editFilm = async (req, res, next) => {
   try {
      const MaPhim = req.body.MaPhim;
      const TenPhim = req.body.TenPhim;
      const Trailer = req.body.Trailer;
      const HinhAnh = req.body.HinhAnh;
      const MoTa = req.body.MoTa;
      const NgayKhoiChieu = req.body.NgayKhoiChieu;
      const DanhGia = req.body.DanhGia;
      const MaNhom = req.body.MaNhom;

      const data = {
         TenPhim: TenPhim,
         Trailer: Trailer,
         HinhAnh: HinhAnh,
         MoTa: MoTa,
         NgayKhoiChieu: NgayKhoiChieu,
         DanhGia: DanhGia,
         MaNhom: MaNhom
      };

      const film = await Film.find({ MaPhim: MaPhim });
      await Film.findByIdAndUpdate(film._id, data);

      res.status(200).json({ data: data });
   } catch (err) {
      if (!err.statusCode) {
         err.statusCode = 500;
      }
      res.status(500).json(err);
   }
};
exports.deleteFilm = async (req, res, next) => {
   try {
      const MaPhim = req.body.MaPhim;
      const film = await Film.find({ MaPhim: MaPhim });
      await Film.findByIdAndRemove(film._id);
   } catch (err) {
      if (!err.statusCode) {
         err.statusCode = 500;
      }
      res.status(500).json(err);
   }
};
