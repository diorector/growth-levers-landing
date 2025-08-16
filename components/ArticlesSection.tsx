'use client'

import { useEffect, useRef } from 'react'
import styles from './ArticlesSection.module.css'

const articles = [
  {
    tag: 'Growth Strategy',
    title: 'Finding Your One Growth Lever',
    excerpt: '스타트업의 성장을 10배로 만들 수 있는 단 하나의 레버를 찾는 방법. 데이터 기반 접근법과 실험을 통한 검증 프로세스를 소개합니다.',
    link: 'https://www.systm.co/blog'
  },
  {
    tag: 'Product-Market Fit',
    title: 'The PMF Survey That Actually Works',
    excerpt: '제품-시장 적합성을 측정하는 가장 효과적인 설문 방법. Sean Ellis의 40% 규칙을 넘어서는 실용적인 접근법을 제시합니다.',
    link: 'https://www.systm.co/blog'
  },
  {
    tag: 'Experimentation',
    title: 'High-Velocity Growth Experiments',
    excerpt: '주당 3-5개의 성장 실험을 운영하는 방법. 빠른 학습과 반복을 통해 성장 속도를 극대화하는 프레임워크.',
    link: 'https://www.systm.co/blog'
  }
]

export default function ArticlesSection() {
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
    <section ref={sectionRef} className={styles.articlesSection}>
      <div className="container">
        <h2 className={styles.sectionTitle}>📝 Matt Lerner의 인사이트</h2>
        <p className={styles.sectionSubtitle}>성장 전략에 대한 깊이 있는 아티클</p>
        
        <div className={styles.articlesGrid}>
          {articles.map((article, index) => (
            <div key={index} className={`${styles.articleCard} fade-in`}>
              <div className={styles.articleHeader}>
                <span className={styles.articleTag}>{article.tag}</span>
              </div>
              <div className={styles.articleContent}>
                <h3 className={styles.articleTitle}>{article.title}</h3>
                <p className={styles.articleExcerpt}>{article.excerpt}</p>
                <a href={article.link} target="_blank" rel="noopener noreferrer" className={styles.articleLink}>
                  자세히 읽기 →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
