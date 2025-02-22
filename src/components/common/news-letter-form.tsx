"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

const formSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  country: z.string().min(1, "Please select a country"),
  interest: z
    .array(
      z.enum(["home", "work"], {
        required_error: "Please select where you'll use Vestaboard",
      })
    )
    .min(1, "Please select at least one interest"),
});

export function NewsletterForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      country: "",
      interest: ["home"],
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Here you would typically send the form data to your API
    console.log(values);
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>First Name*</FormLabel>
              <FormControl>
                <Input
                  placeholder="First name"
                  {...field}
                  className="bg-transparent border-white"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="lastName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Last Name*</FormLabel>
              <FormControl>
                <Input
                  placeholder="Last name"
                  {...field}
                  className="bg-transparent border-white"
                />
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
              <FormLabel>Email*</FormLabel>
              <FormControl>
                <Input
                  placeholder="What's your email?"
                  {...field}
                  className="bg-transparent border-white"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="country"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Country (dropdown)*</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="bg-transparent border-white">
                    <SelectValue placeholder="Please Select" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="us">United States</SelectItem>
                  <SelectItem value="ca">Canada</SelectItem>
                  <SelectItem value="uk">United Kingdom</SelectItem>
                  <SelectItem value="au">Australia</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="interest"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel>I am interested in Vestaboard*</FormLabel>
              <FormControl>
                <div className="flex flex-col space-y-1">
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <input
                        type="checkbox"
                        value="home"
                        onChange={(e) => {
                          const valueArray = field.value.includes(
                            e.target.value as "home" | "work"
                          )
                            ? field.value.filter(
                                (v: string) => v !== e.target.value
                              )
                            : [...field.value, e.target.value];
                          field.onChange(valueArray);
                        }}
                        checked={field.value.includes("home")}
                      />
                    </FormControl>
                    <FormLabel className="font-normal sm:text-xl">
                      At home
                    </FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <input
                        type="checkbox"
                        value="work"
                        onChange={(e) => {
                          const valueArray = field.value.includes(
                            e.target.value as "home" | "work"
                          )
                            ? field.value.filter(
                                (v: string) => v !== e.target.value
                              )
                            : [...field.value, e.target.value];
                          field.onChange(valueArray);
                        }}
                        checked={field.value.includes("work")}
                      />
                    </FormControl>
                    <FormLabel className="font-normal sm:text-xl">
                      At work
                    </FormLabel>
                  </FormItem>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="w-full bg-white text-black hover:bg-gray-200"
        >
          Sign up
        </Button>
      </form>
    </Form>
  );
}
