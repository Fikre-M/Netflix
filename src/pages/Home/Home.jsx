import React from 'react';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import FAQAccordion from '../../Components/FaQuestions/FAQAccordion';
import TrendingNow from '../../Components/TrendingNow/TrendingNow';
import MoreReasonsToJoin from '../../Components/MoreReasonsToJoin/MoreReasonsToJoin';
import PromoBanner from '../../Components/PromoBanner/PromoBanner';



const Home = () => {
    return (
      <>
        <Header />
        <PromoBanner />
        <TrendingNow />
        <MoreReasonsToJoin />
        <FAQAccordion />
        <Footer />
        <br />
        <br />
      </>
    );
}

export default Home;
