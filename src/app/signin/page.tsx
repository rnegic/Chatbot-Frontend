"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import React from "react";
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
    email: z.string().email({ message: "Invalid email address" }),
    password: z.string().min(6, { message: "Password must be at least 6 characters" }),
})

const Signin = () => {
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    })

    const onSubmit = (data: any) => {
        console.log(data)
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col items-center gap-10 m-16">
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem className="flex flex-col items-center">
                            <FormLabel className="text-xl text-textColorMid">Email</FormLabel>
                            <FormControl>
                                <Input placeholder="example@example.com" className="w-80 h-10 rounded-xl bg-textColorMid text-lg" {...field} />
                            </FormControl>
                            <FormDescription className="text-sm text-textWarning">
                                Enter your email address.
                            </FormDescription>
                            <FormMessage className="text-sm text-red-300" />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem className="flex flex-col items-center">
                            <FormLabel className="text-xl text-textColorMid">Password</FormLabel>
                            <FormControl>
                                <Input type="password" placeholder="Enter your password" className="w-80 h-10 rounded-xl bg-textColorMid text-lg" {...field} />
                            </FormControl>
                            <FormDescription className="text-sm text-textWarning">
                                Enter your password.
                            </FormDescription>
                            <FormMessage className="text-sm text-red-300" />
                        </FormItem>
                    )}
                />
                <Button type="submit" className="w-80 h-10 bg-buttonBg text-textColorDark rounded-xl hover:bg-blue-200">Submit</Button>
            </form>
        </Form>
    );
}

export default Signin