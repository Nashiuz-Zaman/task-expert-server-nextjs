// import necessary packages
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

const applyMiddlewares = app => {
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
export default applyMiddlewares;
