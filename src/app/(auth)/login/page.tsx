"use client";

import React from "react";
import Layout from "@/components/Layout";
import LoginImg from "../../../assests/auth/loginImg.jpg";
import Image from "next/image";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";

const loginSchema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type LoginFormInputs = z.infer<typeof loginSchema>;

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit: SubmitHandler<LoginFormInputs> = (data) => {
    console.log(data);
  };

  return (
    <Layout>
      <section className=" bg-gradient-to-br from-blue-100 to-pink-100  py-5 sm:py-12 ">
        <div className="pt-13">
          <div className="rounded-md container mx-auto max-w-6xl bg-white   grid grid-cols-1 md:grid-cols-2  ">
            {/* Left Image Section */}
            <div className="relative hidden md:block">
              <Image
                src={LoginImg}
                alt="Login Image"
                fill
                className="object-cover rounded-md"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black opacity-20 rounded-md"></div>
            </div>

            {/* Right Form Section */}
            <div className="p-10 md:p-15 flex flex-col justify-center ">
            <h2 className="text-3xl text-center font-bold text-gray-800 mb-2">
  Login to Your Account
</h2>
<p className="text-gray-500 text-md mb-8 text-center">
  Access your dashboard and manage everything in one place.
</p>


              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                {/* Email */}
                <div>
                  <Label className="block mb-2 text-gray-700">Email</Label>
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    {...register("email")}
                    className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                  />
                  {errors.email && (
                    <p className="text-red-500 mt-1">{errors.email.message}</p>
                  )}
                </div>

                {/* Password */}
                <div>
                  <Label className="block mb-2 text-gray-700">Password</Label>
                  <Input
                    type="password"
                    placeholder="Enter your password"
                    {...register("password")}
                    className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                  />
                  {errors.password && (
                    <p className="text-red-500 mt-1">
                      {errors.password.message}
                    </p>
                  )}
                </div>

                {/* Remember Me + Forgot */}
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <label className="flex items-center gap-1">
                    <input type="checkbox" className="h-4 w-4" /> Remember me
                  </label>
                  <a href="#" className="text-blue-600 hover:underline">
                    Forgot Password?
                  </a>
                </div>

                {/* Login Button */}
                <Button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700 transition"
                >
                  Login
                </Button>
              </form>

              {/* Divider */}
              <div className="flex items-center my-6">
                <hr className="flex-grow border-gray-300" />
                <span className="mx-2 text-gray-400 text-sm">
                  Or login with
                </span>
                <hr className="flex-grow border-gray-300" />
              </div>

              {/* Social Buttons */}
              <div className="flex justify-center gap-4">
                <button className="flex items-center gap-2 px-4 py-2 rounded-md border border-gray-300 hover:shadow-lg hover:bg-gray-100 transition">
                  <FcGoogle className="w-5 h-5" /> Google
                </button>
                <button className="flex items-center gap-2 px-4 py-2 rounded-md border border-gray-300 hover:shadow-lg hover:bg-gray-100 transition">
                  <BsGithub className="w-5 h-5" /> GitHub
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Login;
