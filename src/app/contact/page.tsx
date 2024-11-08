"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

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

// Define validation schema
const formSchema = z.object({
  name: z.string().min(4, { message: "Navnet må ha minst 4 bokstaver" }),
  email: z.string().email({ message: "Ugyldig epost-adresse" }),
  subject: z.string().min(3, { message: "Emne må ha misnt 3 bokstaver" }),
  message: z.string().min(10, { message: "Meldingen din må være minst 10 bokstaver lang" }),
})

export default function ContactForm() {
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
          name: "",
          email: "",
          subject: "",
          message: "",
        },
      })

  const onSubmit = (data:object) => {
    console.log(data)
//    Logikk her
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 container mx-auto pt-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Ola Dunk" {...field} />
              </FormControl>
              <FormDescription>Ditt fulle navn</FormDescription>
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
              <FormDescription>Din epost</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Emne</FormLabel>
              <FormControl>
                <Input placeholder="Emne til din melding" {...field} />
              </FormControl>
              <FormDescription>Hva handler din forespørsel om?</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Melding</FormLabel>
              <FormControl>
                <Input placeholder="Din melding her" {...field} />
              </FormControl>
              <FormDescription>Skriv din melding her</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Send din melding</Button>
      </form>
    </Form>
  )
}