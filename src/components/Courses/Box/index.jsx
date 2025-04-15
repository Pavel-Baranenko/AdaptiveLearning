"use client"
import React from 'react'
import styles from '../index.module.scss'
import CourseCard from '../Card'


export default function Box({ type, teacher }) {

  let list = [
    {
      id: 2,
      theme: 'Progmramming Node.js',
      title: "Programming Node.js",
      author: "Pavel Barko",
      keywords: [],
      modules: [],
      points: 26
    },
  ]

  return (
    <div className={styles.box}>
      {list.map(e => {
        return <CourseCard course={e} key={e.id} teacher={teacher} />
      })}
    </div>
  )
}



