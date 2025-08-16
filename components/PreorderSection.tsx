'use client'

import { useEffect, useRef, useState } from 'react'
import styles from './PreorderSection.module.css'

export default function PreorderSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    const elements = sectionRef.current?.querySelectorAll('.fade-in')
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const targetDate = new Date('2025-03-01T00:00:00')
    
    const timer = setInterval(() => {
      const now = new Date()
      const difference = targetDate.getTime() - now.getTime()
      
      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24))
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((difference % (1000 * 60)) / 1000)
        
        setTimeLeft({ days, hours, minutes, seconds })
      }
    }, 1000)
    
    return () => clearInterval(timer)
  }, [])

  return (
    <section ref={sectionRef} id="preorder" className={styles.preorderSection}>
      <div className={styles.bgPattern}></div>
      <div className="container">
        <div className={`${styles.preorderContent} fade-in`}>
          <h2 className={styles.sectionTitle}>📖 종이책 사전 예약</h2>
          <p className={styles.sectionSubtitle}>
            2025년 3월 1일 정식 출간 예정
          </p>
          
          <div className={styles.countdownContainer}>
            <div className={styles.countdownItem}>
              <div className={styles.countdownNumber}>{timeLeft.days}</div>
              <div className={styles.countdownLabel}>일</div>
            </div>
            <div className={styles.countdownItem}>
              <div className={styles.countdownNumber}>{timeLeft.hours}</div>
              <div className={styles.countdownLabel}>시간</div>
            </div>
            <div className={styles.countdownItem}>
              <div className={styles.countdownNumber}>{timeLeft.minutes}</div>
              <div className={styles.countdownLabel}>분</div>
            </div>
            <div className={styles.countdownItem}>
              <div className={styles.countdownNumber}>{timeLeft.seconds}</div>
              <div className={styles.countdownLabel}>초</div>
            </div>
          </div>
          
          <div className={styles.preorderBenefits}>
            <h3 className={styles.benefitsTitle}>사전 예약 혜택</h3>
            <div className={styles.benefitsGrid}>
              <div className={styles.benefitItem}>
                <span className={styles.benefitIcon}>🎁</span>
                <p>20% 할인</p>
              </div>
              <div className={styles.benefitItem}>
                <span className={styles.benefitIcon}>📚</span>
                <p>독점 부록 제공</p>
              </div>
              <div className={styles.benefitItem}>
                <span className={styles.benefitIcon}>✍️</span>
                <p>저자 친필 사인</p>
              </div>
              <div className={styles.benefitItem}>
                <span className={styles.benefitIcon}>🚀</span>
                <p>우선 배송</p>
              </div>
            </div>
          </div>
          
          <button className={styles.preorderBtn}>
            사전 예약하기 →
          </button>
        </div>
      </div>
    </section>
  )
}