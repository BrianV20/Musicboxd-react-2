import { z } from "zod";

export const createReviewSchema = z
    .object({
        Text: z.string().min(1).max(255).required(),
        UserId: z.number().min(1).required(),
        ReleaseId: z.number().min(1).required(),
    });

export const updateReviewSchema = z
    .object({
        Text: z.string().min(1).max(255).optional(),
    });