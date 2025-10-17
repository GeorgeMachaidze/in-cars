"use client";
import { useState, useEffect } from "react";
import styled from "styled-components";
import GeorgianFlagSvg from "@/components/svg/GeorgianFlagSvg";
import RussianFlagSvg from "@/components/svg/RussianFlagSvg";
import UsaFlagSvg from "@/components/svg/UsaFlagSvg";
import mainStore from "@/store/mainStore";
import ArrowUpSvg from "@/components/svg/ArrowUpSvg";
import ArrowDownSvg from "@/components/svg/ArrowDownSvg";

const Languages = () => {
  const { language, setLanguage, loadLanguage } = mainStore();
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    loadLanguage();
  }, [loadLanguage]);
  const allLanguages = [
    { code: "ge", component: <GeorgianFlagSvg /> },
    { code: "en", component: <UsaFlagSvg /> },
    { code: "ru", component: <RussianFlagSvg /> },
  ];

  // Active language first, then the rest
  const sortedLanguages = [
    allLanguages.find((l) => l.code === language),
    ...allLanguages.filter((l) => l.code !== language),
  ];

  return (
    <DropdownContainer isOpen={isOpen}>
      <LanguagesContainer>
        {isOpen ? (
          sortedLanguages.map((lang) => (
            <FlagDiv
              key={lang.code}
              onClick={() => {
                setLanguage(lang.code); // set language
                setIsOpen(false); // close dropdown after selection
              }}
            >
              {lang.component}
            </FlagDiv>
          ))
        ) : (
          // if closed, show only active language
          <FlagDiv onClick={() => setIsOpen(!isOpen)}>
            {allLanguages.find((l) => l.code === language)?.component}
          </FlagDiv>
        )}
      </LanguagesContainer>

      {/* <ArrowDiv onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <ArrowUpSvg /> : <ArrowDownSvg />}
      </ArrowDiv> */}
    </DropdownContainer>
  );
};

export default Languages;
const DropdownContainer = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "isOpen",
})`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  padding: 8px 12px;
  gap: 12px;
  right: 1%;
  top: 24%;
  margin-left: 20px;
  border-radius: 12px;
  transition: all 0.2s ease-in-out;

  /* Conditional styles based on isOpen prop */
  background-color: ${({ isOpen }) => (isOpen ? "#ffffff" : "transparent")};
  box-shadow: ${({ isOpen }) =>
    isOpen ? "0 4px 12px rgba(0, 0, 0, 0.15)" : "none"};

  &:hover {
    box-shadow: ${({ isOpen }) =>
      isOpen ? "0 6px 16px rgba(0, 0, 0, 0.2)" : "none"};
  }
`;

const LanguagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const FlagDiv = styled.div`
  cursor: pointer;
`;

const ArrowDiv = styled.div`
  cursor: pointer;
`;
