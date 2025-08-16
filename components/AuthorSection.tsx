'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import styles from './AuthorSection.module.css'

export default function AuthorSection() {
  const sectionRef = useRef<HTMLElement>(null)

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

  return (
    <section ref={sectionRef} className={styles.authorSection}>
      <div className="container">
        <h2 className={styles.sectionTitle}>저자 소개</h2>
        <p className={styles.sectionSubtitle}>실리콘밸리가 인정한 성장 전략의 대가</p>
        
        <div className={`${styles.authorContainer} fade-in`}>
          <div className={styles.authorImageWrapper}>
            <div className={styles.authorPhotoBg}></div>
            <Image
              src="/matt-lerner.jpg"
              alt="Matt Lerner - 성장 전략 전문가"
              width={400}
              height={500}
              className={styles.authorPhoto}
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                if (target.nextSibling) {
                  (target.nextSibling as HTMLElement).style.display = 'flex';
                }
              }}
            />
            <div className={styles.authorPhotoFallback} style={{ display: 'none' }}>
              👨‍💼
            </div>
          </div>
          
          <div className={styles.authorContent}>
            <h3 className={styles.authorName}>Matt Lerner</h3>
            <p className={styles.authorTitle}>
              500 Startups 파트너<br />
              Startup Core Strengths 창업자<br />
              前 PayPal 성장팀 리더
            </p>
            <p className={styles.authorBio}>
              PayPal에서 11년간 성장을 이끌며 쌓은 경험을 바탕으로,
              500개 이상의 스타트업이 Product-Market Fit을 찾고
              지속 가능한 성장을 달성하도록 도왔습니다.
            </p>
            <blockquote className={styles.authorQuote}>
              성장은 운이 아니라 시스템입니다. 
              올바른 레버를 찾으면 10배 성장이 가능합니다.
            </blockquote>
            <div className={styles.authorStats}>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>500+</div>
                <div className={styles.statLabel}>컨설팅 스타트업</div>
              </div>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>11년</div>
                <div className={styles.statLabel}>PayPal 경력</div>
              </div>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>10X</div>
                <div className={styles.statLabel}>평균 성장률</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.floatingShape}></div>
    </section>
  )
}