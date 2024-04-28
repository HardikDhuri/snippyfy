import { SignIn } from '@clerk/nextjs'
import React from 'react'

const SignInPage = () => {
  return (
    <main className='flex h-screen w-full items-center justify-center bg-gradient-to-tr from-teal-900 via-purple-700 to-blue-900'>
        <SignIn />
    </main>
  )
}

export default SignInPage