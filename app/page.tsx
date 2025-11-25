import HomeBanner from "./components/ui/HomeBanner";
import TrustedPartners from "./components/common/TrustedPartners";
import CommonSection from "./components/ui/CommonSection";
import FooterCTA from "./components/ui/FooterCTA";
import Tabs from "./components/ui/forms/TabView";
import HomeAboutArea from "./components/ui/HomeAboutArea";
import GridViewUI from "./components/ui/GridViewUI";
import HomeBlogSection from "./components/ui/HomeBlogSection";
import Accordion from "./components/common/Accordion";
import AnimateBox from "./components/ui/AnimateBox";
export default function Home() {
  const faq = [
    {
      q: "What is a FlockDesk?",
      a: "Loream ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      q: "How does a FlockDesk work?",
      a: "A help desk system like MindDesk manages support requests—known as tickets—submitted by users through channels such as email, phone, or online forms. When users encounter specialized issues or need assistance, they reach out, and MindDesk automatically organizes and prioritizes these tickets based on urgency and issue type. The system assigns each ticket to the right support agent or team, ensuring quick and accurate resolution. Throughout the process, MindDesk keeps users updated on ticket status and progress with clear, timely communication. Once the issue is resolved, MindDesk provides the solution to the user and closes the ticket, delivering a smooth, efficient support experience.",
    },
    {
      q: "Does FlockDesk provide 24/7 support?",
      a: "Loream ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      q: "How does FlockDesk handle tickets?",
      a: "Loream ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      q: "Is FlockDesk software safe?",
      a: "Loream ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      q: "What's the price of FlockDesk",
      a: "Loream ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      q: "Does FlockDesk software have any integrations?",
      a: "Loream ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  ];
  return (
    <div className="home-page">
      <HomeBanner />
      <TrustedPartners />
      <CommonSection />
      <Tabs />
      <HomeAboutArea />
      <GridViewUI />
      <AnimateBox />
      <Accordion items={faq} />
      <HomeBlogSection />
      <FooterCTA />
    </div>
  );
}
