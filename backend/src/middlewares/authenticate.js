require("dotenv").config();
const jwt = require("jsonwebtoken");

const verifyToken = (token) => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
      if (err) return reject(err);

      resolve(user);
    });

  });
};

module.exports = async (req, res, next) => {
  //  console.log(req.headers)
  if (!req.headers.authorization)
    return res.status(400).send({
      message: "Token is not authorized",
    });

  if (!req.headers.authorization.startsWith("Bearer "))
    return res.status(400).send({
      message: "Token is not authorized",
    });

  const token = req.headers.authorization.split(" ")[1];

  // console.log(token);

  let user;

  try {
    user = await verifyToken(token);
  } catch (err) {
    return res.status(400).send({
      message: "Token is not authorised",
    });
  }
  var x = verifyToken(token);
x.then(values =>{
  console.log(values);
})
  // console.log(user.user);
  req.user = user.user;


  return next();
};
