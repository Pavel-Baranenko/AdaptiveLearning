import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'
import lessons from '@/utils/courses.json'  assert {type: 'json'}



export default async function CoursePage({ params }) {
  const { id } = await params;
  const lesson = lessons[id - 1]

  return (
    <div className="wrapper">
      <Header />
      <div className="container">
        <div className="text-box">
          <h2>{lesson.title}</h2>
          {lesson.info.map((e, i) => {
            if (e.tag == 'p') {
              return (
                <p key={`lesson-text-${i}`}>{e.text}</p>
              )
            }
            else if (e.tag == 'h3') {
              return (
                <h3 key={`lesson-text-${i}`}>{e.text}</h3>
              )
            }
            else if (e.tag == 'code') {
              return (
                <code key={`lesson-text-${i}`}>{e.text}</code>
              )
            }
            else if (e.tag == 'ul') {
              return (
                <ul key={`lesson-text-list-${i}`}>
                  {e.points.map((p, j) => {
                    return (
                      <li key={`lesson-text-list-item-${j}`}>{p.text}</li>
                    )
                  })}
                </ul>
              )
            }
            else if (e.tag == 'img') {
              return (
                <img src={e.url} alt="" key={`lesson-img-${i}`} />
              )
            }
          })
          }
        </div>
      </div>
      <Footer />
    </div>
  )
}
