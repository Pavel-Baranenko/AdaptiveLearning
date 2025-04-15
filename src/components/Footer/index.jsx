import React from 'react'
import styles from './index.module.scss'
import Link from 'next/link'


export default function Footer() {
  // let currentYear = ;

  return (
    <footer className={styles.box}>
      <p>© {new Date().getFullYear()} Adaptive learning system</p>
      <p>All rights reserved</p>
    </footer>
  )
}
