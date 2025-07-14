import Header from "@/components/Header"
import Layout from "@/components/Layout"
import  Services from "@/components/Services"
import WhyChoose from "@/components/WhyChoose"


const Landing = () => {
  return (
    <>
    <Layout>
      <Header/>
      <Services/>
      <WhyChoose/>
    </Layout>
    </>
  )
}

export default Landing