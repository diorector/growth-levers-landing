'use client'

import { useEffect, useState } from 'react'
import styles from './LoadingScreen.module.css'

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  if (!isLoading) return null

  return (
    <div className={styles.loader}>
      <div className={styles.loaderCircle}></div>
    </div>
  )
}
