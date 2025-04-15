'use client'
import React, { useState } from 'react'
import { useAuth } from '@/store/user/AuthProvider';
import styles from './index.module.scss'
import { update } from '@/services/UserService';


export default function Profile() {
  const { user, saveUser } = useAuth()
  const [edit, setEdit] = useState(false)
  const [email, setEmail] = useState(user?.email || "")
  const [firstName, setFirstName] = useState(user?.first_name || "")
  const [lastName, setLastName] = useState(user?.last_name || "")
  const [phone, setPhone] = useState(user?.phone || "")

  const save = async () => {
    if (edit) {
      let newUser = user
      newUser.first_name = firstName
      newUser.last_name = lastName
      newUser.phone = phone
      newUser.email = email
      saveUser(newUser)
      // let response = await update(newUser)
      // console.log(response);
    }

    setEdit(!edit)
  }

  return (
    <div className="container">
      <div className={styles.box}>
        <div className={styles.top}>
          <div className={`${styles.avatar} animate`}>
            <img src={user?.avatar || 'https://cdn-icons-png.flaticon.com/512/8165/8165211.png'} alt="" />
          </div>
          <div className={styles.info}>
            <span>{firstName || "Name"} {lastName || "Surname"}</span>
            {edit &&
              <div className={styles.inner}>
                <input type="text" className={styles.edit} value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                <input type="text" className={styles.edit} value={lastName} onChange={(e) => setLastName(e.target.value)} />
              </div>
            }
            <p>{user?.type}</p>
          </div>
          <div className={styles.inner}>
            {edit &&
              <button className="blue-btn" onClick={save}>Save</button>
            }
            <button className="edit-btn blue-btn" onClick={() => setEdit(!edit)}>
              <svg fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" ><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" /><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" /></svg>
            </button>
          </div>
        </div>
        <div className={`${styles.wrap} animate`}>
          <div className={styles.item}>
            <strong>E-mail</strong>
            <a>{email}</a>
            {edit &&
              <input type="text" className={styles.edit} value={email} onChange={(e) => setEmail(e.target.value)} />
            }
          </div>
          <div className={styles.item}>
            <strong>Phone number</strong>
            <a>{phone}</a>
            {edit &&
              <input type="text" className={styles.edit} value={phone} onChange={(e) => setPhone(e.target.value)} />
            }
          </div>
        </div>
      </div>
    </div>
  )
}
