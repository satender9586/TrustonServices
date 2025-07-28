import AboutUs from "@/components/AboutUs";
import Header from "@/components/Header";
import Layout from "@/components/Layout";
import Services from "@/components/Services";
import WhyChoose from "@/components/WhyChoose";



export default function Home() {
  return (
    <Layout>
      <Header />
      <Services />
      <WhyChoose />
      <AboutUs />
    </Layout>
  );
}
