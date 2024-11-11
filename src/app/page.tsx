import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'
import Testimonials from './components/Testimonials'
import Blog from './components/Blog'
import AwardsAndCertifications from './components/Certification'

export default function Home() {
  return (
    <main className="bg-white">
      <Navbar />
      <HeroSection />
      <AboutMe />
      <Projects />
      <Skills />
      <Testimonials />
      <Blog />
      <AwardsAndCertifications />
      <Contact />
      <Footer />
      <BackToTop />
    </main>
  )
}