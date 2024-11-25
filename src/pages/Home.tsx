
import CrossBorderTransactions from '../components/CrossBorderTransactions'
import FAQs from '../components/FAQs'
import HeroSection from '../components/HeroSection'
import RealTimeExchangeRates from '../components/RealTimeExchangeRates'
import Testimonials from '../components/Testimonials'
const Home = () => {
  return (
    <div>
      <HeroSection />
      <CrossBorderTransactions />
      <RealTimeExchangeRates />
      <Testimonials />
      <FAQs />
    </div>
  )
}

export default Home
