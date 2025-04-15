import Course from '@/components/Courses/CoursePage';
import Footer from '@/components/Footer'
import Header from '@/components/Header'
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

      // modules: [
      //   {
      //     title: "PHP+MySQL",
      //     items: [
      //       {
      //         id: 1,
      //         title: 'Basic Concepts of Web Applications',
      //         type: "lesson"
      //       },
      //       {
      //         id: 2,
      //         title: 'Stages of Web-Oriented Information Systems Design',
      //         type: "lesson"
      //       },
      //       {
      //         id: 3,
      //         title: 'Designing Physical Data Models in MySQL DBMS',
      //         type: "lesson"
      //       },
      //       {
      //         id: 4,
      //         title: 'Basic SQL Language Operators',
      //         type: "lesson"
      //       },
      //       {
      //         id: 5,
      //         title: 'Database Creation',
      //         type: "resource"
      //       },
      //       {
      //         id: 6,
      //         title: 'Processing PHP Requests',
      //         type: "lesson"
      //       },
      //       {
      //         id: 7,
      //         title: 'PHP and MySQL Interaction',
      //         type: "lesson"
      //       },
      //       {
      //         id: 8,
      //         title: 'Data Retrieval from Database',
      //         type: "resource"
      //       },
      //       {
      //         id: 9,
      //         title: 'Displaying Data from Database',
      //         type: "resource"
      //       },
      //       {
      //         id: 10,
      //         title: 'Processing POST and GET Requests',
      //         type: "resource"
      //       },
      //       {
      //         id: 11,
      //         title: 'Adding Data to Database',
      //         type: "resource"
      //       },
      //       {
      //         id: 12,
      //         title: 'Modifying Data in Database',
      //         type: "resource"
      //       },
      //       {
      //         id: 12,
      //         title: 'Deleting Data from Database',
      //         type: "resource"
      //       },
      //       {
      //         id: 13,
      //         title: 'PHP Sessions',
      //         type: "lesson"
      //       },
      //       {
      //         id: 14,
      //         title: 'User Registration',
      //         type: "resource"
      //       },
      //       {
      //         id: 15,
      //         title: 'Authorization Using Sessions',
      //         type: "resource"
      //       },
      //       // {
      //       //   id: 16,
      //       //   title: 'Final Assignment',
      //       //   type: "assign"
      //       // },
      //       {
      //         id: 17,
      //         title: 'Final Test',
      //         type: "test"
      //       }
      //     ]
      //   }
      // ],
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
