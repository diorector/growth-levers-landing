'use client'

import { useEffect, useRef, useState } from 'react'
import styles from './NewsletterSection.module.css'

export default function NewsletterSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubmitted(true)
      setTimeout(() => {
        setIsSubmitted(false)
        setEmail('')
      }, 3000)
    }
  }

  return (
    <section ref={sectionRef} id="newsletter" className={styles.newsletterSection}>
      <div className="container">
        <div className={`${styles.newsletterContent} fade-in`}>
          <div className={styles.newsletterIcon}>💌</div>
          <h2 className={styles.sectionTitle}>뉴스레터 구독</h2>
          <p className={styles.sectionSubtitle}>
            성장 전략 인사이트와 출간 소식을 가장 먼저 받아보세요
          </p>
          
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className={styles.newsletterForm}>
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={styles.emailInput}
                required
              />
              <button type="submit" className={styles.submitBtn}>
                구독하기
              </button>
            </form>
          ) : (
            <div className={styles.successMessage}>
              ✅ 구독이 완료되었습니다! 곧 환영 메일을 보내드릴게요.
            </div>
          )}
          
          <div className={styles.newsletterFeatures}>
            <div className={styles.featureItem}>
              <span className={styles.featureIcon}>📅</span>
              <p>주 1회 발송</p>
            </div>
            <div className={styles.featureItem}>
              <span className={styles.featureIcon}>🎯</span>
              <p>실전 사례 분석</p>
            </div>
            <div className={styles.featureItem}>
              <span className={styles.featureIcon}>🎁</span>
              <p>구독자 전용 자료</p>
            </div>
          </div>
          
          <p className={styles.privacyNote}>
            📌 이메일은 안전하게 보관되며, 언제든 구독을 취소할 수 있습니다.
          </p>
        </div>
      </div>
      <div className={styles.bgGradient}></div>
    </section>
  )
}