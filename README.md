# Growth Levers Landing Page

Matt Lerner의 "Growth Levers and How to Find Them" 한국어판 출간을 위한 랜딩 페이지입니다.

## 기술 스택

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: CSS Modules
- **Deployment**: Vercel

## 프로젝트 구조

```markdown:matt_lerner/README.md
matt_lerner/
├── app/
│   ├── globals.css          # 글로벌 스타일
│   ├── layout.tsx          # 루트 레이아웃
│   └── page.tsx            # 메인 페이지
├── components/             # 컴포넌트 디렉토리
│   ├── LoadingScreen.tsx   # 로딩 스크린
│   ├── HeroSection.tsx     # 히어로 섹션
│   ├── AuthorSection.tsx   # 저자 소개 섹션
│   ├── FeaturesSection.tsx # 책 특징 섹션
│   ├── EbookChannelsSection.tsx # 전자책 채널 섹션
│   ├── PreorderSection.tsx # 사전주문 섹션
│   ├── ArticlesSection.tsx # 아티클 섹션
│   ├── VideosSection.tsx   # 비디오 섹션
│   ├── NewsletterSection.tsx # 뉴스레터 섹션
│   └── Footer.tsx          # 푸터
├── public/
│   └── matt-lerner.jpg     # 저자 이미지
├── package.json
├── next.config.js
├── tsconfig.json
└── README.md
```

## 주요 기능

- 📱 **반응형 디자인**: 모바일, 태블릿, 데스크톱 최적화
- ⏰ **실시간 카운트다운**: 종이책 출간일까지 실시간 타이머
- 📧 **뉴스레터 구독**: 출간 소식 알림 신청
- 🎬 **비디오 섹션**: YouTube 영상 임베드
- 📚 **전자책 채널**: 다양한 플랫폼 링크
- 🎨 **인터랙티브 애니메이션**: 스크롤 기반 fade-in 효과

## 개발 시작하기

1. **의존성 설치**
   ```bash
   npm install
   ```

2. **개발 서버 실행**
   ```bash
   npm run dev
   ```

3. **브라우저에서 확인**
   ```
   http://localhost:3000
   ```

## 배포

### Vercel 배포

1. GitHub 리포지토리에 코드 푸시
2. Vercel 대시보드에서 프로젝트 import
3. 자동 배포 완료

### 수동 배포

```bash
npm run build
npm run start
```

## 성능 최적화

- ✅ CSS Modules로 스타일 캡슐화
- ✅ Next.js Image 컴포넌트 사용
- ✅ TypeScript로 타입 안정성 보장
- ✅ 코드 스플리팅 자동 적용
- ✅ 반응형 이미지 최적화

## 브라우저 지원

- Chrome (최신)
- Firefox (최신)
- Safari (최신)
- Edge (최신)

## 라이선스

이 프로젝트는 MIT 라이선스 하에 있습니다.
```

마지막으로 Vercel 배포를 위한 설정 파일을 추가하겠습니다:

```json:matt_lerner/vercel.json
{
  "framework": "nextjs",
  "buildCommand": "npm run build",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "functions": {
    "app/**/*.{js,ts,tsx}": {
      "runtime": "nodejs18.x"
    }
  }
}
```

## 완성된 프로젝트 구조

✅ **Next.js 14 프로젝트 생성 완료**
- TypeScript 설정
- CSS Modules 사용
- 반응형 디자인

✅ **컴포넌트 단위로 완전 분해**
- `LoadingScreen`: 로딩 화면
- `HeroSection`: 메인 히어로 배너
- `AuthorSection`: 저자 소개 (이미지 fallback 포함)
- `FeaturesSection`: 책의 핵심 가치 6개 카드
- `EbookChannelsSection`: 전자책 구매 플랫폼 5개
- `PreorderSection`: 실시간 카운트다운 타이머
- `ArticlesSection`: Matt Lerner 아티클 3개
- `VideosSection`: YouTube 메인 영상 + 쇼츠 2개
- `NewsletterSection`: 이메일 구독 폼
- `Footer`: 사이트 정보 및 링크

✅ **주요 기능 구현**
- 반응형 디자인 (모바일/태블릿/데스크톱)
- 스크롤 기반 fade-in 애니메이션
- 실시간 카운트다운 타이머
- 뉴스레터 구독 폼
- YouTube 비디오 임베드
- 이미지 오류 처리 (fallback)
- 부드러운 스크롤 및 앵커 링크

✅ **Vercel 배포 준비 완료**
- `vercel.json` 설정
- 최적화된 빌드 설정
- SEO 메타데이터 구성

이제 `npm install` 후 `npm run dev`로 개발 서버를 실행하거나, Vercel에 직접 배포할 수 있습니다! 🚀
