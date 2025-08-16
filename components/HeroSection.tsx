import Link from 'next/link'
import styles from './HeroSection.module.css'

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.heroContent}>
          <div className={styles.badge}>
            <span className={styles.pulse}></span>
            한국 최초 출간
          </div>
          <h1 className={styles.title}>
            Growth Levers and<br />How to Find Them
          </h1>
          <p className={styles.subtitle}>
            당신의 스타트업에 숨겨진 성장 레버를 찾아드립니다
          </p>
          <div className={styles.buttonGroup}>
            <Link href="#ebook" className={`${styles.btn} ${styles.btnPrimary}`}>
              <span>📚</span> 전자책 구매하기
            </Link>
            <Link href="#newsletter" className={`${styles.btn} ${styles.btnSecondary}`}>
              <span>🔔</span> 출간 소식 받기
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}