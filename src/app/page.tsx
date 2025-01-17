import MenuHeader from "@/components/headers/MenuHeader/MenuHeader";
import TopHeader from "@/components/headers/TopHeader/TopHeader";
import Banner from "./pageComponent/Banner";
import BlogSection from "./pageComponent/BlogSection";

export default function Home() {
  return (
    <div className="">
      {/* headers component */}
      <TopHeader />
      <MenuHeader />

      {/* pages components */}
      <Banner />
      <BlogSection />
    </div>
  );
}
