import logoImg from "@/asserts/Main-Logo.png";
import CustomImage from "@/components/Elements/CustomImage";
import MainContainer from "@/components/Elements/MainContainer";
import Link from "next/link";

type TNav = {
  id: string;
  name: string;
  route: string;
};

const footerNav: TNav[] = [
  {
    id: "1",
    name: "Home",
    route: "#",
  },
  {
    id: "2",
    name: "Over Ons",
    route: "#",
  },
  {
    id: "3",
    name: "Agroforestry",
    route: "#",
  },
  {
    id: "4",
    name: "Projecten & Fotso's",
    route: "#",
  },
  {
    id: "5",
    name: "Contact",
    route: "#",
  },
];
const socialsNav: TNav[] = [
  {
    id: "s1",
    name: "Linkedin",
    route: "#",
  },
  {
    id: "s2",
    name: "Facebook",
    route: "#",
  },
  {
    id: "s3",
    name: "Twitter",
    route: "#",
  },
  {
    id: "s4",
    name: "Youtube",
    route: "#",
  },
];

export default function Footer() {
  return (
    <footer className="bg-greenPrimary py-6 text-white">
      <MainContainer>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 py-6">
          <div className="md:col-span-2">
            <CustomImage src={logoImg} />
            <h3 className="text-base leading-6 font-normal">
              "De beste tijd om een boom te planten was 20 jaar geleden. De op
              één na beste tijd is nu."
            </h3>
          </div>

          <div>
            <h2 className="text-[22px] leading-[32px] font-normal mb-2.5">
              Links
            </h2>

            <div className="flex items-start flex-col justify-start gap-[5px]">
              {footerNav.map((item) => (
                <Link
                  key={`footer-${item.id}`}
                  className="text-base leading-[22px] font-normal"
                  href="#"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-[22px] leading-[32px] font-normal mb-2.5">
              Socials
            </h2>

            <div className="flex items-start flex-col justify-start gap-[5px]">
              {socialsNav.map((item) => (
                <Link
                  key={`socials-${item.id}`}
                  className="text-base leading-[22px] font-normal"
                  href="#"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-[22px] leading-[32px] font-normal mb-2.5">
              NEEM CONTACT OP
            </h2>
            <p>
              Boxtelseweg 27B, 5481VE Schijndel info@jadereforestry.com +31 6
              128 464 80 BTW-ID NL003147799B90 KVK 77106903 IBAN NL11 RABO 0352
              2704 89
            </p>
          </div>
        </div>

        {/* copyright */}
        <div>
          <p className="text-center py-6 text-base font-normal">
            {" "}
            &copy; Jade Reforestry | 2024 | jadereforestry.nl | Web Design by
            Online Marketing Bakery{" "}
          </p>
        </div>
      </MainContainer>
    </footer>
  );
}
