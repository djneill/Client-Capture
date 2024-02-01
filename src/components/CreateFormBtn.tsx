'use client'

import React from 'react'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog'
import { BsFileEarmarkPlus } from 'react-icons/bs'
import { ImSpinner2 } from 'react-icons/im'
import { Button } from './ui/button'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from './ui/form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { useForm } from 'react-hook-form'

const formSchema = z.object({
    name: z.string().min(2),
    description: z.string().optional(),
})

type formSchemaType = z.infer<typeof formSchema>

export default function CreateFormBtn() {
    const form = useForm<formSchemaType>({
        resolver: zodResolver(formSchema),
    })

    function onSubmit(values: formSchemaType) {
        console.log(values)
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button>Create New Client</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Add New Client</DialogTitle>
                    <DialogDescription>
                        Create a new form to start collecting data from your clients
                    </DialogDescription>
                </DialogHeader>
                <div className='flex flex-col gap-4 py-4'>

                </div>
            </DialogContent>
        </Dialog>
    )
}
