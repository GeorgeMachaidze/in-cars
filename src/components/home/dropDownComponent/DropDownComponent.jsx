"use client";
import ArrowDownSvg from "@/components/svg/ArrowDownSvg";
import ArrowUpSvg from "@/components/svg/ArrowUpSvg";
import mainStore from "@/store/mainStore";
import { useState } from "react";
import styled from "styled-components";

export default function DropDownComponent({ brands }) {
  const carModel = mainStore((state) => state.carModel);
  const updateData = mainStore((state) => state.updateData);
  const [selectedModel, setSelectedModel] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const handleSelect = (brand) => {
    setSelectedModel(brand);
    updateData("carModel", brand);
    setIsOpen(false);
  };
  console.log(carModel?.type);
  return (
    <MainDiv onClick={() => setIsOpen(!isOpen)}>
      <DropDownText>
        {selectedModel && selectedModel?.type === "budget"
          ? carModel?.model
          : "მანქანის არჩევა"}
      </DropDownText>
      {isOpen ? <ArrowUpSvg /> : <ArrowDownSvg />}
      {isOpen && (
        <List>
          {brands.map((brand, index) => (
            <ListItem key={index} onClick={() => handleSelect(brand)}>
              {brand?.model}
            </ListItem>
          ))}
        </List>
      )}
    </MainDiv>
  );
}

const MainDiv = styled.div`
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
  text-align: center;
`;
const List = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  background: white;
  width: 100%;
  border-radius: 8px;
  height: 200px;
  overflow: auto;
  margin-top: 4px;
  padding: 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const ListItem = styled.li`
  padding: 10px;
  list-style: none;
  cursor: pointer;

  text-align: left;

  &:hover {
    background-color: #f0f0f0;
  }
`;
