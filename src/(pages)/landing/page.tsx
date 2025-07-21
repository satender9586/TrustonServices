import Header from "@/components/Header"
import Layout from "@/components/Layout"
import  Services from "@/components/Services"
import WhyChoose from "@/components/WhyChoose"
import AboutUs from "@/components/AboutUs"


const Landing = () => {
  
  return (
      <Layout>
      <Header/>
      <Services/>
      <WhyChoose/>
      <AboutUs/>
    </Layout>
  )
}

export default Landing