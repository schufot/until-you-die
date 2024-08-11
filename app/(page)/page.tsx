
"use client";
import { Combobox } from '@/components/Combobox'
import { DatePicker } from '@/components/DatePicker'
import Timer from '@/components/Timer'
import { Button } from '@/components/ui/button'
import React, { useState } from 'react'


function page()  {

  const submitForm = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const payload = Object.fromEntries(formData);

    console.log(payload)
  }
  
  
  return (

    <form onSubmit={submitForm}>
    <div className='h-full bg-background'>
        <div className="border-b bg-card">
            <div className="container flex flex-wrap items-center justify-between gap-6 py-8">
                <DatePicker/>
                <Combobox/>
                <Button variant={"outline"} className='border-violet-500 bg-violet-950 text-white hover:bg-violet-700 hover:text-white'>
                Calculate your remaining lifetime
                </Button>
                <Timer/>
            </div>
        </div>
    </div>
    </form>
  )
}




export default page