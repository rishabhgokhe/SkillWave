//generates a token and saves it as a cookie

export default function sendToken(res, user, message, statusCode = 200) {
  const token = user.getJWTToken();

  const options = {
    expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 10),
    httpOnly: true,
    // secure: true,
    sameSite: true,
  };

  res.status(statusCode).cookie('Token', token, options).json({
    success: true,
    message,
    user,
  });
}
