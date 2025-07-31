"use client"
import React from 'react'
import Layout from '@/components/Layout'
import { useParams } from 'next/navigation'

const ServiceItem = () => {
  const params = useParams();
  const slug = params.slug;  

  return (
    <Layout>
      <section className="bg-gradient-to-b from-[#fffafc] via-white to-[#fef6f9] pt-13 py-8">
        <div className="container mx-auto px-4 sm:px-10 text-center mt-14">
          <h2 className="text-3xl sm:text-4xl font-serif font-extrabold bg-gradient-to-r from-[#AF0D5A] to-pink-500 bg-clip-text text-transparent drop-shadow-sm mb-3">
            {"Comming Soon"}
          </h2>
        </div>
      </section>
    </Layout>
  )
}

export default ServiceItem;
