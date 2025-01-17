import agroforestryImg from "@/asserts/agroforestry-1.png";
import boomvrzorgingImg from "@/asserts/boomverzorging.png";
import arrowBottomIcon from "@/asserts/icons/arrow-down.svg";
import arrowIcon from "@/asserts/icons/arrow-right.svg";
import kwekerijImg from "@/asserts/kwekerij.png";
import CustomImage from "@/components/Elements/CustomImage";
import MainContainer from "@/components/Elements/MainContainer";
import { Inter } from "next/font/google";
import { StaticImageData } from "next/image";
import Link from "next/link";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

type TBlogData = {
  id: string;
  title: string;
  link: string;
  description: string;
  image: string | StaticImageData;
};

const blogData: TBlogData[] = [
  {
    id: "1",
    title: "Agroforestry",
    description:
      "We integreren bomen en gewassen voor een duurzamer landbouwsysteem. Dit verbetert de bodemkwaliteit, verhoogt de biodiversiteit en zorgt voor een gezondere oogst.",
    link: "#",
    image: agroforestryImg,
  },
  {
    id: "2",
    title: "kwekerij",
    description:
      "Onze kwekerij biedt een ruim assortiment aan bomen en planten, zorgvuldig geselecteerd voor maximale groei en duurzaamheid. Bezoek onze shop voor advies en aankoop van de beste soorten.",
    link: "#",
    image: kwekerijImg,
  },
  {
    id: "3",
    title: "Boomverzorging",
    description:
      "Boomverzorgers zorgen ervoor dat jouw bomen gezond en sterk blijven. Van aanplanting tot onderhoud en snoeien tot vellen. Wij staan klaar met deskundig advies en service.",
    link: "#",
    image: boomvrzorgingImg,
  },
];

export default function BlogSection() {
  return (
    <section>
      <MainContainer className="-mt-28">
        {/* title */}
        <div className="text-center mb-3.5">
          <h1
            className={`text-white font-extrabold text-[26px] ${inter.className}`}
          >
            {" "}
            Praktische groene oplossingen{" "}
          </h1>

          <figure className="">
            {" "}
            <CustomImage
              className="mx-auto max-w-min text-center"
              src={arrowBottomIcon}
            />{" "}
          </figure>
        </div>

        {/* blogs card */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {blogData.map((item) => (
            <BlogCard key={item.id} item={item} />
          ))}
        </div>
      </MainContainer>
    </section>
  );
}

function BlogCard({ item }: { item: TBlogData }) {
  return (
    <div
      className="rounded-md p-2.5 pb-9 bg-white relative"
      style={{ boxShadow: "0px 4px 28px -4px #0000001F" }}
    >
      <div className="relative">
        <CustomImage src={item.image} className="rounded-[3px] w-full" />
        <h3 className="absolute bottom-7 left-1/2 text-white text-[24px] font-normal text-center -translate-x-1/2">
          {item.title}
        </h3>
      </div>
      <p className="text-base font-normal text-txtPrimaryColor mt-3.5 mb-[18px]">
        {item.description}
      </p>

      <Link
        className="flex items-center gap-2 text-greenPrimary text-base font-normal absolute left-2.5 bottom-0"
        href={item.link}
      >
        {" "}
        Meer over Agroforestry{" "}
        <span className="px-[28px] py-6">
          <CustomImage src={arrowIcon} />
        </span>
      </Link>
    </div>
  );
}
