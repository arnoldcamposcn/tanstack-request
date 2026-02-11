import { z } from "zod";

export const CarBaseSchema = z.object({
  brand: z.string(),
  model: z.string(),
  color: z.string(),
  year: z.number(),
});


export const CreateCarSchema = CarBaseSchema;
export type CreateCarData = z.infer<typeof CreateCarSchema>;


export const UpdateCarSchema = CarBaseSchema
  .partial()
  .extend({
    id: z.number(),
  });

export type UpdateCarData = z.infer<typeof UpdateCarSchema>;
