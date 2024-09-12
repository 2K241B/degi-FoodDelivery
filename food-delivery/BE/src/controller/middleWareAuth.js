import jwt from "jsonwebtoken";

export const checkToken = (req, res, next) => {
  if (req.headers.cookie) {
    const token = req.headers.cookie.split("=")[1];
    const isToken = jwt.verify(token, process.env.SECRET_KEY);
    req.body = isToken;
    next();
    return;
  }
  return res.status(404).send({ error: "invalid token" });
};

export const checkRole = (req, res, next) => {
  const { user } = req.body;

  if (user.role != "admin") {
    return res.status(403).send({ error: "Permision denied" });
  }
  next();
};
