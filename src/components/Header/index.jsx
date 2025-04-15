"use client"
import React, { useState } from 'react'
import styles from './index.module.scss'
import Link from 'next/link'
import { useAuth } from '@/store/user/AuthProvider';


export default function Header() {
  const { isAuth, user } = useAuth();
  const [openMenu, setOpenMenu] = useState(false)
  const Logout = () => {
    localStorage.removeItem('auth-storage')
    location.replace('/auth?open=login');
  }
  return (
    <header className={styles.box}>
      <Link href='/' className={styles.logo}>
        <svg id="Layer_1_1_" version="1.1" viewBox="0 0 16 16"  ><polygon points="0,5 8,9 15,5.5 15,14 16,14 16,5 8,1 " fill='#0079B2' /><polygon points="3,7.059 3,11.5 8,14 13,11.5 13,7.059 8,9.559 " fill='#08618b' /></svg>
      </Link>
      <nav className={styles.nav}>
        <Link href='/teacher'>My assignment</Link>
        <Link href='/'>Theoretical materials</Link>
        <Link href='/my-indicators'>My indicators</Link>
      </nav>
      <div className={styles.user}>
        {isAuth ?
          <div className={styles.user__info} >
            <span>{user.first_name} {user.last_name}</span>
            <button className={styles.user__avatar} onClick={() => setOpenMenu(!openMenu)}>
              <img src={user.avatar || 'https://cdn-icons-png.flaticon.com/512/8165/8165211.png'} alt="" />
            </button>
            {openMenu
              &&
              <div className={styles.menu} onMouseLeave={() => setOpenMenu(false)}>
                <Link href="/profile" className={styles.link}>
                  <svg viewBox="0 0 24 24" ><g data-name="31. User" id="_31._User"><path d="M23.7,20.308a11.919,11.919,0,0,0-5.342-7.466,8,8,0,1,0-12.709,0A11.894,11.894,0,0,0,.305,20.307a3.01,3.01,0,0,0,.582,2.561A2.977,2.977,0,0,0,3.23,24H20.77a2.977,2.977,0,0,0,2.343-1.132A3.008,3.008,0,0,0,23.7,20.308ZM12,2A6,6,0,1,1,6,8,6.006,6.006,0,0,1,12,2Zm9.549,19.623A.982.982,0,0,1,20.77,22H3.23a.982.982,0,0,1-.779-.377,1.026,1.026,0,0,1-.2-.87A9.9,9.9,0,0,1,7.1,14.306a7.949,7.949,0,0,0,9.813,0,9.925,9.925,0,0,1,4.838,6.45A1.024,1.024,0,0,1,21.549,21.623Z" /></g></svg>
                  <span>Personal account</span>
                </Link>
                <Link href="/settings" className={styles.link}>
                  <svg viewBox="0 0 512 512" ><title /><g data-name="1" id="_1"><path d="M293.9,450H233.53a15,15,0,0,1-14.92-13.42l-4.47-42.09a152.77,152.77,0,0,1-18.25-7.56L163,413.53a15,15,0,0,1-20-1.06l-42.69-42.69a15,15,0,0,1-1.06-20l26.61-32.93a152.15,152.15,0,0,1-7.57-18.25L76.13,294.1a15,15,0,0,1-13.42-14.91V218.81A15,15,0,0,1,76.13,203.9l42.09-4.47a152.15,152.15,0,0,1,7.57-18.25L99.18,148.25a15,15,0,0,1,1.06-20l42.69-42.69a15,15,0,0,1,20-1.06l32.93,26.6a152.77,152.77,0,0,1,18.25-7.56l4.47-42.09A15,15,0,0,1,233.53,48H293.9a15,15,0,0,1,14.92,13.42l4.46,42.09a152.91,152.91,0,0,1,18.26,7.56l32.92-26.6a15,15,0,0,1,20,1.06l42.69,42.69a15,15,0,0,1,1.06,20l-26.61,32.93a153.8,153.8,0,0,1,7.57,18.25l42.09,4.47a15,15,0,0,1,13.41,14.91v60.38A15,15,0,0,1,451.3,294.1l-42.09,4.47a153.8,153.8,0,0,1-7.57,18.25l26.61,32.93a15,15,0,0,1-1.06,20L384.5,412.47a15,15,0,0,1-20,1.06l-32.92-26.6a152.91,152.91,0,0,1-18.26,7.56l-4.46,42.09A15,15,0,0,1,293.9,450ZM247,420h33.39l4.09-38.56a15,15,0,0,1,11.06-12.91A123,123,0,0,0,325.7,356a15,15,0,0,1,17,1.31l30.16,24.37,23.61-23.61L372.06,328a15,15,0,0,1-1.31-17,122.63,122.63,0,0,0,12.49-30.14,15,15,0,0,1,12.92-11.06l38.55-4.1V232.31l-38.55-4.1a15,15,0,0,1-12.92-11.06A122.63,122.63,0,0,0,370.75,187a15,15,0,0,1,1.31-17l24.37-30.16-23.61-23.61-30.16,24.37a15,15,0,0,1-17,1.31,123,123,0,0,0-30.14-12.49,15,15,0,0,1-11.06-12.91L280.41,78H247l-4.09,38.56a15,15,0,0,1-11.07,12.91A122.79,122.79,0,0,0,201.73,142a15,15,0,0,1-17-1.31L154.6,116.28,131,139.89l24.38,30.16a15,15,0,0,1,1.3,17,123.41,123.41,0,0,0-12.49,30.14,15,15,0,0,1-12.91,11.06l-38.56,4.1v33.38l38.56,4.1a15,15,0,0,1,12.91,11.06A123.41,123.41,0,0,0,156.67,311a15,15,0,0,1-1.3,17L131,358.11l23.61,23.61,30.17-24.37a15,15,0,0,1,17-1.31,122.79,122.79,0,0,0,30.13,12.49,15,15,0,0,1,11.07,12.91ZM449.71,279.19h0Z" /><path d="M263.71,340.36A91.36,91.36,0,1,1,355.08,249,91.46,91.46,0,0,1,263.71,340.36Zm0-152.72A61.36,61.36,0,1,0,325.08,249,61.43,61.43,0,0,0,263.71,187.64Z" /></g></svg>
                  <span>Settings</span>
                </Link>
                <Link href="" className={styles.link} onClick={Logout}>
                  <svg id="Layer_1" version="1.1" viewBox="0 0 128 128" ><g><polygon points="91,119 9,119 9,9 91,9 91,1 1,1 1,127 91,127  " /><rect height="8" width="8" x="40" y="60" /><polygon points="90.8,96.8 123.7,64 90.8,31.2 85.2,36.8 108.3,60 58,60 58,68 108.3,68 85.2,91.2  " /></g></svg>
                  <span>Logout</span>
                </Link>

              </div>
            }
          </div>
          :
          <div className={styles.links}>
            <Link href='/auth?open=login'>Login</Link>
            <Link href='/auth?open=registration'>Registration</Link>
          </div>
        }
      </div>
    </header>
  )
}
