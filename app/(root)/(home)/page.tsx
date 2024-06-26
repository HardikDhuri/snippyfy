import React from 'react'
import { Input } from "@/components/ui/input"
import { Button } from '@/components/ui/button'
import SnippetCard from '@/components/SnippetCard'

const Home = () => {
  return (
    <div className='flex flex-col w-full bg-gradient-to-br from-purple-600 via-blue-700 to-blue-9000 px-4 py-2'>
      <div className='flex items-center gap-3 bg-slate-200 p-2'>
          <Input type='text' placeholder='Enter snippet title' />
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
        </svg>
        <Button><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z" />
</svg>
Apply Filters</Button>
      </div>

      <div className='flex flex-col pt-4'>
        <SnippetCard />
        <SnippetCard />
        <SnippetCard />
        <SnippetCard />
        <SnippetCard />
        <SnippetCard />
      </div>

    </div>
  )
}

export default Home