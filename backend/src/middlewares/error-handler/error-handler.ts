import type { NextFunction, Request, Response } from 'express';
import { ZodError } from 'zod';
import { CustomError } from '../../errors/custom-error';

export function errorHandler(
  error: unknown,
  _req: Request,
  res: Response,
  _next: NextFunction
): void {
  if (error instanceof ZodError) {
    res.status(400).json({
      message: 'Validation error',
      issues: error.issues,
    });
    return;
  }

  if (error instanceof CustomError) {
    res.status(error.statusCode).json({
      message: error.message,
    });
    return;
  }

  res.status(500).json({
    message: 'Internal server error',
    ...(process.env.NODE_ENV !== 'production' && error instanceof Error
      ? { detail: error.message }
      : {}),
  });
}
