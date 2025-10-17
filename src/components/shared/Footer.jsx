"use client";

import mainStore from "@/store/mainStore";
import styled from "styled-components";
import FaceBookSvg from "../svg/FaceBookSvg";
import InstagramSvg from "../svg/InstagramSvg";
import GmailSvg from "../svg/GmailSvg";
import SmallClockSvg from "../svg/SmallClockSvg";
import UserSvg from "../svg/UserSvg";

export default function Footer() {
  const { language } = mainStore();
  return (
    <MainDiv>
      <LeftSide>
        <TextAndLogo>
          <LogoImage src="/images/logo.png" alt="lgo"></LogoImage>
          <MainText>Incars.Ge</MainText>
        </TextAndLogo>
        <TextAndIcons>
          <SecondText>
            {language === "ge"
              ? "გვიპოვეთ სოციალურ ქსელებში!"
              : language === "en"
              ? "Find us on social media!"
              : "Найдите нас в социальных сетях!"}
          </SecondText>
          <Icons>
            <GmailSvg />
            <FaceBookSvg />
            <InstagramSvg />
          </Icons>
        </TextAndIcons>
      </LeftSide>
      <MiddleSide>
        <TextAndLogo>
          <SmallClockSvg />
          <HeadText>
            {language === "ge"
              ? "სამუშაო საათები"
              : language === "en"
              ? "Working Hours"
              : "Рабочие часы"}
          </HeadText>
        </TextAndLogo>
        <WorkingHoursDiv>
          <WorkingHoursText>
            {language === "ge"
              ? "ორშაბათი - პარასკევი : 09:00 - 21:00"
              : language === "en"
              ? "Mon - Fri : 09:00 AM - 09:00 PM"
              : "Пн - Пт : 09:00 - 21:00"}
          </WorkingHoursText>
          <WorkingHoursText>
            {language === "ge"
              ? "შაბათი : 09:00 - 19:00"
              : language === "en"
              ? "Sat : 09:00 AM - 07:00 PM"
              : "Сб : 09:00 - 19:00"}
          </WorkingHoursText>
          <WorkingHoursText>
            {language === "ge"
              ? "კვირა : დახურული"
              : language === "en"
              ? "Sun : Closed"
              : "Вс : Закрыто"}
          </WorkingHoursText>
        </WorkingHoursDiv>
      </MiddleSide>
      <RightSide>
        <TextAndLogo>
          <UserSvg />
          <HeadText>
            {language === "ge"
              ? "კონტაქტი"
              : language === "en"
              ? "Contact"
              : "Контакт"}
          </HeadText>
        </TextAndLogo>
        <WorkingHoursDiv>
          <WorkingHoursText>
            {language === "ge"
              ? "ოფისი: ვარკეთილი მესამე მასივი"
              : language === "en"
              ? "Office: Varketili Third Array"
              : "Офис: Варкетили Третий массив"}
          </WorkingHoursText>
          <WorkingHoursText>
            {language === "ge"
              ? "მეილი: Shibo@Gmail.com"
              : language === "en"
              ? "Mail: Shibo@Gmail.com"
              : "Почта: Shibo@Gmail.com"}
          </WorkingHoursText>
          <WorkingHoursText>
            {language === "ge"
              ? "ტელეფონი: +995 599 99 99 99"
              : language === "en"
              ? "Phone: +995 599 99 99 99"
              : "Телефон: +995 599 99 99 99"}
          </WorkingHoursText>
        </WorkingHoursDiv>
      </RightSide>
    </MainDiv>
  );
}

const MainDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 296px;

  padding: 60px 90px;
  background-color: var(--darkBlue);
`;
const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
`;
const LogoImage = styled.img`
  width: 140px;
  max-height: 60px;
  object-fit: cover;
`;
const MainText = styled.h1`
  font-size: 32px;
  font-family: "atkinson-hyperlegible", sans-serif;
  font-weight: 400;
  color: white;
  text-transform: uppercase;
`;
const TextAndLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;
const SecondText = styled.h3`
  font-size: 32px;
  font-family: "atkinson-hyperlegible", sans-serif;
  font-size: 16px;
  color: white;
`;
const TextAndIcons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
`;
const Icons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
`;
const MiddleSide = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;
const HeadText = styled.h2`
  color: white;
  font-size: 18px;
  text-transform: uppercase;
`;
const WorkingHoursDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
const WorkingHoursText = styled.h4`
  color: white;
  font-size: 16px;
`;
const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;
