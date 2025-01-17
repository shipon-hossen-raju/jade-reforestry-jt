// components/MainContainer.tsx
import React from "react";

interface MainContainerProps {
  children: React.ReactNode;
  className?: string;
}

const MainContainer: React.FC<MainContainerProps> = ({
  children,
  className = "",
}) => {
  return (
    <div
      className={`max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}
    >
      {children}
    </div>
  );
};

export default MainContainer;
