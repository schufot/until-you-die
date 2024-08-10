
import { DatePicker } from '@/components/DatePicker'
import { Button } from '@/components/ui/button'
import React from 'react'

function page() {
  return (
    <div className='h-full bg-background'>
        <div className="border-b bg-card">
            <div className="container flex flex-wrap items-center justify-between gap-6 py-8">
                <DatePicker/>
                
            </div>
        </div>
    </div>
  )
}

export default page