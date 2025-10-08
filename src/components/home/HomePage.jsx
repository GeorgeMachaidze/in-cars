"use client";

import { useEffect, useState } from "react";
import styled from "styled-components";
import DropDownComponent from "./dropDownComponent/DropDownComponent";
import mainStore from "@/store/mainStore";
import TeslaSvg from "../svg/TeslaSvg";
import EvacuatorSvg from "../svg/EvacuatorSvg";
import TaxiDriverSvg from "../svg/TaxiDriverSvg";
import PartsSvg from "../svg/PartsSvg";
import VehicleCardComponent from "./cardComponent/VehicleCardComponent";
import AuctionFeeCalculator from "./AuctionFeeCalculator";

export default function HomePage() {
  const carModel = mainStore((state) => state.carModel);

  return (
    <MainBox>
      <HeaderDiv>
        <HeaderLeftSide>
          <HeaderLeftSideTexts>
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
        <DealerImage src="/images/copart.png"></DealerImage>
      </MiddleDiv>
      <AboutUsDiv>
        <AboutUsMediumText>providing reliable car rentals</AboutUsMediumText>
        <AboutUsMiddleDiv>
          <AboutUsLeftDiv>
            <IconsAndText>
              <AboutUsCircle>
                <AboutUsNumber>1</AboutUsNumber>
              </AboutUsCircle>
              <AboutUsText>Select Desired Vehicle</AboutUsText>
            </IconsAndText>
            <IconsAndText>
              <AboutUsCircle>
                <AboutUsNumber>2</AboutUsNumber>
              </AboutUsCircle>
              <AboutUsText>Bid In Auction</AboutUsText>
            </IconsAndText>
            <IconsAndText>
              <AboutUsCircle>
                <AboutUsNumber>3</AboutUsNumber>
              </AboutUsCircle>
              <AboutUsText>Win The Auction</AboutUsText>
            </IconsAndText>
            <IconsAndText>
              <AboutUsCircle>
                <AboutUsNumber>4</AboutUsNumber>
              </AboutUsCircle>
              <AboutUsText>Load In Container</AboutUsText>
            </IconsAndText>
            <IconsAndText>
              <AboutUsCircle>
                <AboutUsNumber>5</AboutUsNumber>
              </AboutUsCircle>
              <AboutUsText>Ship To Destination</AboutUsText>
            </IconsAndText>
          </AboutUsLeftDiv>
          <AboutUsRightDiv>
            <AboutUsRightSideImage src="/images/containerCar.png"></AboutUsRightSideImage>
          </AboutUsRightDiv>
        </AboutUsMiddleDiv>
      </AboutUsDiv>
      <VehicleComponents>
        <VehicleComponentHeader>
          <VehicleCardsHeaderText>Top 4 Cars In Georgia</VehicleCardsHeaderText>
          <MainButton
            style={{
              padding: "20px 24px 20px 40px",
              fontSize: "20px",
              width: "282px",
              marginTop: 0,
            }}
          >
            Discover Vehicles
            <ButtonLine></ButtonLine>
          </MainButton>
        </VehicleComponentHeader>
        <VehicleCardsMiddle>
          <VehicleCardsDiv>
            <VehicleCardComponent
              image={"/images/camry.png"}
              name={"Toyota Camry"}
              price="3500$"
              gasType="Gasoline"
              carType="Business"
              transmission="Automatic"
              axle="F W D"
            />
            <VehicleCardComponent
              image={"/images/subaru.png"}
              name={"Subaru Forester"}
              price="2500$"
              gasType="Gasoline"
              carType="SUV"
              transmission="Automatic"
              axle="A W D"
            />
          </VehicleCardsDiv>
          <VehicleCardsDiv>
            <VehicleCardComponent
              image={"/images/prius.png"}
              name={"Toyota Prius"}
              price="2800$"
              gasType="Gasoline"
              carType="Family"
              transmission="Automatic"
              axle="F W D"
            />
            <VehicleCardComponent
              image={"/images/fusion.png"}
              name={"Ford Fusion"}
              price="5500$"
              gasType="Gasoline"
              carType="Business"
              transmission="Automatic"
              axle="F W D"
            />
          </VehicleCardsDiv>
        </VehicleCardsMiddle>
      </VehicleComponents>
    </MainBox>
  );
}

const MainBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  padding-top: 92px;
  background-color: #f2f4f9;
`;
const VehicleComponents = styled.div`
  width: 100%;
  background-color: #f2f4f9;
  padding: 100px;
`;

const VehicleCardsHeaderText = styled.h1`
  font-family: "Atkinson Hyperlegible";
  font-size: 52px;
  max-width: auto;
  font-weight: bold;
  text-transform: uppercase;
  color: var(--darkBlue);
`;
const VehicleCardsMiddle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 60px;
`;
const VehicleCardsDiv = styled.div`
  display: flex;
  gap: 76px;
`;

const VehicleComponentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 60px;
`;
const HeaderDiv = styled.div`
  display: flex;
  margin-left: 120px;
  width: 100%;
`;
const AboutUsDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
  width: 100%;
  background-color: #f2f4f9;
`;
const AboutUsLeftDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 50%;
`;
const AboutUsRightDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 50%;
`;
const AboutUsMediumText = styled.h3`
  font-family: "Atkinson Hyperlegible";
  font-size: 50px;
  font-weight: bold;
  text-transform: uppercase;
  color: var(--darkBlue);
`;

const AboutUsCircle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 50px;
  min-height: 50px;
  background-color: var(--darkBlue);
  border-radius: 50%;
`;

const AboutUsNumber = styled.h1`
  font-size: 40px;
  font-weight: bold;
  color: white;
`;
const AboutUsText = styled.h1`
  font-weight: bold;
  font-size: 32px;

  color: var(--darkBlue);
`;
const IconsAndText = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;
const MiddleDiv = styled.div`
  width: 100%;
  display: flex;
  padding: 40px;
  margin-top: 20px;
  background-color: var(--darkBlue);
`;
const DealerImage = styled.img`
  width: 350px;
  height: 150px;
`;
const AboutUsRightSideImage = styled.img`
  width: 340px;
  height: 450px;
`;

const AboutUsMiddleDiv = styled.div`
  display: flex;
  gap: 22px;
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
  background-color: var(--darkBlue);
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
  background-image: url("/images/BigBmw.png");
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
