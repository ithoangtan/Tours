const express = require('express');
const { body } = require('express-validator/check');
const multer = require('multer');

const User = require('../models/user');
const authController = require('../controllers/auth');

const router = express();

const isAuth = require('../middleware/is-auth')

const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './images');
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '-' + Date.now() + file.originalname);
  }
});

const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === 'image/png' ||
    file.mimetype === 'image/jpg' ||
    file.mimetype === 'image/jpeg'
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer(
  { storage: fileStorage, 
    limits: {
      fileSize: 1024*1024*5
    }, 
    fileFilter: fileFilter 
  })
// const upload = multer({dest: 'images/'})
router.post(
  '/ThemNguoiDung', upload.single('avatar'),
  [
   
  ],
  authController.signup,
  
)
router.post(
  '/ThemAdmin', upload.single('avatar'),
  [
   
  ],
  authController.insertuser,
  
)
router.post('/DangNhap',upload.single('avatar'),
  [
  ], 
  authController.login,
);

router.get('/LayDanhSachLoaiNguoiDung',
  [
  ], 
  authController.getListUser,
);

router.post('/CapNhatThongTin',upload.single('avatar'),
  [
  ], 
  authController.updateProfile,
);
router.delete(
  '/XoaNguoiDung/:TaiKhoan',
  isAuth,
  authController.deleteUser
)

module.exports = router;
