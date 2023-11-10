import { z } from "zod";

export const loginSchema = z.object({
    userName: z.string().min(2).max(40),
    password: z.string().min(6).max(255),
    }).required()
    .superRefine(({ password, userName }, ctx) => {
        if (!password && !userName) {
          ctx.addIssue({
            code: "custom",
            message: "password or userName is required",
            path: ["password", "userName"],
          });
        }
      });