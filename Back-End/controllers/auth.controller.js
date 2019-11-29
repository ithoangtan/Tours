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

  bcrypt
    .hash(account.password, saltRounds)
    .then(passwordHash => {
      account.password = passwordHash;
      return Accounts.create(account);
    })
    .then(result => {
      res.status(201).json({ statusCode: 200, userId: result.idAccount });
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
  let loadAccount;

  Accounts.getByEmail(email)
    .then(account => {
      if (!account) {
        const error = new Error("User with this email could not found!!!");
        error.statusCode = 401;
        res.status(500).json(error);
        throw error;
      }
      loadAccount = account;
      return bcrypt.compare(password, account.password);
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
          idAccount: loadAccount.idAccount,
          email: loadAccount.email,
          role: loadAccount.role
        },
        "ithoangtansecurity"
      );
      res.status(200).json({
        token: token,
        name: loadAccount.name
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
      const newAccount = await Accounts.create(account);
      const loadAccount = await Accounts.getByIdFaceboook(idFacebook);
      console.log(loadAccount);

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
        idAccount: loadAccount.idAccount,
        name: loadAccount.name
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
