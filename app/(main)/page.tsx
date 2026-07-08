import HomeBanner from "../components/Home/HomeBanner";
import TabSection from "../components/Home/TabSection";
import UseCase from "../components/Home/UseCase";
import CoreFeatures from "../components/Home/CoreFeatures";
import WhyFlockDesk from "../components/Home/WhyFlockDesk";
import HowItWorks from "../components/Home/HowItWorks";
import Testimonials from "../components/Home/Testimonials";
import Faq from "../components/Home/Faq";

import HomeFooterCTA from "../components/Home/HomeFooterCTA";

import HomeBlog from "../components/Home/HomeBlog";
import { getLatestBlogs } from "../api/blog/blog";

import {
  homeTabData,
  homeUseCases,
  coreFeaturesData,
  whyChooseData,
  HowWorksStepsData,
  TestimornalsData,
  FAQData,
} from "../data";

export default async function Home() {
  const HomeBlogData = await getLatestBlogs();
  return (
    <div className="home-page">
      <HomeBanner />
      <TabSection data={homeTabData} />
      <UseCase data={homeUseCases} />
      <CoreFeatures data={coreFeaturesData} />
      <WhyFlockDesk data={whyChooseData} />
      <HowItWorks data={HowWorksStepsData} />
      <Testimonials data={TestimornalsData} />
      <Faq data={FAQData} />
      <HomeBlog data={HomeBlogData} />
      <HomeFooterCTA />
    </div>
  );
}
