"use client"
import React, { useState, useId } from 'react'
import styles from './index.module.scss'
import Link from 'next/link'


export default function TestResult() {

  return (
    <div className="container">
      <div className={styles.test}>
        <div className={`${styles.top} ${styles.orange}`}>
          <div className={styles.heading}>Test result</div>
          <div className={styles.points}><span className={styles.points__res}>21</span> / 30</div>
        </div>
        <div className={styles.recommendations}>
          <div className={styles.heading}>Your recommendations for this course</div>
          <div className={styles.items}>
            <Link href="/course/2/lesson" className={styles.item}>Basic concepts of web applications</Link>
            <Link href="/course/lesson/2" className={styles.item}>SQL Basics</Link>
            <Link href="/course/lesson/3" className={styles.item}>Work with MYSQL database</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
