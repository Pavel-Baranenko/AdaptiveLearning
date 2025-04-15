"use client"
import React, { useState, useId } from 'react'
import styles from './index.module.scss'
import Link from 'next/link'


export default function Test({ test }) {
  const [checked, setChecked] = useState([])

  const CheckQuestion = (index) => {
    let temp = [...checked]
    temp.push(index)
    setChecked(Array.from(new Set(temp)))
  }

  let a = [1, 2, 3, 4, 5]

  const q = useId()

  const renderQuestion = (question, i) => {
    if (question.type == 'radio') {
      return (
        <div className={styles.question__box}>
          {question.items.map((e, index) => {
            return (
              <div className={`${styles.question__item} input-radio`} key={`${q}-question-${i}-${index}`}>
                <input type="radio" id={`${q}-answer-${i}-${index}`} name={`question-${i}`} />
                <label htmlFor={`${q}-answer-${i}-${index}`}
                >{e}</label>
              </div>
            )
          })
          }
        </div>
      )
    }
    else if (question.type == 'checkbox') {
      return (
        <div className={styles.question__box}>
          {question.items.map((e, index) => {
            return (
              <div className={`${styles.question__item} input-checkbox`} key={`${q}-question-${i}-${index}`}>
                <input type="checkbox" id={`${q}-answer-${i}-${index}`} name={`question-${i}`} />
                <label htmlFor={`${q}-answer-${i}-${index}`}>{e}</label>
              </div>
            )
          })
          }
        </div>
      )
    }
    else if (question.type == 'input') {
      return (
        <div className={styles.question__box}>
          <input type="text" className={styles.question__input} />
        </div>
      )
    }
    else if (question.type == 'matching') {
      return (
        <div className={styles.question__box}>
          {question.items.map((e, index) => {
            return (
              <div className={`${styles.question__item} input-checkbox`} key={`${q}-question-${i}-${index}`}>
                <p>{e}</p>
                <select name={`${q}-question-${i}-${index}`} id={`${q}-question-${i}-${index}`}>
                  {question.values.map((v, j) => {
                    return <option value={v} key={`${j}-${i}-option`}>{v}</option>
                  })}
                </select>
              </div>
            )
          })}
        </div>
      )
    }
  }

  return (
    <div className="container">
      <div className={styles.top}>
        <h1>{test.title}</h1>
        <i>{test.author}</i>
      </div>
      <div className={styles.box}>
        <div className={styles.menu}>
          {test.questions.map((e, index) => {
            return (
              <div className={styles.menu__item + ' ' + (checked.includes(index) ? styles.check : "")} key={`${index}-menu-item`} onClick={() => CheckQuestion(index)}>{index + 1}</div>
            )
          })}
        </div>
        <div className={styles.questions}>
          {test.questions.map((e, index) => {
            return (
              <div className={styles.question} key={`${q}-${index}`}>
                <span className={styles.question__head}>{index + 1}. {e.heading}</span>
                <div className={styles.question__box}>{renderQuestion(e, index)}</div>
              </div>
            )
          })}
          <Link href='./test/result' className={`blue-btn ${styles.end}`}>End test</Link>
        </div>
      </div>
    </div>
  )
}
