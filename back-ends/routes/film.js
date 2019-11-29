const express = require('express')
const { body } = require('express-validator/check')
const multer = require('multer');

const filmController = require('../controllers/film')

const router = express.Router()

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
router.post(
    '/ThemPhimMoi',
    isAuth,
    [
       
    ],
    filmController.createfilm
)

router.get(
    '/LayDanhSachPhim/:MaNhom',
    filmController.getListFilm
)

router.get(
  '/LayChiTietPhim/:MaPhim',
  isAuth,
  filmController.getFilm
)

router.post(
    '/CapNhatPhim',upload.single('avatar'),
    isAuth,
    filmController.editFilm
)
router.delete(
  '/XoaPhim/:MaPhim',
  isAuth,
  filmController.deleteFilm
)
module.exports = router;