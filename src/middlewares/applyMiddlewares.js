// import necessary packages
import express from 'express';
import cors from 'cors';

const applyMiddlewares = app => {
   app.use(
      cors({
         origin: 'http://localhost:3000',
      })
   );
   app.use(express.json());
};

// export
export default applyMiddlewares;
