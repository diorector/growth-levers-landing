'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import styles from './EbookChannelsSection.module.css'

const channels = [
  {
    name: '리디북스',
    icon: '📕',
    link: 'https://ridibooks.com',
    color: '#1e9eff'
  },
  {
    name: '밀리의 서재',
    icon: '📗',
    link: 'https://millie.co.kr',
    color: '#ffb700'
  },
  {
    name: '교보문고',
    icon: '📘',
    link: 'https://digital.kyobobook.co.kr',
    color: '#007c4f'
  },
  {
    name: '예스24',
    icon: '📙',
    link: 'https://yes24.com',
    color: '#00a651'
  },
  {
    name: '알라딘',
    icon: '📔',
    link: 'https://aladin.co.kr',
    color: '#ff5a00'
  }
]

export default function EbookChannelsSection() {
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
    <section ref={sectionRef} id="ebook" className={styles.ebookSection}>
      <div className="container">
        <h2 className={styles.sectionTitle}>📚 전자책 구매 채널</h2>
        <p className={styles.sectionSubtitle}>
          지금 바로 읽고 싶다면? 전자책으로 먼저 만나보세요
        </p>
        
        <div className={styles.channelsGrid}>
          {channels.map((channel, index) => (
            <a
              key={index}
              href={channel.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.channelCard} fade-in`}
              style={{ '--channel-color': channel.color } as any}
            >
              <div className={styles.channelIcon}>{channel.icon}</div>
              <h3 className={styles.channelName}>{channel.name}</h3>
              <span className={styles.channelAction}>구매하기 →</span>
            </a>
          ))}
        </div>
        
        <div className={styles.priceInfo}>
          <div className={styles.priceTag}>
            <span className={styles.priceLabel}>전자책 가격</span>
            <span className={styles.priceAmount}>₩19,900</span>
            <span className={styles.originalPrice}>₩29,900</span>
          </div>
          <p className={styles.priceNote}>
            ⚡ 출간 기념 33% 할인 이벤트 진행 중
          </p>
        </div>
      </div>
    </section>
  )
}