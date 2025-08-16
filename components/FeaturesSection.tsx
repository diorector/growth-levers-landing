'use client'

import { useEffect, useRef } from 'react'
import styles from './FeaturesSection.module.css'

const features = [
  {
    icon: '🎯',
    title: 'PMF 찾기',
    description: '제품-시장 적합성을 측정하고 달성하는 구체적인 방법론과 실제 사례를 통한 단계별 가이드'
  },
  {
    icon: '📊',
    title: '데이터 기반 의사결정',
    description: '직관이 아닌 데이터로 성장을 이끄는 프레임워크와 측정 가능한 지표 설정 방법'
  },
  {
    icon: '🚀',
    title: '성장 실험 설계',
    description: '주당 3-5개의 실험을 효율적으로 운영하고 빠르게 학습하는 시스템 구축법'
  },
  {
    icon: '💡',
    title: '실전 템플릿',
    description: '50개 이상의 즉시 활용 가능한 템플릿과 체크리스트로 바로 시작하기'
  },
  {
    icon: '📈',
    title: '사례 연구',
    description: '300개 이상의 실제 스타트업 성공/실패 사례와 그들이 찾은 성장 레버 분석'
  },
  {
    icon: '🔄',
    title: '지속 가능한 성장',
    description: '단기 해킹이 아닌 장기적이고 지속 가능한 성장 엔진 구축 방법론'
  }
]

export default function FeaturesSection() {
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
    <section ref={sectionRef} className={styles.featuresSection}>
      <div className="container">
        <h2 className={styles.sectionTitle}>책의 핵심 가치</h2>
        <p className={styles.sectionSubtitle}>실전에서 검증된 성장 전략의 모든 것</p>
        
        <div className={styles.featuresGrid}>
          {features.map((feature, index) => (
            <div key={index} className={`${styles.featureCard} fade-in`}>
              <div className={styles.featureIcon}>{feature.icon}</div>
              <h3 className={styles.featureTitle}>{feature.title}</h3>
              <p className={styles.featureDescription}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}