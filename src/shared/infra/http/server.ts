import 'reflect-metadata';
import 'dotenv/config';

import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
// Required if you use typescript with express
import 'express-async-errors';
import { errors } from 'celebrate';

import uploadConfig from '@config/upload';
import routes from '@shared/infra/http/routes';
import AppError from '@shared/errors/AppError';
import rateLimiter from './middlewares/rateLimiter';

// Container initialization
import '@shared/container';
import '@shared/infra/typeorm';

const app = express();

// Rate limiter
app.use(rateLimiter);

// CORS policy
app.use(cors());

// Allowing JSON format
app.use(express.json());

// Setting up file upload
app.use('/files', express.static(uploadConfig.uploadFolder));

// setting up all routes
app.use(routes);

// error handling
app.use(errors());
app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }

  console.error(err);

  return response.status(500).json({
    status: 'error',
    message: 'Internal server error',
  });
});

// Application start
app.listen(3333, () => {
  console.log('🚀 App launched');
});
