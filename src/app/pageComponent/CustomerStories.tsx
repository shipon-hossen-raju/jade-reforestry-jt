import storiesImage1 from "@/asserts/client-storie-1.png";
import storiesImage2 from "@/asserts/client-storie-2.png";
import storiesImage3 from "@/asserts/client-storie-3.png";
import CustomImage from "@/components/Elements/CustomImage";
import MainContainer from "@/components/Elements/MainContainer";
import { StaticImageData } from "next/image";

type TStoriesData = {
  id: string;
  title: string;
  description: string;
  image: StaticImageData;
};

const storiesData: TStoriesData[] = [
  {
    id: "1",
    title: "Boerderij De Groene Hoop",
    description:
      "De gemeente Natuurstad wilde haar stedelijke omgeving vergroenen en biodiversiteit bevorderen. Met onze hulp hebben ze parken en.....",
    image: storiesImage1,
  },
  {
    id: "2",
    title: "Gemeente Natuurstad",
    description:
      "Boerderij De Groene Hoop had te kampen met afnemende oogsten door bodemerosie en extreme weersomstandigheden. Door samen.....",
    image: storiesImage2,
  },
  {
    id: "3",
    title: "Stichting Groen Leven",
    description:
      "De gemeente Natuurstad wilde haar stedelijke omgeving vergroenen en biodiversiteit bevorderen. Met onze hulp hebben ze parken en verlaten.....",
    image: storiesImage3,
  },
];

export default function CustomerStories() {
  return (
    <section data-aos="fade-up" data-aos-anchor-placement="top-bottom">
      <MainContainer className="pb-[72px] pt-[70px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-center">
          {storiesData.map((item, num) => (
            <StoriesCard num={num} key={`stories-${item.id}`} item={item} />
          ))}
        </div>
      </MainContainer>
    </section>
  );
}

function StoriesCard({ item, num }: { item: TStoriesData; num: number }) {
  return (
    <div
      data-aos="zoom-in"
      data-aos-delay={`${num * 300}`}
      className="relative"
    >
      <CustomImage src={item.image} className="w-full" />
      <div className="text-white absolute left-5 bottom-6 w-[96%] p-2 border-l-2 border-greenPrimary">
        <h3 className="text-2xl leading-[32px] font-normal mb-1">
          {" "}
          {item.title}{" "}
        </h3>
        <p className="font-normal text-lg leading-6 "> {item.description} </p>
      </div>
    </div>
  );
}
