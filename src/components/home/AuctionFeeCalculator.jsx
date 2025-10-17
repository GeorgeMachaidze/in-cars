"use client";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ArrowUpSvg from "../svg/ArrowUpSvg";
import ArrowDownSvg from "../svg/ArrowDownSvg";
import mainStore from "@/store/mainStore";
import Footer from "../shared/Footer";

const COPART_TIERS = [
  { min: 0, max: 49.99, fee: 1 },
  { min: 50, max: 99.99, fee: 25 },
  { min: 100, max: 199.99, fee: 50 },
  { min: 200, max: 299.99, fee: 75 },
  { min: 300, max: 349.99, fee: 110 },
  { min: 350, max: 399.99, fee: 125 },
  { min: 400, max: 499.99, fee: 135 },
  { min: 500, max: 599.99, fee: 150 },
  { min: 600, max: 699.99, fee: 160 },
  { min: 700, max: 799.99, fee: 170 },
  { min: 800, max: 899.99, fee: 185 },
  { min: 900, max: 999.99, fee: 200 },
  { min: 1000, max: 1199.99, fee: 225 },
  { min: 1200, max: 1299.99, fee: 240 },
  { min: 1300, max: 1399.99, fee: 250 },
  { min: 1400, max: 1499.99, fee: 260 },
  { min: 1500, max: 1599.99, fee: 275 },
  { min: 1600, max: 1699.99, fee: 285 },
  { min: 1700, max: 1799.99, fee: 295 },
  { min: 1800, max: 1999.99, fee: 305 },
  { min: 2000, max: 2399.99, fee: 325 },
  { min: 2400, max: 2999.99, fee: 350 },
  { min: 3000, max: 3499.99, fee: 400 },
  { min: 3500, max: 3999.99, fee: 425 },
  { min: 4000, max: 4999.99, fee: 450 },
  { min: 5000, max: 5999.99, fee: 475 },
  { min: 6000, max: 7999.99, fee: 500 },
  { min: 8000, max: 9999.99, fee: 525 },
  { min: 10000, max: 14999.99, fee: 550 },
  { min: 15000, max: 19999.99, fee: 575 },
  { min: 20000, max: Infinity, fee: 600 },
];

const IAAI_TIERS = [
  { min: 0, max: 99.99, fee: 25 },
  { min: 100, max: 199.99, fee: 50 },
  { min: 200, max: 299.99, fee: 75 },
  { min: 300, max: 349.99, fee: 110 },
  { min: 350, max: 399.99, fee: 130 },
  { min: 400, max: 499.99, fee: 140 },
  { min: 500, max: 599.99, fee: 150 },
  { min: 600, max: 699.99, fee: 160 },
  { min: 700, max: 799.99, fee: 170 },
  { min: 800, max: 899.99, fee: 180 },
  { min: 900, max: 999.99, fee: 190 },
  { min: 1000, max: 1199.99, fee: 210 },
  { min: 1200, max: 1299.99, fee: 225 },
  { min: 1300, max: 1399.99, fee: 240 },
  { min: 1400, max: 1499.99, fee: 250 },
  { min: 1500, max: 1599.99, fee: 265 },
  { min: 1600, max: 1699.99, fee: 280 },
  { min: 1700, max: 1799.99, fee: 295 },
  { min: 1800, max: 1999.99, fee: 305 },
  { min: 2000, max: 2399.99, fee: 330 },
  { min: 2400, max: 2999.99, fee: 355 },
  { min: 3000, max: 3499.99, fee: 385 },
  { min: 3500, max: 3999.99, fee: 410 },
  { min: 4000, max: 4999.99, fee: 440 },
  { min: 5000, max: 5999.99, fee: 475 },
  { min: 6000, max: 7999.99, fee: 500 },
  { min: 8000, max: 9999.99, fee: 525 },
  { min: 10000, max: 14999.99, fee: 550 },
  { min: 15000, max: Infinity, fee: 575 },
];

