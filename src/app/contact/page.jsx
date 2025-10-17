"use client";

import styled from "styled-components";
import Contact from "@/components/contact/Contact";

export default function ContactPage() {
  return (
    <MainDiv>
      <MiddleDiv>
        <Contact />
      </MiddleDiv>
    </MainDiv>
  );
}
const MainDiv = styled.div``;
const MiddleDiv = styled.div``;
