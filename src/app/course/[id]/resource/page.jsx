import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'

export default async function LessonPage() {


  return (
    <div className="wrapper">
      <Header />
      <div className="container">
        <div className="resource"><iframe width="720" height="650" src="https://rutube.ru/play/embed/613e5991f5b4b12061acf4abeb6210eb/" frameBorder="0" allow="clipboard-write; autoplay" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
        </div>
      </div>
      <Footer />
    </div>
  )
}
