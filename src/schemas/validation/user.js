import { z } from "zod";

export const createUserSchema = z
  .object({
    name: z.string().min(2).max(40).nullable(),
    email: z.string().email().min(5).max(255).nullable(),
    userName: z.string().min(2).max(40).nullable(),
    password: z.string().min(6).max(255).nullable(),
    confirmPassword: z.string().min(6).max(255).nullable(),
    countryId: z.number().min(1).nullable(),
    genderId: z.number().min(1).nullable(),
  })
  .superRefine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export const updateUserSchema = z
  .object({
    name: z.string().min(2).max(40).optional(),
    email: z.string().email().min(5).max(255).optional(),
    userName: z.string().min(2).max(40).optional(),
    password: z.string().min(6).max(255).optional(),
    confirmPassword: z.string().min(6).max(255).optional(),
  })
  .superRefine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });
