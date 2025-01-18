"use client";

import MenuHeader from "@/components/headers/MenuHeader/MenuHeader";
import TopHeader from "@/components/headers/TopHeader/TopHeader";
import Banner from "./pageComponent/Banner";
import BlogSection from "./pageComponent/BlogSection";
import WhatWeDo from "./pageComponent/WhatWeDo";
import OnzeDroom from "./pageComponent/OnzeDroom";
import OurProjects from "./pageComponent/OurProjects";
import CustomerStories from "./pageComponent/CustomerStories";
import ContactForm from "./pageComponent/ContactForm";
import Footer from "./pageComponent/Footer";

export default function Home() {
  return (
    <div className="">
      {/* headers component */}
      <TopHeader />
      <MenuHeader />

      {/* pages components */}
      <Banner />
      <BlogSection />
      <WhatWeDo />
      <OnzeDroom />
      <OurProjects />
      <CustomerStories />
      <ContactForm />

      {/* footer */}
      <Footer />
    </div>
  );
}
