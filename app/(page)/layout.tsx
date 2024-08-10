import Navbar from '@/components/Navbar'
import { Separator } from '@/components/ui/separator'
import React, { ReactNode } from 'react'

function layout({children}:{children: ReactNode}) {
  return (
    <div className="relative flex h-screen w-full flex-col">
        <Navbar/>
        <Separator/>
        <div className="w-full">{children}</div>
    </div>
  )
}

export default layout