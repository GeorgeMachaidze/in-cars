"use client";
import ArrowDownSvg from "@/components/svg/ArrowDownSvg";
import ArrowUpSvg from "@/components/svg/ArrowUpSvg";
import mainStore from "@/store/mainStore";
import { useState } from "react";
import styled from "styled-components";

export default function VehicleCardComponent({
  price,
  name,
  image,
  gasType,
  transmission,
}) {
  return <MainDiv></MainDiv>;
}

const MainDiv = styled.div`
  width: 562px;
  height: 308px;
`;
