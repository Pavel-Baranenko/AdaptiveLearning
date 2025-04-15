import React from 'react'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import SettingPage from '@/components/Profile/settings'


export default function Settings() {

  return (
    <div className="wrapper">
      <Header />
      <SettingPage />
      <Footer />
    </div>
  )
}
