"use client"
import React, { useState } from 'react'
import styles from './index.module.scss'
import { useAuth } from '@/store/user/AuthProvider';
import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation'
import { registration, login } from '@/services/UserService';

export default function AuthForm() {
  const { saveUser } = useAuth();
  const { push } = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [logStudent, setLogStudent] = useState(false)

  const open = useSearchParams().get('open')

  const handleLogin = async () => {
    setError('')
    let user = {
      email: email,
      type: logStudent ? "teacher" : "student"
    }
    if (open == 'login') {
      try {
        // const response = await login(email, password)

        // saveUser(response);
        saveUser(user);
        push('/')
      } catch (e) {
        console.log(e);
        setError(e.response.data.message)
      }
    }
    else {
      try {
        // const response = await registration(email, password)
        // saveUser(response);

        saveUser(user);
        push('/')
      } catch (e) {
        console.log(e);
      }
    }

  };


  return (
    <div className={styles.auth}>
      <h6>{open == 'login' ? "Login" : "Registration"}</h6>
      <input type="text" name='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='E-mail' />
      <input type="password" name='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='password' />
      {/* {open == 'registration' &&
        <input type="password" name='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='confirm password' />
      } */}
      {error &&
        <div className="error-text">{error}</div>
      }
      <div className="bottom">
        <div className="switcher">
          <input type="checkbox" id='switcher' checked={logStudent} />
          <label htmlFor="switcher" onClick={() => setLogStudent(!logStudent)}></label>
        </div>
        <strong>Log in as a teacher</strong>
      </div>
      <button className="blue-btn" onClick={handleLogin}>{open == 'login' ? "Login" : "Registration"}</button>
    </div>
  )
}
