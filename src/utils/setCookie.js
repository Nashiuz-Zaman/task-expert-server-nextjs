const setCookie = (res, token) => {
   res.cookie('token', token, {
      httpOnly: true,
      secure: true,
      sameSite: 'none',
      expires: new Date(Date.now() + 12 * 60 * 60 * 1000),
   });
};

export default setCookie;
