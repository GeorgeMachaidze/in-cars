"use client";

import { useState } from "react";
import styled from "styled-components";
import DropDownComponent from "./dropDownComponent/DropDownComponent";

export default function HomePage() {
  const budget = [
    "Audi A4 2014-2016",
    "BMW 320 2013-2016",
    "BMW 320 2013-2015",
    "Buick Encore 2017-2020",
    "Chevrolet Cruze 2016-2020",
    "Chevrolet Malibu 2016-2020",
    "Chevrolet Trax 2017-2020",
    "Fiat 500 2016-2020",
    "Ford Fusion 2013-2020",
    "Ford Focus 2017-2018",
    "Ford EcoSport 2018-2020",
    "Ford Escape 2017-2018",
    "Honda Accord 2014-2017",
    "Hyundai Sonata 2016-2020",
    "Hyundai Elantra 2017-2018",
    "Hyundai Tucson 2014-2015",
    "Jeep Renegade 2015-2018",
    "Jeep Compass 2014-2016",
    "Jeep Patriot 2014-2017",
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

  return (
    <MainBox>
      <HeaderDiv>
        <LogoImage src="/images/logo.png" alt="logo"></LogoImage>
        <MainText>მანქანების იმპორტი</MainText>
      </HeaderDiv>
      <VehiclesDiv>
        <CarCard>
          <ImageWrapper>
            <CarImage src="/images/ford.png" alt="Car 1" />
          </ImageWrapper>
          <CardText>ბიუჯეტური</CardText>
          <CardText>4000-5000$</CardText>
          <DropDownComponent brands={budget} />
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
      </VehiclesDiv>
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
  height: 400px;
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

const MainText = styled.h1``;
const HeaderDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
`;

const HeadBanner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;
  background-image: url("/images/fusion.png");
  height: 1000px;
  /* @media screen and (min-width: 1280px) {
    height: 450px;
  }
  @media screen and (min-width: 1024px) {
    height: 400px;
  }
  @media screen and (min-width: 1536px) {
    height: 450px;
  }
  @media screen and (min-width: 1920px) {
    height: 550px;
  } */
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
  font-family: "Oswald";
  font-size: 22pt;
  line-height: 1.42;
  font-weight: 400;
  color: rgba(31, 31, 31, 1);
  text-transform: uppercase;
  margin-top: 100px;
  margin-bottom: 80px;
  @media screen and (min-width: 480px) {
    font-size: 26pt;
  }
  @media screen and (min-width: 768px) {
    font-size: 29pt;
  }
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
