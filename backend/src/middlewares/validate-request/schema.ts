import type { Request } from 'express';
import type { z } from 'zod';

export type RequestValidationSchemas = {
  params?: z.ZodType<Request['params']>;
  body?: z.ZodType<Request['body']>;
  query?: z.ZodType<Request['query']>;
};
