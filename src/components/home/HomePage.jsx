"use client";

import { useState } from "react";
import styled from "styled-components";
import DropDownComponent from "./dropDownComponent/DropDownComponent";
import mainStore from "@/store/mainStore";
import TeslaSvg from "../svg/TeslaSvg";

export default function HomePage() {
  function getStateTaxRate(state) {
    const taxRates = {
      CA: 0.0875,
      TX: 0.0625,
      FL: 0.06,
      NY: 0.04,
      GA: 0.07,
      // Add more as needed
    };
    return taxRates[state] || 0.07; // Default to 7% if unknown
  }

  const carModel = mainStore((state) => state.carModel);
  const budget = [
    { model: "Audi A4 2014-2016", type: "budget" },
    { model: "BMW 320 2013-2016", type: "budget" },
    { model: "BMW 320 2013-2015", type: "budget" },
    { model: "Buick Encore 2017-2020", type: "budget" },
    { model: "Chevrolet Cruze 2016-2020", type: "budget" },
    { model: "Chevrolet Malibu 2016-2020", type: "budget" },
    { model: "Chevrolet Trax 2017-2020", type: "budget" },
    { model: "Fiat 500 2016-2020", type: "budget" },
    { model: "Ford Fusion 2013-2020", type: "budget" },
    { model: "Ford Focus 2017-2018", type: "budget" },
    { model: "Ford EcoSport 2018-2020", type: "budget" },
    { model: "Ford Escape 2017-2018", type: "budget" },
    { model: "Honda Accord 2014-2017", type: "budget" },
    { model: "Hyundai Sonata 2016-2020", type: "budget" },
    { model: "Hyundai Elantra 2017-2018", type: "budget" },
    { model: "Hyundai Tucson 2014-2015", type: "budget" },
    { model: "Jeep Renegade 2015-2018", type: "budget" },
    { model: "Jeep Compass 2014-2016", type: "budget" },
    { model: "Jeep Patriot 2014-2017", type: "budget" },
    { model: "Kia Optima 2016-2020", type: "budget" },
    { model: "Kia Forte 2017-2018", type: "budget" },
    { model: "Kia Rio 2017-2020", type: "budget" },
    { model: "Kia Soul 2017-2019", type: "budget" },
    { model: "Kia Sportage 2014-2015", type: "budget" },
    { model: "Lincoln MKZ 2013-2016", type: "budget" },
    { model: "Lexus CT-200h 2014-2015", type: "budget" },
    { model: "Mazda 3 2015-2018", type: "budget" },
    { model: "Mazda 6 2014-2018", type: "budget" },
    { model: "Mercedes C Class 2013-2014", type: "budget" },
    { model: "Mini Cooper 2014-2018", type: "budget" },
    { model: "Mitsubishi Outlander 2014-2015", type: "budget" },
    { model: "Mitsubishi Outlander Sport 2014-2019", type: "budget" },
    { model: "Nissan Roge 2015-2016", type: "budget" },
    { model: "Nissan Quest 2013-2017", type: "budget" },
    { model: "Nissan Pathfinder 2013-2018", type: "budget" },
    { model: "Nissan Juke 2014-2016", type: "budget" },
    { model: "Nissan Sentra 2014-2018", type: "budget" },
    { model: "Subaru Forester 2015-2018", type: "budget" },
    { model: "Subaru Outback 2015-2019", type: "budget" },
    { model: "Subaru Crosstrek 2014-2015", type: "budget" },
    { model: "Toyota Camry 2013-2014", type: "budget" },
    { model: "Toyota Prius 2014-2015", type: "budget" },
    { model: "Toyota Prius c 2013-2016", type: "budget" },
    { model: "Toyota Prius V 2013-2015", type: "budget" },
    { model: "Toyota Yaris 2013-2015", type: "budget" },
    { model: "Volkswagen Golf 2014-2017", type: "budget" },
    { model: "Volkswagen Jetta 2016-2017", type: "budget" },
    { model: "Volkswagen Passat 2015-2018", type: "budget" },
  ];
  const middle = [
    "Lexus IS 250 2015-2020",
    "KIA Optima 2016-2018",
    "Audi A8 2014-2019",
    "Audi A8 2018-2019",
    "Audi A8 2018-2019",
  ];
  const premium = [
    "Mercedes-Benz CLS 2015-2020",
    "BMW 7 Series 2016-2020",
    "Audi A8 2018-2019",
    "Audi A8 2018-2019",
  ];
  console.log(carModel);
  return (
    <MainBox>
      <HeaderDiv>
        <HeaderLeftSide>
          <HeaderLeftSideTexts>
            <HeaderSmallText>PLAN YOUR TRIP NOW </HeaderSmallText>
            <MainText>EXPLORE THE WORLD WITH US</MainText>
          </HeaderLeftSideTexts>
          <MainButton>
            შეუკვეთე
            <ButtonLine></ButtonLine>
          </MainButton>
        </HeaderLeftSide>
        <HeadBanner></HeadBanner>
      </HeaderDiv>
      <MiddleDiv>
        <BoxDiv>
          <TeslaSvg />
          <BigText>ტექსტი</BigText>
          <SmallText>გრძელი ტექსტი</SmallText>
        </BoxDiv>
        <BoxDiv>
          <TeslaSvg />
          <BigText>ტექსტი</BigText>
          <SmallText>გრძელი ტექსტი</SmallText>
        </BoxDiv>
        <BoxDiv>
          <TeslaSvg />
          <BigText>ტექსტი</BigText>
          <SmallText>გრძელი ტექსტი</SmallText>
        </BoxDiv>
        <BoxDiv>
          <TeslaSvg />
          <BigText>ტექსტი</BigText>
          <SmallText>გრძელი ტექსტი</SmallText>
        </BoxDiv>
      </MiddleDiv>
      {/* <VehiclesDiv>
        <CarCard>
          <ImageWrapper>
            <CarImage src="/images/ford.png" alt="Car 1" />
          </ImageWrapper>
          <CardText>ბიუჯეტური</CardText>
          <CardText>4000-5000$</CardText>
          <DropDownComponent brands={budget} />
          {carModel.type === "budget" && <DoneButton>შეკვეთა</DoneButton>}
        </CarCard>
        <CarCard>
          <ImageWrapper>
            <CarImage src="/images/bmw.png" alt="Car 2" />
          </ImageWrapper>
          <CardText style={{ marginTop: "-40px" }}>საშუალო</CardText>
          <CardText>4000-5000$</CardText>
          <DropDownComponent brands={middle} />
        </CarCard>
        <CarCard>
          <ImageWrapper>
            <CarImage src="/images/lexus.png" alt="Car 3" />
          </ImageWrapper>
          <CardText style={{ marginTop: "-20px" }}>პრემიუმი</CardText>
          <CardText>4000-5000$</CardText>
          <DropDownComponent brands={premium} />
        </CarCard>
      </VehiclesDiv> */}
    </MainBox>
  );
}

const MainBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  padding-top: 92px;
  background-color: #f2f4f9;
`;

const HeaderDiv = styled.div`
  display: flex;
  margin-left: 120px;
  width: 100%;
`;
const MiddleDiv = styled.div`
  width: 100%;
  display: flex;
  padding: 40px;
  background-color: #f2f4f9;
`;
const BoxDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 25%;
`;

const SmallText = styled.h3`
  font-size: 18px;
  color: var(--middleGrey);
`;
const HeaderLeftSide = styled.div`
  display: flex;
  flex-direction: column;
`;

const HeaderLeftSideTexts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
const HeaderSmallText = styled.h6`
  font-family: "Open Sans";
  font-size: 22px;
  font-weight: 300;
  color: var(--red);
`;
const MainText = styled.h1`
  font-family: "Atkinson Hyperlegible";
  font-size: 98px;
  max-width: auto;
  font-weight: bold;
  color: var(--darkBlue);
`;

const MainButton = styled.button`
  width: 243px;
  height: 67px;
  background-color: var(--yellow);
  color: white;
  font-weight: bold;
  font-size: 20px;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin-top: 60px;
  clip-path: polygon(
    0 0,
    calc(100% - 20px) 0,
    100% 20px,
    100% 100%,
    20px 100%,
    0 calc(100% - 20px)
  );
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
`;
const HeadBanner = styled.div`
  background-image: url("/images/tesla.png");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  width: 100%;
  height: 712px;
`;

