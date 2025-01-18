"use client";

import { closeMenuIcon, FiMenuIcon } from "@/asserts/icons/icons";
import logoImage from "@/asserts/Main-Logo.png";
import CustomImage from "@/components/Elements/CustomImage";
import MainContainer from "@/components/Elements/MainContainer";
import Link from "next/link";
import { useState } from "react";

const menuList = [
  { name: "Home", path: "/" },
  { name: "Over Ons", path: "/#over-ons" },
  { name: "Agroforestry", path: "/#agroforestry" },
  { name: "De Kwekerij", path: "/#de-kwekerij" },
  { name: "Projecten & Foto's", path: "/#projecten-fotos" },
  { name: "Contact", path: "/#contact" },
];

export default function MenuHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className="bg-darkGreen z-50 relative">
      <MainContainer className="relative z-50">
        <div className="min-h-[68px] flex items-center justify-between gap-4">
          {/* Logo */}
          <div className="max-w-[253px]">
            <CustomImage src={logoImage} className="w-full h-auto" />
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-white text-2xl"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <span>{closeMenuIcon}</span>
            ) : (
              <span>{FiMenuIcon}</span>
            )}
          </button>

          {/* Menu List */}
          <nav
            className={`${
              isMenuOpen
                ? "z-10 visible opacity-100 h-auto mt-10 scale-100"
                : "invisible opacity-0 h-0 scale-0"
            } z-10 lg:visible lg:opacity-100 lg:h-auto lg:scale-100 flex flex-col lg:flex md:flex-row items-center justify-end gap-4 absolute lg:static top-[68px] left-0 w-full bg-darkGreen lg:bg-transparent transition-all duration-300 py-4`}
          >
            {menuList.map((item, key) => (
              <Link
                key={item.path}
                href={item.path}
                className="text-white text-sm xl:text-base py-2 px-3 md:py-4 hover:text-green-400 transition"
                onClick={() => setIsMenuOpen(false)} // Close menu on link click
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </MainContainer>
    </header>
  );
}

// import logoImage from "@/asserts/Main-Logo.png";
// import CustomImage from "@/components/Elements/CustomImage";
// import MainContainer from "@/components/Elements/MainContainer";
// import Link from "next/link";

// const menuList = [
//   {
//     name: "Home",
//     path: "/",
//   },
//   {
//     name: "Over Ons",
//     path: "/#over-ons",
//   },
//   {
//     name: "Agroforestry",
//     path: "/#agroforestry",
//   },
//   {
//     name: "De Kwekerij",
//     path: "/#de-kwekerij",
//   },
//   {
//     name: "Projecten & Foto's",
//     path: "/#projecten-fotos",
//   },
//   {
//     name: "Contact",
//     path: "/#contact",
//   },
// ];

// export default function MenuHeader() {
//   return (
//     <div className=" bg-darkGreen ">
//       <MainContainer className="relative">
//         <div className="min-h-[68px] flex flex-col md:flex-row items-center justify-between gap-4">
//           {/* logo */}
//           <div className="max-w-[253px] hidden md:block">
//             <CustomImage src={logoImage} className="absolute bottom-0 left-0" />
//           </div>

//           {/* menu list */}
//           <div className="flex flex-col md:flex-row items-center justify-end gap-3">
//             {menuList.map((item, key) => (
//               <Link
//                 key={item.path}
//                 href={item.path}
//                 className={`text-white py-2 md:py-6 px-4 ${
//                   menuList.length - 1 === key && "pr-0"
//                 }`}
//               >
//                 {item.name}
//               </Link>
//             ))}
//           </div>
//         </div>
//       </MainContainer>
//     </div>
//   );
// }
