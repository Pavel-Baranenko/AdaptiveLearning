import Course from '@/components/Courses/CoursePage';
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'

export default async function CoursePage({ params }) {
  let list = [
    {
      id: 1,
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
              id: 4,
              title: 'Database creation',
              type: "resource"
            },
            {
              id: 5,
              title: 'User registration',
              type: "resource"
            },
            {
              id: 6,
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
      ]
    },
    {
      id: 2,
      theme: 'Recommended for you: Web Programming Fundamentals',
      title: "Recommended for you: Web Programming Fundamentals",
      author: "Auto Generated",
      keywords: [],
      modules: [
        {
          title: "Node+MySQL",
          items: [
            {
              id: 4,
              title: 'Introduction to Database Creation',
              type: "lesson"
            },
            {
              id: 7,
              title: 'HTML & CSS Fundamentals',
              type: "lesson"
            },
            {
              id: 8,
              title: 'Authentication & Security Fundamentals',
              type: "lesson"
            },
            {
              id: 17,
              title: 'Test',
              type: "test"
            }
          ]
        }
      ]
    }
  ]

  const { id } = await params;
  const opened = list.find(e => e.id == id)

  return (
    <div className="wrapper">
      <Header />
      <Course course={opened} />
      <Footer />
    </div>
  )
}
