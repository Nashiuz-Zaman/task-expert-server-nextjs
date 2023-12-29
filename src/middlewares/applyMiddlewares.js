// import necessary packages
const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const applyMiddlewares = (app) => {
  app.use(
    cors({
      origin: true,
      credentials: true,
    })
  );
  app.use(express.json());
  app.use(cookieParser());
};

// export
module.exports = applyMiddlewares;
