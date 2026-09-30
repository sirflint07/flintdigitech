import Navigation from '@/components/sections/Navigation';
import Hero from '@/components/sections/Hero';
import WhatIDo from '@/components/sections/WhatIDo';
import SelectedWork from '@/components/sections/SelectedWork';
import MeetMe from '@/components/sections/MeetMe';
import DesignPortfolio from '@/components/sections/DesignPortfolio';
import DesignCode from '@/components/sections/DesignCode';
import Creator from '@/components/sections/Creator';
import BeyondScreen from '@/components/sections/BeyondScreen';
import Services from '@/components/sections/Services';
import WorkProcess from '@/components/sections/WorkProcess';
import Toolkit from '@/components/sections/Toolkit';
import BuyMeCoffee from '@/components/sections/BuyMeCoffee';
import AvailableForHire from '@/components/sections/AvailableForHire';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="relative z-10">
        <Hero />
        <WhatIDo />
        <SelectedWork />
        <MeetMe />
        <DesignPortfolio />
        <DesignCode />
        <Creator />
        <BeyondScreen />
        <Services />
        <WorkProcess />
        <Toolkit />
        <BuyMeCoffee />
        <AvailableForHire />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
