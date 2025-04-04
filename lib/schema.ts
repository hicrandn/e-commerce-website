import z from 'zod';

const ContactFormSchema = z.object({
    fullName: z.string().min(1,{message:"Name is required"}),
    email: z.string().email({message:"Email is required"}),
    subject: z.string().min(1, {message:"Subject is required"}),
    message: z.string().min(1, {message:"Message is required"})
})

export default ContactFormSchema;