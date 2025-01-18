import imageImg1 from "@/asserts/what-we-do-1.png";
import imageImg2 from "@/asserts/what-we-do-2.png";
import Button from "@/components/Elements/Button";
import CustomImage from "@/components/Elements/CustomImage";
import MainContainer from "@/components/Elements/MainContainer";

export default function WhatWeDo() {
  return (
    <section
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
      className="py-20"
    >
      <MainContainer className="space-y-7">
        <div className="max-w-[395px] space-y-2.5">
          <h2 className="text-[22px] leading-7 text-greenPrimary">
            Wat we doen
          </h2>
          <h1 className="text-2xl md:text-4xl font-normal leading-[48px]">
            Passie voor duurzame landbouw en natuur
          </h1>
        </div>

        {/* images content */}
        <div className="grid md:grid-cols-2 gap-5">
          <div>
            <CustomImage src={imageImg1} />
          </div>

          <div>
            <p className="text-lg font-normal leading-6 mb-7">
              Met meer dan 15 jaar ervaring in de sector hebben we bij Jade
              Reforestry een hands-on aanpak ontwikkeld voor duurzame landbouw
              en natuurbeheer. We begrijpen de ecologische uitdagingen en bieden
              oplossingen die zowel de natuur als de productiviteit ten goede
              komen. We helpen jou aan slimme beplantingsplannen en zorgen dat
              de juiste bomen op de juiste plek staan, zodat je kunt profiteren
              van verbeterde bodemkwaliteit, verhoogde biodiversiteit en hogere
              opbrengsten.
            </p>

            <Button variant="primary" className="mb-5">
              Meer over ons
            </Button>

            <CustomImage src={imageImg2} />
          </div>
        </div>
      </MainContainer>
    </section>
  );
}
