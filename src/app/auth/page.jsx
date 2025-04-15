import AuthForm from '@/components/AuthForm'
import React, { Suspense } from 'react'

export const metadata = {
  title: "Login in system"
}

export default function AuthPage() {
  return (
    <div className="wrapper">
      <Suspense>
        <AuthForm />
      </Suspense>
    </div>
  )
}
