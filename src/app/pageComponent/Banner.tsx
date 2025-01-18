"use client";

import bgImage from "@/asserts/Header-hompage-new-plot.png";
import Button from "@/components/Elements/Button";
import MainContainer from "@/components/Elements/MainContainer";
import useAosAnimation from "@/components/hooks/useAosAnimation";

export default function Banner() {
  useAosAnimation();

  return (
    <section
      className="bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage.src})` }}
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
    >
      <MainContainer>
        <div className="grid content-center items-center grid-cols-1 md:grid-cols-2 gap-5 min-h-[576px] text-white font-normal pb-28">
          <div data-aos="fade-right">
            <h1 className="text-5xl lg:text-[74px] mb-2">Jade Reforest</h1>
            <h4 className="text-2xl lg:text-[40px]">
              Vergroening in harmonie met natuur en landbouw
            </h4>
          </div>

          <div data-aos="fade-left" className="max-w-[482px] md:ml-auto">
            <p className="text-lg font-normal text-justify mb-[11px]">
              Bij Jade Reforestry geloven we in een toekomst waar landbouw en
              natuur samen floreren. Met onze praktische groene oplossingen
              maken we dit werkelijkheid.
            </p>
            <Button variant="secondary">Doe met ons mee</Button>
          </div>
        </div>
      </MainContainer>
    </section>
  );
}
