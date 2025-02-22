"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

const formSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  isArchitect: z.boolean().default(false),
});

export function SpecSheetForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      isArchitect: false,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Here you would handle the form submission
    console.log(values);
  }

  return (
    <section className="bg-background lg:pb-24 lg:pt-36 lg:-mt-14 max-lg:py-10">
      <div className="container px-4 md:px-6">
        <div className="">
          <div className="grid sm:grid-cols-2 sm:gap-10">
            <div>
              <h2 className="mb-4 text-4xl font-light tracking-tight text-secondary md:text-5xl">
                Request the spec sheet
              </h2>
              <p className="mb-8 text-lg text-grey-dark font-light">
                Download our latest specification sheet for Vestaboard.
              </p>
            </div>
            <div className="flex">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6"
                >
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <label
                          htmlFor="email"
                          className="block text-sm  text-foreground font-light"
                        >
                          Enter Your Email
                        </label>
                        <FormControl>
                          <Input
                            id="email"
                            placeholder="Enter your email*"
                            className="h-12 border-foreground bg-transparent text-white placeholder:text-gray-500"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="isArchitect"
                    render={({ field }) => (
                      <FormItem className="flex items-start space-x-3 space-y-0">
                        <FormControl>
                          <input
                            type="checkbox"
                            id="isArchitect"
                            onChange={field.onChange}
                            checked={field.value}
                          />
                        </FormControl>
                        <label
                          htmlFor="isArchitect"
                          className="text-sm leading-none text-foreground font-light"
                        >
                          I&apos;m an architect, designer or contractor
                        </label>
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    className="h-12 bg-foreground text-primary hover:bg-grey-main font-light"
                  >
                    Download
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
