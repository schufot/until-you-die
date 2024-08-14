
"use client";
import { Combobox } from '@/components/Combobox'
import { DatePicker } from '@/components/DatePicker'
import Timer from '@/components/Timer'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar';
import React, { useState } from 'react'


function page()  {

  return (
    <div className='h-full bg-background'>
        <div className="border-b bg-card">
            <div className="container flex flex-wrap items-center justify-between gap-6 py-8">
                <Calendar captionLayout="dropdown-buttons" fromYear={1950} toYear={2050}/>
                <Combobox></Combobox>
                <Button variant={"outline"} className='border-violet-500 bg-violet-950 text-white hover:bg-violet-700 hover:text-white'>
                Calculate your remaining lifetime
                </Button>
                <Timer/>
                <p className=""></p>
            </div>
        </div>
    </div>
  )
}




export default page