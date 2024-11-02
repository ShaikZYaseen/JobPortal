import React from 'react'
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
import { useForm } from "react-hook-form"
import { Button } from '../ui/button';

function ResumeMakerForm({data,setData}) {


    const form = useForm();
    const handleSubmit = (data)=>{
        // console.log(data)
    }
  return (
    <div className='p-5 flex-col justify-center items-center h-[35rem] overflow-y-auto border border-gray-300'>
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
        <h1 className='font-bold'>Personal Details :</h1>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter your name.."
                  onChange={(e) => {
                    setData((prev) => ({ ...prev, name: e.target.value }));
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="role"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Role</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter your role.."
                  onChange={(e) => {
                    setData((prev) => ({ ...prev, role: e.target.value }));
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="github"
          render={({ field }) => (
            <FormItem>
              <FormLabel>GitHub</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter your GitHub link.."
                  onChange={(e) => {
                    setData((prev) => ({ ...prev, github: e.target.value }));
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
         <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone no:</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter your phone number.."
                  type="number"
                  maxLength={10}
                  onChange={(e) => {
                    setData((prev) => ({ ...prev, phone: e.target.value }));
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
         <FormField
          control={form.control}
          name="leetcode"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Leetcode</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter your leetcode link.."
                  onChange={(e) => {
                    setData((prev) => ({ ...prev, leetcode: e.target.value }));
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
          
        />
        <FormField
          control={form.control}
          name="portfolio"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Portfolio</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter your portfolio link.."
                  onChange={(e) => {
                    setData((prev) => ({ ...prev, portfolio: e.target.value }));
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
          
        />
        <FormField
          control={form.control}
          name="linkedin"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Linkedin</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter your linkedin link.."
                  onChange={(e) => {
                    setData((prev) => ({ ...prev, linkedin: e.target.value }));
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
          
        />
        <h1 className='font-bold'>Education Details :</h1>
        <FormField
          control={form.control}
          name="linkedin"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Linkedin</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter your linkedin link.."
                  onChange={(e) => {
                    setData((prev) => ({ ...prev, linkedin: e.target.value }));
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
          />

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  </div>
  
  )
}

export default ResumeMakerForm