export default function AuctionFeeCalculator() {
  const [auctionType, setAuctionType] = useState("Copart");
  const [lotPrice, setLotPrice] = useState(0);
  const { language } = mainStore();

  const handleChange = (e) => {
    let val = e.target.value;

    // Remove leading zero unless it's just "0"
    if (val.length > 1 && val.startsWith("0")) {
      val = val.replace(/^0+/, "");
    }

    setLotPrice(val);
  };
  const [fees, setFees] = useState({
    internetBid: 0,
    feeA: 0,
    broker: 0,
    gate: 95,
    environmental: 15,
    report: 15,
    titlePickup: 20,
  });

  function computeFeeA(price, auction) {
    const tiers = auction === "Copart" ? COPART_TIERS : IAAI_TIERS;
    const tier = tiers.find((t) => price >= t.min && price <= t.max);
    return tier ? tier.fee : 0;
  }

  function computeInternetFee(price) {
    if (price < 100) return 0;
    else if (price < 500) return 39;
    else if (price < 1000) return 49;
    else if (price < 1500) return 59;
    else if (price < 2000) return 69;
    else if (price < 4000) return 79;
    else return 89;
  }

  useEffect(() => {
    const feeA = computeFeeA(lotPrice, auctionType);
    const internetBid = computeInternetFee(lotPrice);
    const broker = auctionType === "IAAI" ? 35 : 0;

    setFees((prev) => ({
      ...prev,
      feeA,
      internetBid,
      broker,
    }));
  }, [lotPrice, auctionType]);

  function calculateTotal() {
    const feeSum = Object.values(fees).reduce((sum, f) => sum + f, 0);
    return { auctionFee: feeSum, totalPrice: parseFloat(lotPrice) + feeSum };
  }

  const { auctionFee, totalPrice } = calculateTotal();

  const [open, setOpen] = useState(false);

  const handleSelect = (option) => {
    setAuctionType(option);

    setOpen(false);
  };

  return (
    <MainBox>
      <Container>
        <Title>
          {language === "ge"
            ? "აუქციონის საფასურის გამომთვლელი"
            : language === "en"
            ? "Auction Fee Calculator"
            : "Калькулятор сборов аукциона"}
        </Title>
        <SelectGroup>
          <Label>
            {language === "ge"
              ? "აუქციონის ტიპი"
              : language === "en"
              ? "Auction Type"
              : "Тип аукциона"}
          </Label>
          <SelectWrapper>
            <Selected onClick={() => setOpen(!open)}>
              {"Copart"}
              <span>{open ? <ArrowUpSvg /> : <ArrowDownSvg />}</span>
            </Selected>
            {open && (
              <Dropdown>
                <Option onClick={() => handleSelect("Copart")}>
                  {"Copart"}
                </Option>
                <Option onClick={() => handleSelect("IAAI")}>{"IAAI"}</Option>
              </Dropdown>
            )}
          </SelectWrapper>
        </SelectGroup>

        <InputGroup>
          <Label>
            {language === "ge"
              ? "ლოტის ფასი "
              : language === "en"
              ? "Lot Price "
              : "Цена лота "}
            ($)
          </Label>
          <Input
            type="number"
            value={lotPrice}
            onChange={handleChange}
            onFocus={() => lotPrice === "0" && setLotPrice("")}
          />
        </InputGroup>

        <Divider />

        <FeeList>
          <FeeItem>
            <span>
              {language === "ge"
                ? "ყიდვის საფასური A:"
                : language === "en"
                ? "Buyer Fee A:"
                : "Комиссия покупателя A:"}
            </span>{" "}
            <strong>${fees.feeA}</strong>
          </FeeItem>
          <FeeItem>
            <span>
              {language === "ge"
                ? "ინტერნეტ ფსონის საფასური:"
                : language === "en"
                ? "Internet Bid Fee:"
                : "Комиссия за интернет-ставку:"}
            </span>{" "}
            <strong>${fees.internetBid}</strong>
          </FeeItem>
          {auctionType === "IAAI" && (
            <FeeItem>
              <span>
                {language === "ge"
                  ? "ბროკერის საფასური:"
                  : language === "en"
                  ? "Broker Fee:"
                  : "Комиссия брокера:"}
              </span>{" "}
              <strong>${fees.broker}</strong>
            </FeeItem>
          )}
          <FeeItem>
            <span>
              {language === "ge"
                ? "შესასვლელის საფასური:"
                : language === "en"
                ? "Gate Fee:"
                : "Въездная плата:"}
            </span>{" "}
            <strong>${fees.gate}</strong>
          </FeeItem>
          <FeeItem>
            <span>
              {language === "ge"
                ? "გარემოს დაცვის საფასური:"
                : language === "en"
                ? "Environmental Fee:"
                : "Экологический сбор:"}
            </span>{" "}
            <strong>${fees.environmental}</strong>
          </FeeItem>
          <FeeItem>
            <span>
              {language === "ge"
                ? "ანგარიშის საფასური:"
                : language === "en"
                ? "Report Fee:"
                : "Плата за отчет:"}
            </span>{" "}
            <strong>${fees.report}</strong>
          </FeeItem>
          <FeeItem>
            <span>
              {language === "ge"
                ? "წარწერის აღების საფასური:"
                : language === "en"
                ? "Title Pickup Fee:"
                : "Плата за получение титула:"}
            </span>{" "}
            <strong>${fees.titlePickup}</strong>
          </FeeItem>
        </FeeList>

        <Divider />

        <TotalSection>
          <h4>
            {language === "ge"
              ? "აუქციონის საერთო საფასური:"
              : language === "en"
              ? "Total Auction Fee:"
              : "Общая комиссия аукциона:"}
            <span>${auctionFee}</span>
          </h4>
          <h3>
            {language === "ge"
              ? "საერთო ფასი:"
              : language === "en"
              ? "Total Price:"
              : "Общая цена:"}
            <span>${totalPrice}</span>
          </h3>
          <CalculateButton>
            {language === "ge"
              ? "გამოთვლა"
              : language === "en"
              ? "Calculate"
              : "Рассчитать"}
          </CalculateButton>
        </TotalSection>
      </Container>
      <Footer />
    </MainBox>
  );
}
const MainBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  padding-top: 98px;
  background-color: #f2f4f9;
