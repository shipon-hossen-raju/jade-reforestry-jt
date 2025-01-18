"use client";

import AOS from "aos";
import { useEffect } from "react";

export default function useAosAnimation() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return <div></div>;
}
