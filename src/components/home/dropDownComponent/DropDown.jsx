"use client";
import { useState } from "react";
import styled from "styled-components";
import ArrowUpSvg from "../svg/ArrowUpSvg";
import ArrowDownSvg from "../svg/ArrowDownSvg";

export default function DropDown() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <DropDown onClick={() => setIsOpen(!isOpen)}>
      <DropDownText>მანქანის არჩევა</DropDownText>
      {isOpen ? <ArrowUpSvg /> : <ArrowDownSvg />}
    </DropDown>
  );
}

const DropDown = styled.div`
  width: 250px;
  height: 50px;
  background-color: #ffffff;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 10px 12px;
  font-size: 16px;
  color: #333;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  user-select: none;

  &:hover {
    border-color: #999;
  }
`;

const DropDownText = styled.h3`
  font-size: 18px;
  font-weight: 500;
  color: #333;
  margin: 0;
  padding: 0;
  line-height: 1.4;
`;
