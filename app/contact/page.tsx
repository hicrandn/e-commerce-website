"use client"
import React from 'react'
import { Input } from '@/components/ui/input'
import { useForm, SubmitHandler } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import ContactFormSchema from '@/lib/schema'
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import Image from 'next/image'

type ContactInfoFormData = z.infer<typeof ContactFormSchema>;


export default function Contact () {
    const form = useForm<ContactInfoFormData>({
        resolver: zodResolver(ContactFormSchema),
        defaultValues: {
        fullName: "",
        email: "",
        subject: "",
        message: "",
         
        },
      });

    const onSubmit: SubmitHandler<ContactInfoFormData> = (data) => {
    console.log(data);
  };

  return (
    
<div className='min-h-screen text-center text-black text-3xl font-bold'>
      
<div className='flex flex-col items-center justify-center h-screen '>
    <h1 className='text-4xl font-bold mb-8'>Contact Us</h1>
      <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
      <FormField
          control={form.control}
           name="fullName"
           render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input placeholder="Full Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Subject</FormLabel>
              <FormControl>
                <Input placeholder="Subject" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

<FormField
          
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Input placeholder="Message" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Send Mail</Button>
      </form>
    </Form>
    </div>

   
    </div>
   
  )
}


