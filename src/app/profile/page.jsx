'use client'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Profile from '@/components/Profile';
import React from 'react'

export const matadata = {
  title: `Profile`
};


export default function ProfilePage() {

  return (
    <div className="wrapper">
      <Header />
      <Profile />
      <Footer />
    </div>
  )
}
