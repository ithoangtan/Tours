const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const filmSchema = new Schema({
  MaPhim:{
    type: String,
  },
  TenPhim: {
    type: String,
  },
  Trailer: {
    type: String
  },
  HinhAnh: {
    type: String,
  },
  MoTa: {
    type: String,
  },
  NgayKhoiChieu: {
    type: String,
  },
  DanhGia:{
    type: String,
  },
  MaNhom:{
    type: Number,
  },
  hidden:{ type: Boolean, default: false },
  datecreate: { type: Date, default: Date.now },
  dateedit: { type: Date }
});

module.exports = mongoose.model('Film', filmSchema);
