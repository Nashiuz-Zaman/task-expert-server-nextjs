// import necessary packages
const express = require("express");
const cors = require("cors");

const applyMiddlewares = (app) => {
  app.use(
    cors({
      origin: true,
      // credentials: true,
    })
  );
  app.use(express.json());
};

// export
module.exports = applyMiddlewares;
