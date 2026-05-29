import { z } from 'zod';
import type { UserStatus } from '../../db/generated/schema';

const userStatusValues = ['active', 'inactive'] satisfies [UserStatus, ...UserStatus[]];

export const UserStatusSchema = z.enum(userStatusValues);

export const UserSchema = z
  .object({
    userId: z.string().uuid(),
    name: z.string().min(1),
    lastName: z.string().min(1),
    email: z.string().email(),
    status: UserStatusSchema,
    createdAt: z.string().datetime(),
    updatedAt: z.string().datetime(),
    deletedAt: z.string().datetime().nullable(),
  })
  .strict();

export const CreateUserSchema = UserSchema.pick({
  name: true,
  lastName: true,
  email: true,
  status: true,
})
  .extend({
    status: UserStatusSchema.optional(),
  })
  .strict();

export const UpdateUserSchema = CreateUserSchema.partial().strict();

export const UserParamsSchema = UserSchema.pick({ userId: true }).strict();

export const UserResponseSchema = UserSchema;

export type CreateUserInput = z.infer<typeof CreateUserSchema>;
export type UpdateUserInput = z.infer<typeof UpdateUserSchema>;
export type UserParams = z.infer<typeof UserParamsSchema>;
export type UserResponse = z.infer<typeof UserResponseSchema>;
