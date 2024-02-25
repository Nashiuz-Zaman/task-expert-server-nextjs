const setCookie = (res, token) => {
   res.cookie('token', token, {
      httpOnly: true,
      secure: false,
      // sameSite: "none",
   });
};

export default setCookie;
