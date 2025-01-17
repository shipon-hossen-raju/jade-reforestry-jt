import logoImage from "@/asserts/Main-Logo.png";
import CustomImage from "@/components/Elements/CustomImage";
import MainContainer from "@/components/Elements/MainContainer";
import Link from "next/link";

const menuList = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Over Ons",
    path: "/#over-ons",
  },
  {
    name: "Agroforestry",
    path: "/#agroforestry",
  },
  {
    name: "De Kwekerij",
    path: "/#de-kwekerij",
  },
  {
    name: "Projecten & Foto's",
    path: "/#projecten-fotos",
  },
  {
    name: "Contact",
    path: "/#contact",
  },
];

export default function MenuHeader() {
  return (
    <div className=" bg-darkGreen ">
      <MainContainer className="relative">
        <div className="min-h-[68px] flex items-center justify-between gap-4">
          {/* logo */}
          <div className="max-w-[253px]">
            <CustomImage src={logoImage} className="absolute bottom-0 left-0" />
          </div>

          {/* menu list */}
          <div>
            {menuList.map((item, key) => (
              <Link
                key={item.path}
                href={item.path}
                className={`text-white py-6 px-7 ${
                  menuList.length - 1 === key && "pr-0"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </MainContainer>
    </div>
  );
}
