"use client";
import ArrowDownSvg from "@/components/svg/ArrowDownSvg";
import ArrowUpSvg from "@/components/svg/ArrowUpSvg";
import CarTypeSvg from "@/components/svg/CarTypeSvg";
import GasSvg from "@/components/svg/GasSvg";
import TransmissionSvg from "@/components/svg/TransmissionSvg";
import AxleSvg from "@/components/svg/AxleSvg";
import WheelSvg from "@/components/svg/AxleSvg";
import mainStore from "@/store/mainStore";
import { useState } from "react";
import styled from "styled-components";

export default function VehicleCardComponent({
  price,
  name,
  image,
  gasType,
  carType,
  transmission,
  axle,
}) {
  return (
    <MainDiv>
      <VehicleImage src={image}></VehicleImage>
      <CardRightSide>
        <RightSideHead>
          <CarPriceText>{price}</CarPriceText>
          <CarName>{name}</CarName>
        </RightSideHead>
        <Line></Line>
        <RightSideList>
          <TextAndSvgDiv>
            <TextAndSvg>
              <GasSvg />
              <SvgText>{gasType}</SvgText>
            </TextAndSvg>
            <TextAndSvg>
              <CarTypeSvg />
              <SvgText>{carType}</SvgText>
            </TextAndSvg>
          </TextAndSvgDiv>
          <TextAndSvgDiv>
            <TextAndSvg>
              <AxleSvg />
              <SvgText>{axle}</SvgText>
            </TextAndSvg>
            <TextAndSvg>
              <TransmissionSvg />
              <SvgText>{transmission}</SvgText>
            </TextAndSvg>
          </TextAndSvgDiv>
          <MainButton style={{}}>
            Order Vehicle
            <ButtonLine></ButtonLine>
          </MainButton>
        </RightSideList>
      </CardRightSide>
    </MainDiv>
  );
}

const MainDiv = styled.div`
  display: flex;
  gap: 34px;
  width: 682px;
  height: 308px;
  background-color: white;
  padding: 24px 32px 28px 0;
  clip-path: polygon(86px 0, 100% 0, 100% 100%, 0 100%, 0 66px);
`;
const VehicleImage = styled.img`
  margin-top: 30px;
  width: 50%;
  height: 247px;
`;
const CardRightSide = styled.div`
  width: 50%;
`;
const RightSideHead = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;
const CarPriceText = styled.h1`
  font-family: "Atkinson Hyperlegible";
  color: var(--darkBlue);
  font-size: 52px;
  font-weight: bold;
`;
const CarName = styled.h1`
  font-family: "Atkinson Hyperlegible";
  color: var(--darkBlue);
  font-size: 24px;
  font-weight: bold;
`;
const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: grey;
  margin-bottom: 16px;
  margin-top: 16px;
`;
const RightSideList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`;
const TextAndSvg = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 12px;
`;
const SvgText = styled.p`
  color: var(--middleGrey);
`;
const TextAndSvgDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
`;
const MainButton = styled.button`
  align-self: flex-end;
  width: 164px;
  height: 47px;
  background-color: var(--darkBlue);
  color: white;
  font-weight: bold;
  font-size: 14px;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
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
const ButtonLine = styled.div`
  width: 28px;
  height: 2px;
  background-color: white;
`;
