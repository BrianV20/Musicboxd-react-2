import { z } from "zod";

export const createArtistSchema = z
    .object({
        FullName: z.string().min(2).max(100).required(),
        Gender: z.number().min(1).required(),
        Country: z.number().min(1).required(),
    });

export const updateArtistSchema = z
    .object({
        FullName: z.string().min(2).max(100).optional(),
        Gender: z.string().min(5).optional(),
        Country: z.string().min(1).optional(),
    });