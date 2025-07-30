import AboutUs from "@/components/AboutUs";
import Header from "@/components/Header";
import Layout from "@/components/Layout";
import Services from "@/components/Services";
import WhyChoose from "@/components/WhyChoose";
import CompaniesSection from "@/components/CompaniesSection";
import FeebackSection from "@/components/FeebackSection";
import FAQ from "@/components/FAQ";



export default function Home() {
  return (
    <Layout>
      <Header />
      <Services />
      <WhyChoose />
      <AboutUs />
      <FeebackSection/>
      <CompaniesSection/>
      <FAQ/>
    </Layout>
  );
}
