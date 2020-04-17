// const { validationResult } = require("express-validator/check");
const bcrypt = require("bcryptjs"); //hash password
const saltRounds = 10;
const jwt = require("jsonwebtoken");
const passport = require("passport");
const randomstring = require("randomstring");
const Accounts = require("../models/account.model");
const mailer = require("../mics/mailer.mics");
const mailerGmail = require("../mics/mailer.gmail");

exports.register = (req, res, next) => {
  // const err = validationResult(req);
  const verifyToken = randomstring.generate();
  let newAccount = new Accounts(req.body);
  Accounts.getAll()
    .then(accounts => {
      accounts.forEach(account => {
        if (account && account.email === newAccount.email) {
          const error = new Error();
          error.statusCode = 200;
          error.message = "The email already exists";
          res.status(200).json(error);
          throw error;
        }
      });

      newAccount = { ...newAccount, verifyToken: verifyToken };
      //Quét xem email đã tồn tại không
      //Nếu có thì thông báo email này đã được đăng ký
      //Nếu không có thì tiến hành đăng ký
      // Tiếp theo là quét xem đơn hàng có phone or email nào trùng không,
      //nếu có thì cập nhật idAccount này cho Order đó
      bcrypt
        .hash(newAccount.password, saltRounds)
        .then(async passwordHash => {
          newAccount.password = passwordHash;
          //Ta tiến hành gửi mail ở đây cho người dùng vừa nhập
          // Compose email
          const html = `Hi there,
                        <br/>
                        Thank you for registering!
                        <br/><br/>
                        We are Trùm Tour:
                        <br/><br/>
                        Please verify your email by typing the following token:
                        On the following page:
                        <a href="${
                          process.env.FRONT_END
                        }verify?ddSWuQzP8x2cHckmKxiK=${jwt.sign(
            verifyToken,
            "ithoangtansecurity"
          )}&QZmWYU22y2zb2qZg8clJ=${jwt.sign(
            newAccount.email,
            "ithoangtansecurity"
          )}">${process.env.FRONT_END}verify?${jwt.sign(
            "verifyToken",
            "ithoangtansecurity"
          )}=${jwt.sign(verifyToken, "ithoangtansecurity")}</a>
                        <br/><br/>
                        Have a pleasant day.`;
          // //micro service mailgun(sever mail support)
          // await mailer.sendEmail(
          //   "app156076672@heroku.com",
          //   newAccount.email,
          //   "Vui lòng xác thực email của bạn!",
          //   html
          // );
          //micro service gmail
          await mailerGmail.sendEmail(
            process.env.MY_GMAIL,
            newAccount.email,
            "Vui lòng xác thực email của bạn!",
            html
          );
          return Accounts.create(newAccount);
        })
        .then(result => {
          res.status(201).json({
            statusCode: 200,
            result: result,
            idAccount: result.insertId,
            name: newAccount.name,
            email: newAccount.email,
          });
        })
        .catch(err => {
          if (!err.statusCode) {
            err.statusCode = 500;
          }
          res.status(500).json(err);
          next(err);
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

/**
 * Nhận 2 tham số
 * ddSWuQzP8x2cHckmKxiK verifyToken đã jwt.sign
 * QZmWYU22y2zb2qZg8clJ emailVerify đã jwt.sign
 * Xác minh với CSDL trước đó khi đăng ký
 * Nếu đúng thì
 */
exports.verify = async (req, res, next) => {
  //Ta tiến hành xác minh email và redirect tới trang xác thực thành công ở client
  try {
    const verifyToken = await jwt.verify(
      req.query.ddSWuQzP8x2cHckmKxiK,
      "ithoangtansecurity"
    );
    const emailVerify = await jwt.verify(
      req.query.QZmWYU22y2zb2qZg8clJ,
      "ithoangtansecurity"
    );
    Accounts.getByEmailAndRole(emailVerify, "user")
      .then(async account => {
        if (!account) {
          const error = new Error();
          error.statusCode = 200;
          error.message = "Some thing Wrong!!!";
          res.status(200).json(error);
          throw error;
        }
        if (account.verifyToken === verifyToken) {
          //update account
          account.verify = true;
          account.verifyToken = "verified";
          await Accounts.updateById(account);

          res.status(200).json({
            statusCode: 200,
            userId: account.idAccount,
            name: account.name,
            email: account.email,
          });
        } else {
          if (account.verifyToken === "verified") {
            res.status(200).json({
              statusCode: 200,
              userId: account.idAccount,
              name: account.name,
              email: account.email,
            });
          }
          const error = new Error();
          error.statusCode = 200;
          error.message = "Something Wrong!";
          res.status(200).json(error);
          throw error;
        }
      })
      .catch(err => {
        if (!err.statusCode) {
          err.statusCode = 500;
        }
        res.status(500).json(err);
        next(err);
      });
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    res.status(500).json(error);
    next(error);
  }
};

//Forgot password
// wXvkihdDAD9D8FI9Nwpf date
exports.forgotPasswordStep1 = (req, res, next) => {
  const verifyToken = randomstring.generate();
  const email = req.body.email;
  Accounts.getByEmailAndRole(email, "user")
    .then(async account => {
      if (!account) {
        const error = new Error();
        error.statusCode = 200;
        error.message = "This email is not resgitered!";
        res.status(200).json(error);
        throw error;
      }
      account.verifyToken = verifyToken;
      //update Token để step2 xác nhận lại
      Accounts.updateById(account);
      const html = `Hi there,
                        <br/>
                        Thank you for using us service!
                        <br/><br/>
                        We are Trùm Tour:
                        <br/><br/>
                        On the following page in order to get new password:
                        <a href="${
                          process.env.FRONT_END
                        }forgotPassword?ddSWuQzP8x2cHckmKxiK=${jwt.sign(
        verifyToken,
        "ithoangtansecurity"
      )}&QZmWYU22y2zb2qZg8clJ=${jwt.sign(
        account.email,
        "ithoangtansecurity"
      )}&wXvkihdDAD9D8FI9Nwpf=${jwt.sign(Date.now(), "ithoangtansecurity")}">${
        process.env.FRONT_END
      }forgotPassword?${jwt.sign(
        "verifyToken",
        "ithoangtansecurity"
      )}=${jwt.sign(verifyToken, "ithoangtansecurity")}</a>
                        <br/><br/>
                        Have a pleasant day.`;
      //micro service gmail
      await mailerGmail.sendEmail(
        "itk160454@gmail.com",
        account.email,
        "Vui lòng nhấp vào link dưới để khôi phục mật khẩu!",
        html
      );
      res.status(200).json({
        statusCode: 200,
        email: account.email,
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

/**
 * Khi người dùng nhất vào link gửi qua mail
 * chuyển tới client và show 2 input password
 * gọi API save password
 */
exports.forgotPasswordStep2 = (req, res, next) => {
  //change password
  try {
    const verifyToken = jwt.verify(
      req.query.ddSWuQzP8x2cHckmKxiK,
      "ithoangtansecurity"
    );
    const date = jwt.verify(
      req.query.wXvkihdDAD9D8FI9Nwpf,
      "ithoangtansecurity"
    );
    const email = jwt.verify(
      req.query.QZmWYU22y2zb2qZg8clJ,
      "ithoangtansecurity"
    );
    if (Date.now() - date >= 500000) {
      const error = new Error();
      error.statusCode = 200;
      error.message =
        "Phiên quá hạn, vui lòng thực hiện lại trình tự khôi phục mật khẩu!";
      res.status(200).json(error);
      throw error;
    }
    Accounts.getByEmailAndRole(email, "user")
      .then(account => {
        if (!account) {
          const error = new Error();
          error.statusCode = 200;
          error.message = "This email is not resgitered!";
          res.status(200).json(error);
          throw error;
        } else if (account.verifyToken === verifyToken) {
          //Lấy password từ body
          bcrypt.hash(req.body.password, saltRounds).then(passwordHash => {
            account.password = passwordHash;
            Accounts.updateById(account).then(result => {
              res.status(200).json({
                statusCode: 200,
                idAccount: account.idAccount,
                email: account.email,
                result: result,
              });
            });
          });
        } else {
          const error = new Error();
          error.statusCode = 200;
          error.message = "Có gì đó sai sai á nè!";
          res.status(200).json(error);
          throw error;
        }
      })
      .catch(err => {
        if (!err.statusCode) {
          err.statusCode = 500;
        }
        res.status(500).json(err);
        next(err);
      });
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    res.status(500).json(error);
    next(error);
  }
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
      // if (!account.verify) {
      //   const error = new Error();
      //   error.statusCode = 200;
      //   error.message = "Your account was not verified!!!";
      //   res.status(200).json(error);
      //   throw error;
      // }
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
          role: loadAccount.role,
        },
        "ithoangtansecurity"
      );

      let options = {
        maxAge: 60 * 60 * 24, // would expire after 24h
        httpOnly: true, // The cookie only accessible by the web server
        signed: true, // Indicates if the cookie should be signed
      };

      // no: set a new cookie
      res
        .cookie("token", token, options) // options is optional
        .json({
          token: token,
          name: loadAccount.name,
          role: loadAccount.role,
          avatar: loadAccount.avatar,
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
  // return passport.authenticate("google-token", async (err, googleUser) => {
  //   try {
  //     if (err) {
  //       throw err;
  //     }
  //     let accountGoogle;
  //     await Accounts.getByEmailAndRole(googleUser.email, req.role)
  //       .then(async account => {
  //         if (account) {
  //           // account existed do not have idGoogle
  //           if (!account.idGoogle) {
  //             await Accounts.updateById({
  //               ...account,
  //               idGoogle: googleUser.id,
  //             });
  //           }
  //           accountGoogle = account;
  //         } else {
  //           const newAccount = new Accounts({
  //             idGoogle: googleUser.id,
  //             name: googleUser.name,
  //             email: googleUser.email,
  //             avartar: googleUser.picture,
  //           });
  //           await Accounts.create(newAccount);
  //           const loadAccount = await Accounts.getByIdGoogle(googleUser.id);
  //           accountGoogle = loadAccount[0];
  //         }
  //         const token = jwt.sign(
  //           {
  //             idAccount: accountGoogle.idAccount,
  //             email: accountGoogle.email,
  //             role: accountGoogle.role,
  //           },
  //           "ithoangtansecurity"
  //         );
  //         let options = {
  //           maxAge: 60 * 60 * 24, // would expire after 24h
  //           httpOnly: true, // The cookie only accessible by the web server
  //           signed: true, // Indicates if the cookie should be signed
  //         };
  //         // no: set a new cookie
  //         res
  //           .cookie("token", token, options) // options is optional
  //           .json({
  //             token: token,
  //             name: accountGoogle.name,
  //             role: accountGoogle.role,
  //             avatar: accountGoogle.avatar,
  //           })
  //           .status(200);
  //       })
  //       .catch(error => {
  //         if (!error.statusCode) {
  //           error.statusCode = 500;
  //         }
  //         res.status(500).json(error);
  //         next(error);
  //       });
  //   } catch (error) {
  //     if (!error.statusCode) {
  //       error.statusCode = 500;
  //     }
  //     res.status(500).json(error);
  //     next(error);
  //   }
  // })(req, res, next);
};

exports.loginByGoogle = async (req, res, next) => {
  return passport.authenticate("google-token", async (err, googleUser) => {
    try {
      if (err) {
        throw err;
      }
      let accountGoogle;
      await Accounts.getByEmailAndRole(googleUser.email, req.body.role)
        .then(async account => {
          if (account) {
            // account existed do not have idGoogle
            if (!account.idGoogle) {
              await Accounts.updateById({
                ...account,
                idGoogle: googleUser.id,
              });
            }
            accountGoogle = account;
          } else {
            const newAccount = new Accounts({
              idGoogle: googleUser.id,
              name: googleUser.name,
              email: googleUser.email,
              avatar: googleUser.picture,
            });
            await Accounts.create(newAccount);
            const loadAccount = await Accounts.getByIdGoogle(googleUser.id);
            accountGoogle = loadAccount[0];
          }
          const token = jwt.sign(
            {
              idAccount: accountGoogle.idAccount,
              email: accountGoogle.email,
              role: accountGoogle.role,
            },
            "ithoangtansecurity"
          );

          let options = {
            maxAge: 60 * 60 * 24, // would expire after 24h
            httpOnly: true, // The cookie only accessible by the web server
            signed: true, // Indicates if the cookie should be signed
          };

          // no: set a new cookie
          res
            .cookie("token", token, options) // options is optional
            .json({
              token: token,
              name: accountGoogle.name,
              role: accountGoogle.role,
              avatar: accountGoogle.avatar,
            })
            .status(200);
        })
        .catch(error => {
          if (!error.statusCode) {
            error.statusCode = 500;
          }
          res.status(500).json(error);
          next(error);
        });
    } catch (error) {
      if (!error.statusCode) {
        error.statusCode = 500;
      }
      res.status(500).json(error);
      next(error);
    }
  })(req, res, next);
};
