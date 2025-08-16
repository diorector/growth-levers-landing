'use client'

import { useEffect, useRef } from 'react'
import styles from './VideosSection.module.css'

export default function VideosSection() {
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
    <section ref={sectionRef} className={styles.videosSection}>
      <div className="container">
        <h2 className={styles.sectionTitle}>🎥 강연 & 인터뷰</h2>
        <p className={styles.sectionSubtitle}>
          성장 전략의 핵심을 영상으로 만나보세요
        </p>
        
        <div className={styles.videosContainer}>
          {/* Main Long-form Video */}
          <div className={`${styles.mainVideo} fade-in`}>
            <div className={styles.videoWrapper}>
              <iframe 
                src="https://www.youtube.com/embed/VKT9r9hGmkI"
                title="Matt Lerner - Growth Strategy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          {/* Shorts Container */}
          <div className={styles.shortsContainer}>
            <div className={`${styles.shortVideo} fade-in`}>
              <p className={styles.videoTitle}>💡 Growth Tip #1</p>
              <div className={styles.shortWrapper}>
                <iframe 
                  src="https://www.youtube.com/embed/242EyfPnzDQ"
                  title="Matt Lerner Short 1"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>

            <div className={`${styles.shortVideo} fade-in`}>
              <p className={styles.videoTitle}>🚀 Growth Tip #2</p>
              <div className={styles.shortWrapper}>
                <iframe 
                  src="https://www.youtube.com/embed/pAbhXBdSmFE"
                  title="Matt Lerner Short 2"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}