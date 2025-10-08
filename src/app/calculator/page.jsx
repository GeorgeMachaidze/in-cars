"use client";

import styled from "styled-components";
import AuctionFeeCalculator from "@/components/home/AuctionFeeCalculator";

export default function CalculatorPage() {
  return (
    <MainDiv>
      <MiddleDiv>
        <AuctionFeeCalculator />
      </MiddleDiv>
    </MainDiv>
  );
}
const MainDiv = styled.div``;
const MiddleDiv = styled.div``;
