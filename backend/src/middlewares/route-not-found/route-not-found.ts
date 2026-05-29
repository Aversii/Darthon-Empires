import type { Request } from 'express';
import { MethodNotAllowedError, NotFoundError } from '../../errors/custom-error';

export function routeNotFound(req: Request): void {
  throw new NotFoundError(`Route not found. Cannot ${req.method} ${req.originalUrl}`);
}

export function methodNotAllowed(req: Request): void {
  throw new MethodNotAllowedError(`Method ${req.method} not allowed for ${req.originalUrl}`);
}
