import fileUpload, { FileArray } from "express-fileupload";
import { z } from "zod";

export const CreateCategorySchema = z.object({
    body: z.object({
      title: z.string().nonempty(),
      description: z.string().optional()
    }),
  });
  
  export type CreateCategoryType = z.infer<typeof CreateCategorySchema>["body"];
