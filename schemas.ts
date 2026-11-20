import { z } from 'zod';
const email = z.string().trim().toLowerCase().email().max(254);
export const registerSchema = z.object({
  name: z.string().trim().min(2).max(60),
  email,
  password: z.string().min(10, 'Angalau herufi 10').refine((p) => Buffer.byteLength(p) <= 72, 'Ndefu mno')
    .refine((p) => /[a-z]/.test(p) && /[A-Z]/.test(p) && /\d/.test(p), 'Tumia herufi kubwa, ndogo na namba'),
}).strict();
export const loginSchema = z.object({ email, password: z.string().min(1).max(72) }).strict();
export const chatSchema = z.object({ message: z.string().trim().min(1).max(500) }).strict();
export const slugSchema = z.string().regex(/^[a-z0-9-]{1,40}$/);
