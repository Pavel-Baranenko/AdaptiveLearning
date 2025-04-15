'use client'
import React, { useState } from 'react'
import { useAuth } from '@/store/user/AuthProvider';
import styles from '../index.module.scss'


export default function SettingPage() {
  const { user } = useAuth()
  const [email, setEmail] = useState(true)
  const [news, setNews] = useState(false)
  const [courses, setCourses] = useState(false)



  return (
    <div className="container">
      <div className={`${styles.settings} animate`}>
        <div className={styles.settings__item}>
          <div className="flex-box">
            <span>Receive notifications by e-mail {user?.email}</span>
            <div className="switcher">
              <input type="checkbox" id='switcher-email' checked={email} />
              <label htmlFor="switcher-email" onClick={() => setEmail(!email)}></label>
            </div>
          </div>
          <div className="flex-box">
            <span>Get community news</span>
            <div className="switcher">
              <input type="checkbox" id='switcher-news' checked={news} />
              <label htmlFor="switcher-news" onClick={() => setNews(!news)}></label>
            </div>
          </div>
          <div className="flex-box">
            <span>Receive notifications about new courses</span>
            <div className="switcher">
              <input type="checkbox" id='switcher-courses' checked={courses} />
              <label htmlFor="switcher-courses" onClick={() => setCourses(!courses)}></label>
            </div>
          </div>
        </div>
        <div className={styles.settings__item}>
          <div className="flex-box">
            <span>Delete account</span>
            <button className="blue-btn">Delete</button>
          </div>
        </div>
      </div>
    </div>
  )
}
