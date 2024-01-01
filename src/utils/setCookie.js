const setCookie = (res, token) => {
  console.log(token);
  res.cookie("token", token, {
    httpOnly: true,
    secure: false,
    // sameSite: "none",
  });
};

module.exports = setCookie;
