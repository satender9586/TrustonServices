import React from 'react'
import Layout from '@/components/Layout'

const Login = () => {
  return (
    <Layout>
 <header className="relative overflow-hidden bg-gradient-to-br from-[#EBF7FD] via-white to-[#FDEBF3] pt-22 sm:pt-28 pb-12 sm:pb-20">
      
      {/* Decorative Background Blobs */}
      <div className="absolute -top-20 -left-20 w-56 sm:w-72 h-56 sm:h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
      <div className="absolute top-40 -right-20 w-56 sm:w-72 h-56 sm:h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
              <div>Login</div>
      </header>

    </Layout>
  )
}

export default Login