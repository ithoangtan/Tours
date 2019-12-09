const { validationResult } = require("express-validator/check");

const bcrypt = require("bcryptjs"); //hash password
const saltRounds = 10;
const jwt = require("jsonwebtoken");

const Accounts = require("../models/account.model");

exports.register = (req, res, next) => {
  const err = validationResult(req);
  if (!err.isEmpty()) {
    const err = new Error("Validation failed!!!");
    err.data = err.array();
    err.statusCode = 422;
    res.status(422).json(err);
    throw err;
  }

  let account = new Accounts(req.body);
  //Quét xem email đã tồn tại không
  //Nếu có thì thông báo email này đã được đăng ký
  //Nếu không có thì tiến hành đăng ký
  // Tiếp theo là quét xem đơn hàng có phone or email nào trùng không,
  //nếu có thì cập nhật idAccount này cho Order đó
  bcrypt
    .hash(account.password, saltRounds)
    .then(passwordHash => {
      account.password = passwordHash;
      return Accounts.create(account);
    })
    .then(result => {
      res.status(201).json({
        statusCode: 200,
        userId: result.idAccount
      });
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
  const email = req.body.email;
  const password = req.body.password;
  const role = req.body.role;
  let loadAccount;

  Accounts.getByEmailAndRole(email, role)
    .then(account => {
      if (!account) {
        const error = new Error();
        error.statusCode = 200;
        error.message = "User of this email could not found!!!";
        res.status(200).json(error);
        throw error;
      }
      loadAccount = account;
      return bcrypt.compare(password, account.password);
    })
    .then(isEqual => {
      if (!isEqual) {
        const error = new Error();
        error.statusCode = 200;
        error.message = "Wrong password!";
        res.status(200).json(error);
        throw error;
      }
      const token = jwt.sign(
        {
          idAccount: loadAccount.idAccount,
          email: loadAccount.email,
          role: loadAccount.role
        },
        "ithoangtansecurity"
      );

      let options = {
        maxAge: 60 * 60 * 24, // would expire after 24h
        httpOnly: true, // The cookie only accessible by the web server
        signed: true // Indicates if the cookie should be signed
      };

      // no: set a new cookie
      res
        .cookie("token", token, options) // options is optional
        .json({
          token: token,
          name: loadAccount.name,
          role: loadAccount.role,
          avatar: loadAccount.avatar
        })
        .status(200);
    })
    .catch(err => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      res.status(500).json(err);
      next(err);
    });
};

exports.loginByFacebook = async (req, res, next) => {
  try {
    const idFacebook = req.body.idFacebook;
    const name = req.body.name;
    const email = req.body.email;

    let account = await Accounts.getByIdFacebook(idFacebook);
    if (!account) {
      account = new Account({
        idFacebook: idFacebook,
        name: name,
        email: email
      });
      await Accounts.create(account);
      const loadAccount = await Accounts.getByIdFaceboook(idFacebook);
      const token = jwt.sign(
        {
          idAccount: loadAccount.idAccount,
          idFacebook: loadAccount.idFacebook.toString(),
          role: loadAccount.role,
          email: loadAccount.email
        },
        "ithoangtansecurity"
      );
      res.status(200).json({
        token: token,
        idAccount: loadAccount.idAccount,
        name: loadAccount.name
      });
    } else {
      const token = jwt.sign(
        {
          idAccount: account.idAccount,
          idFacebook: account.idFacebook.toString(),
          role: account.role,
          email: account.email
        },
        "ithoangtansecurity"
      );

      res.status(200).json({
        token: token,
        name: account.name,
        role: account.role,
        avartar: account.avartar
      });
    }
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    res.status(500).json(error);
    next(error);
  }
};

exports.loginByGoogle = async (req, res, next) => {
  try {
    const idGoogle = req.body.idGoogle;
    const name = req.body.name;
    const email = req.body.email;

    let account = await Accounts.getByIdGoogle(idGoogle);
    if (!account) {
      account = new Account({
        idGoogle: idGoogle,
        name: name,
        email: email
      });
      await Accounts.create(account);
      const loadAccount = await Accounts.getByIdGoogle(idGoogle);
      console.log(loadAccount);

      const token = jwt.sign(
        {
          idAccount: loadAccount.idAccount,
          idGoogle: loadAccount.idGoogle.toString(),
          role: loadAccount.role,
          email: loadAccount.email
        },
        "ithoangtansecurity"
      );
      res.status(200).json({
        token: token,
        name: account.name,
        role: account.role,
        avartar: account.avartar
      });
    } else {
      const token = jwt.sign(
        {
          idAccount: account.idAccount,
          idGoogle: account.idGoogle.toString(),
          role: account.role,
          email: account.email
        },
        "ithoangtansecurity"
      );

      res.status(200).json({
        token: token,
        name: account.name
      });
    }
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    res.status(500).json(error);
    next(error);
  }
};
