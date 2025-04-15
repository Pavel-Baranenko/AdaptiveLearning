import React from 'react'
import styles from '../index.module.scss'
import Link from 'next/link'


export default function CourseCard({ course, teacher, special }) {
  return (
    <div className={`${styles.course} ${special ? styles.special : ""}`}>
      <div className={styles.course__info}>
        <span className={styles.course__author}>{course.author}</span>
        {teacher ?
          <Link href={`/course/teacher`} className={styles.course__title}>{course.theme}</Link> :
          <Link href={`/course/${course.id}`} className={styles.course__title}>{course.theme}</Link>
        }
      </div>
      {!teacher &&
        <span className={styles.course__points} >
          <div className={styles.points}>
            <div className={styles.points__line} style={{ maxWidth: `${course.points}%` }}></div>
          </div>
          <i>{course.points}% completed</i>
        </span>
      }
    </div >
  )
}
