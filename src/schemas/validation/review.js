import { z } from "zod";

export const createReviewSchema = z
    .object({
        Text: z.string().min(1).max(255).nullable(),
        UserId: z.number().min(1).nullable(),
        ReleaseId: z.number().min(1).nullable(),
        RatingId: z.number().min(1).nullable()
    });

export const updateReviewSchema = z
    .object({
        Text: z.string().min(1).max(255).optional(),
    });