"use client";

import styled from "styled-components";
import Navbar from "../components/nav-bar/Navbar";
import HomePage from "@/components/home/HomePage";

export default function Landing() {
  return (
    <MainDiv>
      <MiddleDiv>
        <HomePage />
      </MiddleDiv>
    </MainDiv>
  );
}

const MainDiv = styled.div``;
const MiddleDiv = styled.div``;
