import { z } from 'zod'

export const formSchema = z.object({
    name: z.string().min(2),
    description: z.string().optional(),
})

export type formSchemaType = z.infer<typeof formSchema>