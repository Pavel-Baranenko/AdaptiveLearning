import Footer from '@/components/Footer'
import Header from '@/components/Header'
import TeacherCourse from '@/components/TeacherCourse'
import React from 'react'

export default async function CoursePage({ params }) {
  let list = [
    {
      id: 1,
      theme: 'Business communication',
      author: 'Department of Documentation and Language Communication',
      keywords: [],
      modules: [],
      points: 10
    },
    {
      id: 2,
      theme: 'Progmramming Node.js',
      author: 'Digital Culture Center',
      keywords: [],
      modules: [
        {
          title: "Node+MySQL",
          items: [
            {
              id: 1,
              title: 'Basic concepts of web applications',
              type: "lesson"
            },
            {
              id: 2,
              title: 'Stages in the design of web-based information systems',
              type: "lesson"
            },
            {
              id: 3,
              title: 'Designing physical data models in MySQL DBMS',
              type: "lesson"
            },
            {
              id: 5,
              title: 'Database creation',
              type: "resource"
            },

            {
              id: 14,
              title: 'User registration',
              type: "resource"
            },
            {
              id: 15,
              title: 'Authorization using sessions',
              type: "resource"
            },
            {
              id: 17,
              title: 'Test',
              type: "test"
            }
          ]
        }
      ],
      points: 26,
    },
    {
      id: 3,
      theme: 'Information systems tools',
      author: 'Stupina Maria Valeryevna',
      keywords: [],
      modules: [],
      points: 75
    },
    {
      id: 4,
      theme: 'Methods and means of solving standard tasks of professional activity',
      author: 'Department of Information Technology',
      keywords: [],
      modules: [],
      points: 0
    },
  ]

  return (
    <div className="wrapper">
      <Header />
      {/* <Course course={opened} /> */}
      <TeacherCourse />
      <Footer />
    </div>
  )
}
