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
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import Image from 'next/image'

type ContactInfoFormData = z.infer<typeof ContactFormSchema>;

export default function Contact() {
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
    <div className="min-h-screen flex items-center justify-center p-3 bg-gray-100">
      
      <div className="flex flex-col md:flex-row w-full max-w-5xl gap-8 md:gap-12">
        
       
        <div className="w-full ">
          <h1 className="text-4xl font-extrabold text-[#151875] mb-4 text-center">
            Get in Touch
          </h1>
          <p className='text-lg text-[#8A8FB9] mt-2 mb-4 '>Lorem ipsum dolor,impedit quasi veniam sunt. Dignissimos rem assumenda  explicabo! </p>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-lg font-semibold text-gray-600">
                        Full Name
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Full Name"
                          {...field}
                          className="border border-[#A4B6C8] p-3 text-gray-900 font-medium"
                        />
                      </FormControl>
                      <FormMessage className='text-[#FB2448]' />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-lg font-semibold text-gray-600">
                        Email
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Email"
                          {...field}
                          className="border border-[#A4B6C8] p-3 text-gray-900 font-medium"
                        />
                      </FormControl>
                      <FormMessage className='text-[#FB2448]' />
                    </FormItem>
                  )}
                />
              </div>

              
              <FormField
                control={form.control}
                name="subject"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg font-semibold text-gray-600">
                      Subject
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Subject*"
                        {...field}
                        className="border border-[#A4B6C8] p-3 text-gray-900 font-medium"
                      />
                    </FormControl>
                    <FormMessage className='text-[#FB2448]' />
                  </FormItem>
                )}
              />

              
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg font-semibold text-gray-600">
                      Message
                    </FormLabel>
                    <FormControl>
                      <textarea
                        placeholder="Write your message..."
                        {...field}
                        className="w-full p-3 border border-[#A4B6C8] rounded-md text-gray-900 font-medium"
                        rows={4}
                      />
                    </FormControl>
                    <FormMessage className='text-[#FB2448]'  />
                  </FormItem>
                )}
              />

              
              <Button type="submit" className="w-1/3 bg-pink text-white font-bold py-3">
                Send Mail
              </Button>
            </form>
          </Form>
        </div>

        
        <div className="w-full flex flex-col items-center">
          <Image
            src="/contact/contact.svg"
            alt="Contact Us"
            width={723}
            height={692}
            className=" w-full h-auto object-cover"
          />
          
          
        </div>

      </div>
    </div>
  );
}
