"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { SubmitHandler, useForm } from "react-hook-form"
import { z } from "zod"
import { useState } from "react"
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
import { Input } from "@/components/ui/input"

const formSchema = z.object({
  name: z.string().min(4, { message: "Navnet må ha minst 4 bokstaver" }),
  email: z.string().email({ message: "Ugyldig epost-adresse" }),
  subject: z.string().min(3, { message: "Emne må ha misnt 3 bokstaver" }),
  message: z.string().min(10, { message: "Meldingen din må være minst 10 bokstaver lang" }),
})

type FormData = z.infer<typeof formSchema>

export default function ContactForm() {

  const [status, setStatus] = useState<string>("")

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  })

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    console.log(data)
    setStatus("Sending...")

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setStatus("Email sent successfully!")
        form.reset()
      } else {
        setStatus("Failed to send email.")
      }
    } catch (error) {
      console.error(error)
      setStatus("An error occurred.")
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 container mx-auto pt-8 w-1/2">
      <h1 className="text-5xl text-center font-bold py-6">Send us a message</h1>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Ola Dunk" {...field} />
              </FormControl>
              <FormDescription>Your name</FormDescription>
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
                <Input placeholder="navn@navnesen.no" {...field} />
              </FormControl>
              <FormDescription>E-mail address</FormDescription>
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
                <Input placeholder="Your subject" {...field} />
              </FormControl>
              <FormDescription>What is your message about</FormDescription>
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
                <Input placeholder="Your message here" {...field} />
              </FormControl>
              <FormDescription>Write your message</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="bg-sky-600 text-white hover:text-black hover:bg-sky-300">Send your message</Button>

        <p>{status}</p>
      </form>
    </Form>
  )
}