import BannerSection from "./components/bannerSection"
import BlogSection from "./components/blogSection"
import Category from "./components/category"
import FeatureSection from "./components/featureSection"
import FeatureSectionBreakfast from "./components/featureSectionBreakfast"
import FeatureSectionFruit from "./components/featureSectionFruit"
import Footer from "./components/footer"
import Hero from "./components/hero"
import Nav from "./components/nav"
// import Newsletter from "./components/newsLetter"

const App = () => {
  return (
  <main>
    <Nav/>
    <Hero/>
    <Category/>
    <FeatureSectionFruit/>
    <FeatureSectionBreakfast/>
    <BannerSection/>
    <BlogSection/>
    {/* <Newsletter/> */}
    <FeatureSection/>
    <Footer/>
  </main>
  )
}

export default App