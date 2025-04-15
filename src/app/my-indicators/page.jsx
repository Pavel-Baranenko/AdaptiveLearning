import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Indicators from '@/components/Indicators';
import React from 'react'

export const matadata = {
  title: `My indicators`
};


export default function IndicatorsPage() {

  return (
    <div className="wrapper">
      <Header />
      <Indicators />
      <Footer />
    </div>
  )
}
