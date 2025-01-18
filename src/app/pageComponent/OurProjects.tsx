import { TikTikIcon } from "@/asserts/icons/icons";
import projectImg1 from "@/asserts/project-image-1.png";
import Button from "@/components/Elements/Button";
import CustomImage from "@/components/Elements/CustomImage";
import MainContainer from "@/components/Elements/MainContainer";
import { StaticImageData } from "next/image";

type TProjectData = {
  id: string;
  image: string | StaticImageData;
  subTitle: string;
  title: string;
  description: string;
  feature: string[];
};

const projectData: TProjectData[] = [
  {
    id: "1",
    image: projectImg1,
    subTitle: "Veluwe, Nederland",
    title: "Herbebossing Veluwe",
    description:
      "Dit project richt zich op het herstellen van gedegradeerde bossen in de Veluwe ",
    feature: [
      "2.000.000 bomen geplant",
      "10 bedreigde diersoorten beschermd",
      "150 lokale banen gecreeerd",
    ],
  },
  {
    id: "2",
    image: projectImg1,
    subTitle: "Groningen, Nederland",
    title: "Groen Groningen",
    description:
      "Dit project richt zich op het herstellen van gedegradeerde bossen in de Veluwe ",
    feature: [
      "1.500.000 bomen geplant",
      "3.000 hectare onder herstel",
      "20 gemeenschappen betrokken",
    ],
  },
  {
    id: "3",
    image: projectImg1,
    subTitle: "Rotterdam, Nederland",
    title: "Stadsbos Rotterdam",
    description:
      "Dit project richt zich op het herstellen van gedegradeerde bossen in de Veluwe ",
    feature: [
      "500.000 bomen geplant",
      "1.000 hectare onder herstel",
      "50.000 inwoners direct gebaat",
    ],
  },
];

export default function OurProjects() {
  return (
    <section>
      <MainContainer className="py-[72px]">
        <div className="mb-6">
          <h1 className="text-4xl leading-[48px] font-normal mb-[33px] max-w-[580px]">
            Samen werken aan een groenere wereld: bekijk onze projecten
          </h1>

          <div className="flex flex-col md:flex-row items-start justify-between gap-5">
            <p className="text-lg font-normal leading-6">
              Bossen zijn een van de meest effectieve oplossingen om de effecten
              van klimaatverandering aan te pakken. Ze zijn ook een krachtige
              kracht om mensen uit de armoede te halen, biodiversiteit te
              behouden en verwoestijning terug te dringen.
            </p>

            <p className="text-lg font-normal leading-6 p-6 bg-[#F0ECE3] border-l-4 border-greenPrimary">
              In plaats van alleen meer bomen te planten, werken we aan het
              herstellen van landschappen en het beschermen ervan tegen
              ontbossing op de lange termijn.
            </p>
          </div>
        </div>

        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-[26px]">
            {projectData.map((item) => (
              <ProjectCard key={`project-${item.id}`} item={item} />
            ))}
          </div>

          <div className="text-center">
            <Button className="mx-auto"> Dekijk onze projeeten</Button>
          </div>
        </div>
      </MainContainer>
    </section>
  );
}

function ProjectCard({ item }: { item: TProjectData }) {
  return (
    <div className="" style={{ boxShadow: "0px 4px 28px -4px #0000001F" }}>
      <figure>
        <CustomImage src={item?.image} className="rounded-t-[10px] w-full" />
      </figure>
      <div className="py-8 px-2.5 rounded-[10px] border-b-2 border-greenPrimary">
        <h4 className="text-sm font-normal leading-[19px] text-greenPrimary">
          {item.subTitle}
        </h4>
        <h1 className="text-2xl font-normal leading-[32px]"> {item.title} </h1>
        <p className="text-base leading-[22px]"> {item.description} </p>
        <hr className="my-3" />
        <div className="space-y-4">
          {item.feature.map((item, key) => (
            <div key={`tik-${key}`} className="flex items-center gap-5">
              <figure className="w-5 h-3">
                <span>{TikTikIcon}</span>
              </figure>
              <p className="text-lg leading-6 font-normal"> {item} </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