const ButtonLine = styled.div`
  width: 36px;
  height: 4px;
  background-color: white;
`;

const VehiclesDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 25px;
  gap: 30px;
`;

const ImageWrapper = styled.div`
  width: 300px;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f4f4f4;
  border-radius: 12px;
  overflow: hidden;
`;
const CarImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain; /* Or try 'cover' for tighter crop */
`;
const CarCard = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 24px;
  border-radius: 12px;
  padding: 20px;
  height: 500px;
  background-color: #f0f0f0; // Optional: background behind transparent areas
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1); // Optional: subtle shadow
  &:hover {
    transform: scale(1.05);
  }
`;

const CardText = styled.h1`
  font-size: 24px; // Adjust size as needed
  font-weight: 600; // Semi-bold, you can use 700 for bold
  color: #333; // Dark gray text
  margin: 0; // Reset margin
  padding: 0; // Reset padding
  line-height: 1.4; // Improve readability
`;

const LogoImage = styled.img`
  width: 50%;
  height: 300px;
  object-fit: cover;
`;

const DoneButton = styled.button`
  background-color: #6e82a1;
  color: white;
  padding: 8px 16px;
  font-size: 14px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  transition: background-color 0.2s ease;
  &:hover {
    background-color: #005bb5;
  }

  &:active {
    background-color: #00448f;
  }
`;

const HeaderText = styled.h1`
  font-family: "Open Sans";
  color: white;
  font-size: 14pt;
  font-style: inherit;
  font-weight: inherit;
`;
const MiddleBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-left: 20px;
  margin-right: 20px;
  gap: 20px;
`;
const BigText = styled.h1`
  font-size: 20px;
  font-weight: bold;
  color: var(--darkBlue);
  text-transform: uppercase;
`;
const MediumText = styled.h3`
  font-family: "Open Sans";
  line-height: 1.6;
  font-size: 14pt;
  font-variant: normal;
  vertical-align: baseline;
  font-weight: normal;
`;

const About = styled.h2`
  font-family: "Open Sans";
  line-height: 1.6;
  font-size: 14pt;
  font-variant: normal;
  vertical-align: baseline;
  font-weight: normal;
  text-align: center;
`;
const BoldText = styled.h3`
  font-family: "Arial";
  font-weight: 700;
  font-size: 17pt;
  margin-top: 40px;
  color: #000000;
  vertical-align: baseline;
  @media screen and (min-width: 768px) {
    font-size: 18pt;
  }
`;
const MainSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
  margin-top: 40px;

  @media screen and (min-width: 768px) {
    margin-left: 10px;
    margin-right: 10px;
  }
`;
const SectionHeader = styled.h4`
  font-size: 27pt;
  font-family: "Oswald";
  text-transform: uppercase;
  font-weight: 400;
  text-align: left;
  @media screen and (min-width: 480px) {
    font-size: 33pt;
  }
  @media screen and (min-width: 768px) {
    font-size: 38pt;
  }
`;
const SectionImage = styled.img`
  width: 100%;
`;
const PlayBtn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin: 20px 0;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

const Card = styled.div`
  flex: 1;
  max-width: 500px;
  width: 100%;
  padding: 24px 40px;
  @media screen and (min-width: 768px) {
    max-width: 700px;
  }
  @media screen and (min-width: 1024px) {
    max-width: 900px;
  }
  @media screen and (min-width: 1280px) {
    max-width: 1200px;
  }
  @media screen and (min-width: 1536px) {
    max-width: 1400px;
    padding: 0 200px;
  }
  @media screen and (min-width: 1920px) {
    padding: 0 250px;
    max-width: 1600px;
  }
`;
