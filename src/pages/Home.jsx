import React, { useContext } from 'react'
import { ThemeContext } from '../Context/ThemeProvider'
import Hero from '../components/sections/Home/HeroSection';
import Intro from '../components/sections/Home/IntroSection';
import OurBootCamps from '../components/sections/Home/OurBootCamps';
import MoreThan from '../components/sections/Home/MoreThan';
import OurJourney from '../components/sections/Home/OurJourney';
import Testimonials from '../components/sections/Home/Testimonials';
import Partners from '../components/sections/Home/Partners';
import JoinUs from '../components/sections/Home/JoinUs';
import Faqs from '../components/sections/Home/Faqs';
import Newsletter from '../components/sections/Home/Newsletter';
import Community from '../components/sections/Home/Community';


const Home = () => {
  const { theme } = useContext(ThemeContext)
  return (
    <>
      <Hero />
      <Intro />
      <OurBootCamps />
      <MoreThan />
      <OurJourney />
      <Testimonials />
      <Partners />
      <JoinUs />
      <Faqs />
      <Newsletter />
    </>
  );
}

export default Home;