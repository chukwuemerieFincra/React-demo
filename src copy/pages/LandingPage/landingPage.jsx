import "./landingpage.css";

import Header from "../../components/header/header";
import HeroPage from "../../components/HeroPage/HeroPage";
import HeroPage1 from "../../components/HeroPage1/HeroPage1";
import HeroPage2 from "../../components/HeroPage2/HeroPage2";
import HeroPage3 from "../../components/HeroPage3/HeroPage3";
import HeroPage4 from "../../components/HeroPage4/HeroPage4";
import HeroPage5 from "../../components/HeroPage5/HeroPage5";

const LandingPage = () => {
  return (
    <>
      <Header />
      <HeroPage />
      <HeroPage1 />
      <HeroPage2 />
      <HeroPage3 />
      <HeroPage4 />
      <HeroPage5 />
    </>
  );
};

export default LandingPage;
