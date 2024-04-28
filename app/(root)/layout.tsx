import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import { ClerkProvider } from '@clerk/nextjs'
import React from 'react'

const RootLayout = ({ children }: { children : React.ReactNode }) => {
  return (
    <main className='flex flex-col h-screen bg-slate-900'>
            <Navbar />
            <div className='flex h-full'>
              <Sidebar />
              {children}
            </div>
    </main>
  )
}

export default RootLayout