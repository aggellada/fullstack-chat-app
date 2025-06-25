import jwt from "jsonwebtoken";

export const generateToken = (userId, res) => {
  // CREATE COOKIE
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });

  // GET RES FROM THE CONTROLLER, THEN SET THE COOKIE OF RES WITH THE NEWLY CREATED TOKEN FOR AUTHENTICATION
  res.cookie("jwt", token, {
    maxAge: 7 * 24 * 60 * 60 * 1000,
    httpOnly: true,
    sameSite: "strict",
    secure: process.env.NODE_ENV !== "development",
  });

  return token;
};
