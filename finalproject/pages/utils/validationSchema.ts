import {z} from "zod"

export const validationSchema = z.object({
    name: z
        .string()
        .nonempty("Username is required.")
        .min(4, "Username must be of length at least 4."),
    email: z
        .string()
        .nonempty("Email is required.")
        .email("Enter correct email"),
    password: z
        .string()
        .nonempty("Password is required.")
        .min(6, "Password must be of length 6-20.")
        .max(20, "Password must be of length 6-20.")
})