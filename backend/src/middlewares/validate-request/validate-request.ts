import type { RequestHandler } from 'express';
import type { RequestValidationSchemas } from './schema';

export function validateRequest({ params, body, query }: RequestValidationSchemas): RequestHandler {
  return (req, _res, next) => {
    if (params) req.params = params.parse(req.params);
    if (body) req.body = body.parse(req.body);
    if (query) req.query = query.parse(req.query);

    next();
  };
}
