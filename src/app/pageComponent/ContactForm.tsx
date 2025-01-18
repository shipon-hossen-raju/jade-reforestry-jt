"use client";

import contactImg from "@/asserts/contact-form-img.png";
import bgImage from "@/asserts/onze-droom-bg.png";
import Button from "@/components/Elements/Button";
import CustomImage from "@/components/Elements/CustomImage";
import MainContainer from "@/components/Elements/MainContainer";
import Input from "@/components/form/Input";
import Textarea from "@/components/form/Textarea";
import { InputChangeEvent } from "@/types/global";
import { useState } from "react";

interface InputData {
  voomaam: string;
  achternaam: string;
  eMailadres: string;
  telefoonnummer: string;
  onderwerp: string;
  bericht: string;
}

export default function ContactForm() {
  const [inputData, setInputData] = useState<InputData>({
    voomaam: "",
    achternaam: "",
    eMailadres: "",
    telefoonnummer: "",
    onderwerp: "",
    bericht: "",
  });
  const handleOnChange = (event: InputChangeEvent) => {
    setInputData({
      ...inputData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    console.log("form data ", inputData);
  };

  return (
    <section
      className="bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage.src})` }}
    >
      <MainContainer className="pb-[70px] pt-[88px]">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-5">
          <div>
            <h1 className="text-4xl leading-[48px] font-normal mb-1.5">
              Samen maked we het verschil
            </h1>
            <p className="text-lg leading-6 font-normal mb-10">
              Wij geloven dat elke stap richting een groenere toekomst telt.
              Neem contact met ons op om te ontdekken hoe we jou kunnen helpen
              te vergroenen en versterken. Samen maken we het verschil.
            </p>
            <CustomImage src={contactImg} />
          </div>

          <div className="py-6 px-5 bg-white rounded-xl">
            <h3 className="text-[22px] font-normal leading-[30px] text-[#454C4F] mb-6">
              Natuurlijk horen we graag van je. Laten we contact opnemen.
            </h3>

            <form
              className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-3.5"
              onSubmit={handleSubmit}
            >
              <Input onChange={handleOnChange} name="voomaam" label="Vomaam" />
              <Input
                onChange={handleOnChange}
                name="achternaam"
                label="Achternaam"
              />
              <Input
                onChange={handleOnChange}
                label="E-mailadres"
                name="eMailadres"
              />
              <Input
                onChange={handleOnChange}
                name="telefoonnummer"
                label="Telefoonnummer"
              />
              <Input
                onChange={handleOnChange}
                name="onderwerp"
                label="Onderwerp"
                containerClassName="md:col-span-2"
              />

              <Textarea
                onChange={handleOnChange}
                name="bericht"
                label="Bericht"
                containerClassName="md:col-span-2"
              />

              <div>
                <Button type="submit"> Verzenden </Button>
              </div>
            </form>
          </div>
        </div>
      </MainContainer>
    </section>
  );
}
