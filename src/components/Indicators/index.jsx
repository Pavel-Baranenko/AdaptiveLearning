import React from 'react'
import styles from './index.module.scss'


const coursesReport = [
  {
    title: "Introduction to JavaScript",
    before: 24,
    after: 77,
    resolved: 6,
    unresolved: 3
  },
  {
    title: "Advanced Python Programming",
    before: 32,
    after: 85,
    resolved: 8,
    unresolved: 2
  },
  {
    title: "Data Structures and Algorithms",
    before: 18,
    after: 72,
    resolved: 5,
    unresolved: 4
  },
  {
    title: "Web Development Basics",
    before: 28,
    after: 81,
    resolved: 7,
    unresolved: 2
  },
  {
    title: "Machine Learning Fundamentals",
    before: 21,
    after: 68,
    resolved: 6,
    unresolved: 3
  },
  {
    title: "Database Design with SQL",
    before: 35,
    after: 89,
    resolved: 9,
    unresolved: 1
  },
  {
    title: "Mobile App Development (React Native)",
    before: 26,
    after: 74,
    resolved: 7,
    unresolved: 2
  },
  {
    title: "Cybersecurity Essentials",
    before: 30,
    after: 82,
    resolved: 8,
    unresolved: 1
  },
  {
    title: "UI/UX Design Principles",
    before: 22,
    after: 70,
    resolved: 6,
    unresolved: 3
  },
  {
    title: "Cloud Computing with AWS",
    before: 29,
    after: 78,
    resolved: 7,
    unresolved: 2
  }
];

const coursesProgress = [
  {
    title: "JavaScript Fundamentals",
    points: 65
  },
  {
    title: "Python for Beginners",
    points: 80
  },
  {
    title: "Web Design Basics",
    points: 45
  },
  {
    title: "Data Science Essentials",
    points: 72
  },
  {
    title: "Mobile App Development",
    points: 38
  },
  {
    title: "Cybersecurity 101",
    points: 90
  }
];

export default function Indicators(props) {

  const coloring = (number) => {
    if (number > 50) {
      if (number > 80) {
        return 'green'
      } else return 'yellow'
    }
    else if (number > 40) {
      return 'red__white'
    }
    else return 'red'
  }

  let point = 43

  return (
    <div className="container">
      <div className={styles.box}>
        <div className={`${styles.left} animate`}>
          <h2>Dynamics</h2>
          <div className="table">
            <div className="table__row table__head">
              <div className="table__column">Title</div>
              <div className="table__column">Before</div>
              <div className="table__column">After</div>
              <div className="table__column tac">Resolved / Unresolved</div>
            </div>
            {coursesReport.map((e, i) => {
              return (
                <div className="table__row" key={`${i}-courses-indicator`}>
                  <div className="table__column">{e.title}</div>
                  <div className="table__column">
                    <div className={`${styles.points}  ${styles[coloring(e.before)]}`}>
                      <div className={`${styles.points__line} line`} style={{
                        maxWidth: `${e.before}%`
                      }}></div>
                      <span>{e.before}%</span>
                    </div>
                  </div>
                  <div className="table__column">
                    <div className={`${styles.points}   ${styles[coloring(e.after)]}`}>
                      <div className={`${styles.points__line} line`} style={{
                        maxWidth: `${e.after}%`
                      }}></div>
                      <span>{e.after}%</span>
                    </div>
                  </div>
                  <div className="table__column tac">
                    <span className={styles.score}>
                      <span className={styles.green}>{e.resolved}</span>/
                      <span className={styles.red}>{e.unresolved}</span>
                    </span>
                  </div>
                </div>
              )
            })}
          </div>

        </div>
        <div className={`${styles.right} animate`}>
          <h4>Mastery</h4>
          <div className={styles.wrap}>
            <div className={styles.circle}>
              <svg className={styles.circle__points} viewBox="0 0 120 120">
                <circle className={styles.circle__bg} cx="60" cy="60" r="52" />
                <circle className={styles.circle__fill} cx="60" cy="60" r="52" style={{ strokeDashoffset: `calc(283 - (283 * 0.${point > 100 ? 100 : point}))` }} />
              </svg>
              <span>43%</span>
            </div>
            <div className={styles.info}>
              <span>Total: <strong>23</strong></span>
              <span>Mastered: <strong>14</strong></span>
              <span>Not started: <strong>9</strong></span>
            </div>
          </div>
          <h4>Progress</h4>
          <div className={styles.progress}>
            {coursesProgress.map((e, i) => {
              return (
                <div className="flex-box" key={`${i}-progress-tem`}>
                  <span>{e.title}</span>
                  <div className={`${styles.points}   ${styles[coloring(e.points)]}`}>
                    <div className={`${styles.points__line} line`} style={{
                      maxWidth: `${e.points}%`
                    }}></div>
                    <span>{e.points}%</span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div >
  )
}
