import { z } from "zod";

export const loginSchema = z.object({
    email: z.string().email().min(5).max(255),
    password: z.string().min(6).max(255),
    }).required()
    .superRefine(({ password, email }, ctx) => {
        if (!password && !email) {
          ctx.addIssue({
            code: "custom",
            message: "password or email is required",
            path: ["password", "email"],
          });
        }
      });