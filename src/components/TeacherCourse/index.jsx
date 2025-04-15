'use client'
import React, { useState } from 'react'
import { reportsList, adminList, events, marks, usersArray } from '@/utils/constants'
import styles from "./index.module.scss"


export default function TeacherCourse() {
  const [open, setOpen] = useState(true)
  const [reports, setReports] = useState(false)
  const [visible, setVisible] = useState(false)
  const [opened, setOpened] = useState('General')
  const [startDate, setStartDate] = useState()
  const [endDate, setEndDate] = useState()


  return (
    <div className="container">
      <div className={styles.wrap}>
        <div className={styles.top}>
          <h1>Node.js programming</h1>
          <i>Pavel Barko</i>
        </div>
        <div className={styles.box}>
          <div className={styles.left}>
            <div className={styles.heading}>Administration</div>
            <div className='accordion'>
              <div className={`accordion__top`}>
                <span>Course administration</span>
                <svg className={`${open && 'open'}`} width="29" height="15" viewBox="0 0 29 15" fill="none" onClick={() => setOpen(!open)}>
                  <g clip-path="url(#clip0_271_53)">
                    <rect width="29" height="15" fill="white" />
                    <path d="M1.41421 15.1421L14.1421 2.41417L26.8701 15.1421L14.1421 27.87L1.41421 15.1421Z" stroke="#0079B2" stroke-width="2" />
                  </g>
                  <defs>
                    <clipPath id="clip0_271_53">
                      <rect width="29" height="15" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className={`accordion__box ${open && 'open'}`}>
                {adminList.map((e, i) => {
                  return (
                    <span key={`${i}-menu-item`} className='accordion__item' onClick={() => setOpened(e)}>{e}</span>
                  )
                })}
                <div className='accordion accordion__item'>
                  <div className={`accordion__top`}>
                    <span onClick={() => setOpened('Reports')}>Reports</span>
                    <svg className={`${reports && 'open'}`} width="29" height="15" viewBox="0 0 29 15" fill="none" onClick={() => setReports(!reports)}>
                      <g clip-path="url(#clip0_271_53)">
                        <rect width="29" height="15" fill="white" />
                        <path d="M1.41421 15.1421L14.1421 2.41417L26.8701 15.1421L14.1421 27.87L1.41421 15.1421Z" stroke="#0079B2" stroke-width="2" />
                      </g>
                      <defs>
                        <clipPath id="clip0_271_53">
                          <rect width="29" height="15" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div className={`accordion__box ${reports && 'open'}`}>
                    {reportsList.map((e, i) => {
                      return (
                        <span key={`${i}-reports-item`} className='accordion__item' onClick={() => setOpened(e)}>{e}</span>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={`${styles.right}`}>
            <h6>{opened}</h6>
            {opened == 'Reports' &&
              <div className={styles.reports}>
                {reportsList.map((e, i) => {
                  return (
                    <span className={styles.reports__item} key={`${i}-reports-list-item`} onClick={() => setOpened(e)}>{e}</span>
                  )
                })}
              </div>
            }
            {opened == 'General' &&
              <div className={styles.general}>
                <div className={styles.university}>
                  <span>DON STATE TECHNICAL UNIVERSITY</span>
                  <strong>Node.js programming</strong>
                  <p>
                    Direction: 09.03.02 Information Systems and Technologies
                    <br />
                    Form of study: full-time
                  </p>
                </div>
                <div className={styles.general__item}>
                  <svg viewBox="0 0 24 24" ><path d="M20,22H5a1,1,0,0,1-1-1V3A1,1,0,0,1,5,2H20a1,1,0,0,1,1,1V18a1,1,0,0,1-2,0V4H6V20H20a1,1,0,0,1,0,2Z" /><path d="M7,7H3A1,1,0,0,1,3,5H7A1,1,0,0,1,7,7Z" /><path d="M7,11H3A1,1,0,0,1,3,9H7a1,1,0,0,1,0,2Z" /><path d="M7,15H3a1,1,0,0,1,0-2H7a1,1,0,0,1,0,2Z" /><path d="M7,19H3a1,1,0,0,1,0-2H7a1,1,0,0,1,0,2Z" /><path d="M15,11H11a1,1,0,0,1,0-2h4a1,1,0,0,1,0,2Z" /><path d="M15,15H11a1,1,0,0,1,0-2h4a1,1,0,0,1,0,2Z" /></svg>
                  <span>Lecture 1. Basic concepts of web applications</span>
                </div>
                <div className={styles.general__item}>
                  <svg viewBox="0 0 24 24" ><path d="M20,22H5a1,1,0,0,1-1-1V3A1,1,0,0,1,5,2H20a1,1,0,0,1,1,1V18a1,1,0,0,1-2,0V4H6V20H20a1,1,0,0,1,0,2Z" /><path d="M7,7H3A1,1,0,0,1,3,5H7A1,1,0,0,1,7,7Z" /><path d="M7,11H3A1,1,0,0,1,3,9H7a1,1,0,0,1,0,2Z" /><path d="M7,15H3a1,1,0,0,1,0-2H7a1,1,0,0,1,0,2Z" /><path d="M7,19H3a1,1,0,0,1,0-2H7a1,1,0,0,1,0,2Z" /><path d="M15,11H11a1,1,0,0,1,0-2h4a1,1,0,0,1,0,2Z" /><path d="M15,15H11a1,1,0,0,1,0-2h4a1,1,0,0,1,0,2Z" /></svg>
                  <span>Lecture 2. Stages in the design of web-based information systems</span>
                </div>
                <div className={styles.general__item}>
                  <svg viewBox="0 0 24 24" ><g data-name="Layer 2" id="Layer_2"><path d="M21,2H3A1,1,0,0,0,2,3V21a1,1,0,0,0,1,1H21a1,1,0,0,0,1-1V3A1,1,0,0,0,21,2ZM9,5h2V7H9ZM7,19H5V17H7ZM7,7H5V5H7Zm4,12H9V17h2Zm4,0H13V17h2Zm-.4-6.2-4,3a1,1,0,0,1-1.05.09A1,1,0,0,1,9,15V9a1,1,0,0,1,1.6-.8l4,3a1,1,0,0,1,0,1.6ZM15,7H13V5h2Zm4,12H17V17h2ZM19,7H17V5h2Z" /></g></svg>
                  <a href='https://wit-hdip-comp-sci-2018.github.io/database/topic-07-Physical/talk-2/talk-2.pdf'>PDF Designing physical data models in MySQL DBMS</a>
                </div>
                <div className={styles.general__item}>
                  <svg enableBackground="new 0 0 800 800" height="800px" id="GUIDE" version="1.1" viewBox="0 0 800 800" width="800px" ><g><path d="M676.637,183.386c0.002-0.002,0.004-0.004,0.005-0.005L522.549,29.287c-3.619-3.62-8.62-5.86-14.145-5.86H137.5   c-11.046,0-20,8.954-20,20v713.146c0,11.046,8.954,20,20,20h525c11.046,0,20-8.954,20-20V197.522   C682.5,192.407,680.426,187.203,676.637,183.386z M642.5,736.573h-485V63.427h342.62l114.096,114.095l-85.812,0v-41.788   c0-11.046-8.954-20-20-20s-20,8.954-20,20v61.788c0,11.046,8.954,20,20,20c0,0,92.404,0,134.096,0V736.573z" /><path d="M295.217,224.417l-39.854,39.855l-5.697-5.697c-7.811-7.811-20.473-7.811-28.283,0c-7.811,7.81-7.811,20.473,0,28.284   l19.84,19.84c3.75,3.751,8.838,5.858,14.142,5.858c5.305,0,10.392-2.107,14.143-5.858l53.996-53.999   c7.81-7.811,7.81-20.474-0.001-28.284C315.69,216.606,303.027,216.606,295.217,224.417z" /><path d="M557.831,312.557h6.646c11.046,0,20-8.954,20-20s-8.954-20-20-20h-6.646c-11.046,0-20,8.954-20,20   S546.785,312.557,557.831,312.557z" /><path d="M367.389,272.557c-11.046,0-20,8.954-20,20s8.954,20,20,20h129.609c11.046,0,20-8.954,20-20s-8.954-20-20-20H367.389z" /><path d="M557.831,435.552h6.646c11.046,0,20-8.954,20-20s-8.954-20-20-20h-6.646c-11.046,0-20,8.954-20,20   S546.785,435.552,557.831,435.552z" /><path d="M496.998,395.552H367.389c-11.046,0-20,8.954-20,20s8.954,20,20,20h129.609c11.046,0,20-8.954,20-20   S508.044,395.552,496.998,395.552z" /><path d="M557.831,558.547h6.646c11.046,0,20-8.954,20-20s-8.954-20-20-20h-6.646c-11.046,0-20,8.954-20,20   S546.785,558.547,557.831,558.547z" /><path d="M496.998,518.547H367.389c-11.046,0-20,8.954-20,20s8.954,20,20,20h129.609c11.046,0,20-8.954,20-20   S508.044,518.547,496.998,518.547z" /><path d="M557.831,681.542h6.646c11.046,0,20-8.954,20-20s-8.954-20-20-20h-6.646c-11.046,0-20,8.954-20,20   S546.785,681.542,557.831,681.542z" /><path d="M496.998,641.542H367.389c-11.046,0-20,8.954-20,20s8.954,20,20,20h129.609c11.046,0,20-8.954,20-20   S508.044,641.542,496.998,641.542z" /><path d="M255.363,435.552c5.304,0,10.392-2.107,14.142-5.858l53.996-53.996c7.811-7.811,7.811-20.475,0-28.285   s-20.473-7.811-28.283,0l-39.854,39.855l-5.697-5.698c-7.81-7.81-20.474-7.812-28.284-0.001s-7.811,20.474-0.001,28.284   l19.84,19.841C244.972,433.444,250.059,435.552,255.363,435.552z" /><path d="M234.239,511.547l-12.856,12.857c-7.81,7.811-7.81,20.474,0.001,28.284c3.905,3.905,9.023,5.857,14.142,5.857   s10.237-1.952,14.143-5.858l12.855-12.855l12.856,12.855c3.904,3.906,9.023,5.858,14.142,5.858s10.237-1.952,14.142-5.858   c7.811-7.811,7.811-20.473,0-28.283l-12.855-12.857l12.856-12.857c7.81-7.811,7.81-20.474-0.001-28.284   c-7.811-7.81-20.474-7.81-28.284,0.001l-12.856,12.856l-12.857-12.856c-7.811-7.811-20.473-7.811-28.283,0s-7.811,20.474,0,28.283   L234.239,511.547z" /><path d="M295.217,593.4l-39.854,39.855l-5.697-5.697c-7.811-7.811-20.473-7.811-28.283,0c-7.811,7.81-7.811,20.473,0,28.283   l19.84,19.84c3.75,3.752,8.838,5.858,14.142,5.858c5.305,0,10.392-2.107,14.143-5.858l53.996-53.998   c7.81-7.811,7.81-20.474-0.001-28.284C315.69,585.59,303.027,585.59,295.217,593.4z" /></g></svg>
                  <span>Test</span>
                </div>
              </div>
            }
            {opened == 'Settings' &&
              <div className={styles.settings}>
                <div className={styles.settings__item}>
                  <span>Full course title</span>
                  <input type="text" />
                </div>
                <div className={styles.settings__item}>
                  <span>Short course title</span>
                  <input type="text" />
                </div>
                <div className={styles.settings__item__box}>
                  <span>Course visibility</span>
                  <div className="switcher">
                    <input type="checkbox" id='switcher-visible' checked={visible} />
                    <label htmlFor="switcher-visible" onClick={() => setVisible(!visible)}></label>
                  </div>
                  <span>{visible ? "Show" : "Not show"}</span>
                </div>
                <div className={styles.settings__item__box}>
                  <span className={styles.first}>Start date</span>
                  <div className="date-input">
                    <input type="date" id='date-input' value={startDate} onChange={(e) => setStartDate(e.target.value)} />
                    <label htmlFor="date-input">
                      <svg viewBox="0 0 24 24">
                        <path fill='#0079B2' d="M20,2H19V1a1,1,0,0,0-2,0V2H7V1A1,1,0,0,0,5,1V2H4A4,4,0,0,0,0,6V20a4,4,0,0,0,4,4H20a4,4,0,0,0,4-4V6A4,4,0,0,0,20,2Zm2,18a2,2,0,0,1-2,2H4a2,2,0,0,1-2-2V6A2,2,0,0,1,4,4H5V5A1,1,0,0,0,7,5V4H17V5a1,1,0,0,0,2,0V4h1a2,2,0,0,1,2,2Z" />
                        <path fill='#0079B2' d="M19,7H5A1,1,0,0,0,5,9H19a1,1,0,0,0,0-2Z" />
                        <path fill='#0079B2' d="M7,12H5a1,1,0,0,0,0,2H7a1,1,0,0,0,0-2Z" />
                        <path fill='#0079B2' d="M7,17H5a1,1,0,0,0,0,2H7a1,1,0,0,0,0-2Z" />
                        <path fill='#0079B2' d="M13,12H11a1,1,0,0,0,0,2h2a1,1,0,0,0,0-2Z" />
                        <path fill='#0079B2' d="M13,17H11a1,1,0,0,0,0,2h2a1,1,0,0,0,0-2Z" />
                        <path fill='#0079B2' d="M19,12H17a1,1,0,0,0,0,2h2a1,1,0,0,0,0-2Z" />
                        <path fill='#0079B2' d="M19,17H17a1,1,0,0,0,0,2h2a1,1,0,0,0,0-2Z" />
                      </svg>
                    </label>
                  </div>
                  <span>{startDate}</span>
                </div>
                <div className={styles.settings__item__box}>
                  <span className={styles.first}>End date</span>
                  <div className="date-input">
                    <input type="date" id='date-input' value={endDate} onChange={(e) => setEndDate(e.target.value)} />
                    <label htmlFor="date-input">
                      <svg viewBox="0 0 24 24">
                        <path fill='#0079B2' d="M20,2H19V1a1,1,0,0,0-2,0V2H7V1A1,1,0,0,0,5,1V2H4A4,4,0,0,0,0,6V20a4,4,0,0,0,4,4H20a4,4,0,0,0,4-4V6A4,4,0,0,0,20,2Zm2,18a2,2,0,0,1-2,2H4a2,2,0,0,1-2-2V6A2,2,0,0,1,4,4H5V5A1,1,0,0,0,7,5V4H17V5a1,1,0,0,0,2,0V4h1a2,2,0,0,1,2,2Z" />
                        <path fill='#0079B2' d="M19,7H5A1,1,0,0,0,5,9H19a1,1,0,0,0,0-2Z" />
                        <path fill='#0079B2' d="M7,12H5a1,1,0,0,0,0,2H7a1,1,0,0,0,0-2Z" />
                        <path fill='#0079B2' d="M7,17H5a1,1,0,0,0,0,2H7a1,1,0,0,0,0-2Z" />
                        <path fill='#0079B2' d="M13,12H11a1,1,0,0,0,0,2h2a1,1,0,0,0,0-2Z" />
                        <path fill='#0079B2' d="M13,17H11a1,1,0,0,0,0,2h2a1,1,0,0,0,0-2Z" />
                        <path fill='#0079B2' d="M19,12H17a1,1,0,0,0,0,2h2a1,1,0,0,0,0-2Z" />
                        <path fill='#0079B2' d="M19,17H17a1,1,0,0,0,0,2h2a1,1,0,0,0,0-2Z" />
                      </svg>
                    </label>
                  </div>
                  <span>{endDate}</span>
                </div>
                <div className={styles.settings__item}>
                  <span>Course identification number</span>
                  <input type="text" />
                </div>
                <div className={styles.settings__item}>
                  <span>Course Description</span>
                  <textarea type="text" />
                </div>
                <div className={styles.settings__bottom}>
                  <button className="blue-btn" onClick={() => setOpened('General')}>Save</button>
                </div>
              </div>
            }
            {opened == 'Overall statistics' &&
              <div className={styles.statistics}>
                <h6>Number of course users</h6>
                <img src="/img/grafic.png" alt="" />
              </div>
            }
            {opened == 'Users' &&
              <div className="table users">
                <div className="table__row table__head">
                  <div className="table__column">Name</div>
                  <div className="table__column">Starting date
                    <div className="date-input">
                      <input type="date" id='date-input' />
                      <label htmlFor="date-input">
                        <svg viewBox="0 0 24 24">
                          <path fill='#0079B2' d="M20,2H19V1a1,1,0,0,0-2,0V2H7V1A1,1,0,0,0,5,1V2H4A4,4,0,0,0,0,6V20a4,4,0,0,0,4,4H20a4,4,0,0,0,4-4V6A4,4,0,0,0,20,2Zm2,18a2,2,0,0,1-2,2H4a2,2,0,0,1-2-2V6A2,2,0,0,1,4,4H5V5A1,1,0,0,0,7,5V4H17V5a1,1,0,0,0,2,0V4h1a2,2,0,0,1,2,2Z" />
                          <path fill='#0079B2' d="M19,7H5A1,1,0,0,0,5,9H19a1,1,0,0,0,0-2Z" />
                          <path fill='#0079B2' d="M7,12H5a1,1,0,0,0,0,2H7a1,1,0,0,0,0-2Z" />
                          <path fill='#0079B2' d="M7,17H5a1,1,0,0,0,0,2H7a1,1,0,0,0,0-2Z" />
                          <path fill='#0079B2' d="M13,12H11a1,1,0,0,0,0,2h2a1,1,0,0,0,0-2Z" />
                          <path fill='#0079B2' d="M13,17H11a1,1,0,0,0,0,2h2a1,1,0,0,0,0-2Z" />
                          <path fill='#0079B2' d="M19,12H17a1,1,0,0,0,0,2h2a1,1,0,0,0,0-2Z" />
                          <path fill='#0079B2' d="M19,17H17a1,1,0,0,0,0,2h2a1,1,0,0,0,0-2Z" />
                        </svg>
                      </label>
                    </div>
                  </div>
                  <div className="table__column">E-mail</div>
                  <div className="table__column">Role</div>
                  <div className="table__column">Group</div>
                  <div className="table__column">Status</div>
                </div>
                {usersArray.map((e, i) => {
                  return (
                    <div className="table__row" key={`${i}-users-item`}>
                      <div className="table__column">{e.first_name} {e.last_name}</div>
                      <div className="table__column">{e.date}</div>
                      <div className="table__column">{e.email}</div>
                      <div className="table__column">{e.role}</div>
                      <div className="table__column">{e.group}</div>
                      <div className="table__column"><span className={e.status}>{(e.status).toUpperCase()}</span></div>
                    </div>
                  )
                })}
              </div>
            }
            {opened == 'Statement of current course grades' &&
              <div className="table">
                <div className="table__row table__head">
                  <div className="table__column">Name</div>
                  <div className="table__column">E-mail</div>
                  <div className="table__column">Test grade</div>
                  <div className="table__column">Final grade for the course</div>
                </div>
                {marks.map((e, i) => {
                  return (
                    <div className="table__row" key={`${i}-users-item`}>
                      <div className="table__column">{e.first_name} {e.last_name}</div>
                      <div className="table__column">{e.email}</div>
                      <div className="table__column">{e.test_grade}</div>
                      <div className="table__column">{e.course_grade}</div>
                    </div>
                  )
                })}
              </div>
            }
            {opened == 'Events Log' &&
              <div className="table r6">
                <div className="table__row table__head">
                  <div className="table__column">Time
                    <div className="date-input">
                      <input type="date" id='date-input' />
                      <label htmlFor="date-input">
                        <svg viewBox="0 0 24 24">
                          <path fill='#0079B2' d="M20,2H19V1a1,1,0,0,0-2,0V2H7V1A1,1,0,0,0,5,1V2H4A4,4,0,0,0,0,6V20a4,4,0,0,0,4,4H20a4,4,0,0,0,4-4V6A4,4,0,0,0,20,2Zm2,18a2,2,0,0,1-2,2H4a2,2,0,0,1-2-2V6A2,2,0,0,1,4,4H5V5A1,1,0,0,0,7,5V4H17V5a1,1,0,0,0,2,0V4h1a2,2,0,0,1,2,2Z" />
                          <path fill='#0079B2' d="M19,7H5A1,1,0,0,0,5,9H19a1,1,0,0,0,0-2Z" />
                          <path fill='#0079B2' d="M7,12H5a1,1,0,0,0,0,2H7a1,1,0,0,0,0-2Z" />
                          <path fill='#0079B2' d="M7,17H5a1,1,0,0,0,0,2H7a1,1,0,0,0,0-2Z" />
                          <path fill='#0079B2' d="M13,12H11a1,1,0,0,0,0,2h2a1,1,0,0,0,0-2Z" />
                          <path fill='#0079B2' d="M13,17H11a1,1,0,0,0,0,2h2a1,1,0,0,0,0-2Z" />
                          <path fill='#0079B2' d="M19,12H17a1,1,0,0,0,0,2h2a1,1,0,0,0,0-2Z" />
                          <path fill='#0079B2' d="M19,17H17a1,1,0,0,0,0,2h2a1,1,0,0,0,0-2Z" />
                        </svg>
                      </label>
                    </div>
                  </div>
                  <div className="table__column">User name</div>
                  <div className="table__column">Event Context</div>
                  <div className="table__column">Event title</div>
                  <div className="table__column">Component</div>
                  <div className="table__column">Description</div>
                </div>
                {events.map((e, i) => {
                  return (
                    <div className="table__row" key={`${i}-event-item`}>
                      <div className="table__column">{e.dateTime}</div>
                      <div className="table__column">{e.first_name} {e.last_name}</div>
                      <div className="table__column">{e.context}</div>
                      <div className="table__column">{e.title}</div>
                      <div className="table__column">{e.component}</div>
                      <div className="table__column">{e.description}</div>
                    </div>
                  )
                })}
              </div>
            }
            {
              opened == 'Time taken to complete the course' &&
              <div className="table">
                <div className="table__row table__head">
                  <div className="table__column">Group</div>
                  <div className="table__column">Date
                    <div className="date-input">
                      <input type="date" id='date-input' />
                      <label htmlFor="date-input">
                        <svg viewBox="0 0 24 24">
                          <path fill='#0079B2' d="M20,2H19V1a1,1,0,0,0-2,0V2H7V1A1,1,0,0,0,5,1V2H4A4,4,0,0,0,0,6V20a4,4,0,0,0,4,4H20a4,4,0,0,0,4-4V6A4,4,0,0,0,20,2Zm2,18a2,2,0,0,1-2,2H4a2,2,0,0,1-2-2V6A2,2,0,0,1,4,4H5V5A1,1,0,0,0,7,5V4H17V5a1,1,0,0,0,2,0V4h1a2,2,0,0,1,2,2Z" />
                          <path fill='#0079B2' d="M19,7H5A1,1,0,0,0,5,9H19a1,1,0,0,0,0-2Z" />
                          <path fill='#0079B2' d="M7,12H5a1,1,0,0,0,0,2H7a1,1,0,0,0,0-2Z" />
                          <path fill='#0079B2' d="M7,17H5a1,1,0,0,0,0,2H7a1,1,0,0,0,0-2Z" />
                          <path fill='#0079B2' d="M13,12H11a1,1,0,0,0,0,2h2a1,1,0,0,0,0-2Z" />
                          <path fill='#0079B2' d="M13,17H11a1,1,0,0,0,0,2h2a1,1,0,0,0,0-2Z" />
                          <path fill='#0079B2' d="M19,12H17a1,1,0,0,0,0,2h2a1,1,0,0,0,0-2Z" />
                          <path fill='#0079B2' d="M19,17H17a1,1,0,0,0,0,2h2a1,1,0,0,0,0-2Z" />
                        </svg>
                      </label>
                    </div>
                  </div>
                  <div className="table__column">Type</div>
                  <div className="table__column">Time</div>
                </div>
                <div className="table__row ">
                  <div className="table__column">ITMO33</div>
                  <div className="table__column">10.04.2025</div>
                  <div className="table__column"></div>
                  <div className="table__column">35 min</div>
                </div>
                <div className="table__row ">
                  <div className="table__column">WIAS33</div>
                  <div className="table__column">10.04.2025</div>
                  <div className="table__column"></div>
                  <div className="table__column">32 min</div>
                </div>
                <div className="table__row ">
                  <div className="table__column">MKIS33</div>
                  <div className="table__column">10.04.2025</div>
                  <div className="table__column"></div>
                  <div className="table__column">35 min</div>
                </div>
              </div>
            }
          </div>
        </div>
      </div>
    </div>
  )
}
