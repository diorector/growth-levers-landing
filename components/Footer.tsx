import Link from 'next/link'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerGrid}>
          <div className={styles.footerColumn}>
            <h4 className={styles.footerTitle}>Growth Levers</h4>
            <p className={styles.footerDesc}>
              당신의 스타트업을 10배 성장시킬<br />
              검증된 방법론과 실전 가이드
            </p>
          </div>
          <div className={styles.footerColumn}>
            <h5 className={styles.columnTitle}>도서 구매</h5>
            <ul className={styles.footerLinks}>
              <li><Link href="#ebook">전자책</Link></li>
              <li><Link href="#preorder">종이책 예약</Link></li>
              <li><Link href="#newsletter">출간 알림</Link></li>
            </ul>
          </div>
          <div className={styles.footerColumn}>
            <h5 className={styles.columnTitle}>추가 자료</h5>
            <ul className={styles.footerLinks}>
              <li><a href="https://systm.co" target="_blank" rel="noopener noreferrer">블로그</a></li>
              <li><a href="#videos">강연 영상</a></li>
              <li><a href="#articles">아티클</a></li>
            </ul>
          </div>
          <div className={styles.footerColumn}>
            <h5 className={styles.columnTitle}>스타트업북스</h5>
            <p className={styles.footerContact}>
              contact@startupbooks.kr<br />
              서울특별시 강남구
            </p>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p>© 2025 스타트업북스. All rights reserved.</p>
          <p>Made with 💜 for Startups</p>
        </div>
      </div>
    </footer>
  )
}