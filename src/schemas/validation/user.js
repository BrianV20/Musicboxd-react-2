import { z } from "zod";

export const createUserSchema = z
  .object({
    name: z.string().min(2).max(40).required(),
    email: z.string().email().min(5).max(255).required(),
    userName: z.string().min(2).max(40).required(),
    password: z.string().min(6).max(255).required(),
    confirmPassword: z.string().min(6).max(255).required(),
    userTypeId: z.number().min(1).required(),
    countryId: z.number().min(1).required(),
    genderId: z.number().min(1).required(),
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