`;
const Container = styled.div`
  width: 450px;
  margin: 64px auto 64px auto;
  padding: 36px;
  background: #fff;
  border-radius: 20px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
  color: #0b1b35;
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

const Title = styled.h2`
  font-size: 26px;
  font-weight: 800;
  color: #0b1b35;
  text-align: center;
  margin-bottom: 10px;
`;

const Label = styled.label`
  font-weight: 600;
  font-size: 15px;
  color: #0b1b35;
`;

const Input = styled.input`
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  width: 100%;
  padding: 10px 12px;
  font-size: 15px;
  margin-top: 5px;
  outline: none;
  &:focus {
    border-color: #0b1b35;
  }
  border: 2px solid #ccc;
  border-radius: 10px;
  transition: all 0.2s ease;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:hover {
    border-color: #333;
    background: #fafafa;
  }
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const SelectGroup = styled(InputGroup)``;

const FeeList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const FeeItem = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 6px 0;
  font-size: 15px;
  color: #0b1b35;
`;

const Divider = styled.div`
  height: 1px;
  background: #e6e6e6;
  margin: 10px 0;
`;

const TotalSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  h4,
  h3 {
    margin: 5px 0;
    color: #0b1b35;
  }

  span {
    color: #162a52;
    font-weight: 700;
  }
`;

const CalculateButton = styled.button`
  width: 243px;
  height: 47px;
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
const SelectWrapper = styled.div`
  position: relative;

  font-family: "Poppins", sans-serif;
`;

const Selected = styled.div`
  background: #f5f5f5;
  border: 2px solid #ccc;
  border-radius: 10px;
  padding: 10px 14px;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:hover {
    border-color: #333;
    background: #fafafa;
  }
`;

const Dropdown = styled.ul`
  list-style: none;
  margin: 5px 0 0;
  padding: 0;
  background: white;
  border-radius: 10px;
  border: 1px solid #ddd;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  position: absolute;
  width: 100%;
  z-index: 999;
  max-height: 180px;
  overflow-y: auto;
  transition: all 0.2s ease;
`;

const Option = styled.li`
  padding: 10px 14px;
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background: #0b1b35;
    color: white;
  }
`;
