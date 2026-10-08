import Navbar from './components/Navbar'
import Hero from './components/Hero'
import {
  Metrics, Problems, Benefits, HowItWorks, UseCases, Testimonials, FAQ, FinalCTA, Footer,
} from './components/Sections'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Metrics />
        <Problems />
        <Benefits />
        <HowItWorks />
        <UseCases />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
