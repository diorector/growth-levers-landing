import LoadingScreen from '@/components/LoadingScreen'
import HeroSection from '@/components/HeroSection'
import AuthorSection from '@/components/AuthorSection'
import FeaturesSection from '@/components/FeaturesSection'
import EbookChannelsSection from '@/components/EbookChannelsSection'
import PreorderSection from '@/components/PreorderSection'
import ArticlesSection from '@/components/ArticlesSection'
import VideosSection from '@/components/VideosSection'
import NewsletterSection from '@/components/NewsletterSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <LoadingScreen />
      <HeroSection />
      <AuthorSection />
      <FeaturesSection />
      <EbookChannelsSection />
      <PreorderSection />
      <ArticlesSection />
      <VideosSection />
      <NewsletterSection />
      <Footer />
    </main>
  )
}
