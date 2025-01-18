import MainContainer from "@/components/Elements/MainContainer";
import React from "react";
import bgImage from "@/asserts/onze-droom-bg.png";
import CustomImage from "@/components/Elements/CustomImage";
import onzeDroom from "@/asserts/onze-droom-image.png";
import { TikTikIcon } from "@/asserts/icons/icons";

const onzeData = [
  "Slimme groene landbouw",
  "Een groen netwerk door heel Europa",
  "Harmonie tussen natuur en landbouw",
  "Vrij bewegende wilde dieren",
  "Een aaneengesloten weelderig bladerdak",
  "Veilige groene havens",
];

export default function OnzeDroom() {
  return (
    <section
      className="bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage.src})` }}
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
    >
      <MainContainer className="grid md:grid-cols-2 gap-5 pb-[70px] pt-[88px] items-center">
        <div className="">
          <h1 className="text-4xl leading-[48px] mb-1.5 font-normal">
            Onze droom
          </h1>
          <p className="text-lg font-normal leading-[18px] mb-6">
            We streven ernaar landbouw op een slimme manier te vergroenen,
            zonder in te boeten op productie. Stel je een groene dooradering
            voor die Europa doorkruist, waar natuur en landbouw harmonieus
            samenkomen. Een plek waar een hert van Polen naar Portugal kan
            lopen, onder een weelderig bladerdak, door bossen en velden, zonder
            ooit het gevoel te hebben de veilige groene haven van de natuur te
            verlaten.
          </p>

          <div className="space-y-4">
            {onzeData.map((item, key) => (
              <div key={`tik-${key}`} className="flex items-center gap-5">
                <figure className="w-5 h-3">
                  <span>{TikTikIcon}</span>
                </figure>
                <p className="text-lg leading-6 font-normal"> {item} </p>
              </div>
            ))}
          </div>
        </div>

        <div className="order-1">
          <CustomImage src={onzeDroom} />
        </div>
      </MainContainer>
    </section>
  );
}
