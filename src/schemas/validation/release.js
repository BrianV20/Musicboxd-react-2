import { z } from "zod";

export const createReleaseSchema = z
    .object({
        Name: z.string().min(1).max(50).required(),
        ReleaseDate: z.date().min(1).required(),
        Artist: z.number().min(1).required(),
        Score: z.number().min(1).required(),
        // RatingId: z.number().min(1).required(),
        ReleaseTypeId: z.number().min(1).required(),
        GenreId: z.number().min(1).required(),
        ArtistId: z.number().min(1).required(),
    });

export const updateReleaseSchema = z
    .object({
        Name: z.string().min(1).max(50).optional(),
    });