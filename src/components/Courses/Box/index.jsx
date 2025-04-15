"use client"
import React from 'react'
import styles from '../index.module.scss'
import CourseCard from '../Card'


export default function Box({ type, teacher }) {

  let list = [
    {
      id: 1,
      theme: 'Progmramming Node.js',
      title: "Programming Node.js",
      author: "Pavel Barko",
      keywords: [],
      modules: [],
      points: 26
    },
  ]

  let recommended = {
    id: 2,
    theme: 'Recommended for you: Web Programming Fundamentals',
    title: "Recommended for you: Web Programming Fundamentals",
    author: "Auto Generated",
    keywords: [],
    modules: [],
    points: 10
  }



  return (
    <div className={styles.box}>
      {list.map(e => {
        return <CourseCard course={e} key={e.id} teacher={teacher} />
      })}
      {!teacher &&
        <CourseCard course={recommended} special />
      }
    </div>
  )
}



