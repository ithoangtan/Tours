const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Type = Object.freeze({
  QuanTri: 'QuanTri',
  KhachHang: 'KhachHang'
})

const userSchema = new Schema({
  TaiKhoan: {
    type: String,
    required: true,
    unique: true,
  },
  MatKhau: {
    type: String,
    required: true
  },
  Email: {
    type: String
  },
  SoDT: {
    type: String,
    required: true
  },
  HoTen: {
    type: String,
  },
  MaNhom: {
    type: String,
  },
  MaLoaiNguoiDung: {
    type: String,
    enum: Object.values(Type),
  },
  hidden:{ type: Boolean, default: false },
  datecreate: { type: Date, default: Date.now },
  dateedit: { type: Date }
});
Object.assign(userSchema.statics, {
  Type,
})
module.exports = mongoose.model('User', userSchema);
