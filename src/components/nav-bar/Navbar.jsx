"use client";
import { useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import BurgerMenuWhite from "../svg/BurgerMenuWhite";
import NavbarCloseIcon from "../svg/NavbarColseIcon";
import { usePathname } from "next/navigation";
import Languages from "./languages/Languages";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <MainDiv>
      <NavBar>
        <NavBarLeftSide>
          <LogoImage src="/images/logo.png" alt="logo"></LogoImage>
          <IconBox onClick={toggleMenu}>
            <BurgerMenuWhite />
          </IconBox>
        </NavBarLeftSide>
        <NavBarRightSide>
          <MenuList>
            <MenuItem
              style={{
                color: isHomePage ? "var(--yellow)" : "  #bdbdbd",
              }}
            >
              <Link href="/">მთავარი</Link>
              {isHomePage ? <SmallLine></SmallLine> : null}
            </MenuItem>
            <MenuItem>
              <Link href="/about">ჩვენს შესახებ</Link>
            </MenuItem>
            <MenuItem
              style={{
                color:
                  pathname === "/calculator" ? "var(--yellow)" : "  #bdbdbd",
              }}
            >
              <Link href="/calculator">კალკულატორი</Link>
            </MenuItem>

            <MenuItem>
              <Link href="/contact">კონტაქტი</Link>
            </MenuItem>
            <Languages />
          </MenuList>
        </NavBarRightSide>

        <SideMenu style={{ display: isOpen ? "flex" : "none" }}>
          <Menu>
            <IconBox onClick={toggleMenu}>
              <NavbarCloseIcon />
            </IconBox>
            <MenuList>
              <MenuItem
                style={{
                  backgroundColor:
                    pathname === "/" ? "rgba(31, 31, 31, 1" : "transparent",
                  color: pathname === "/" ? "white" : "inherit",
                }}
              >
                <Link href="/">მთავარი</Link>
              </MenuItem>
              <MenuItem
                style={{
                  backgroundColor:
                    pathname === "/about"
                      ? "rgba(31, 31, 31, 1"
                      : "transparent",
                  color: pathname === "/about" ? "white" : "inherit",
                }}
              >
                <Link href="/about">ჩვენს შესახებ</Link>
              </MenuItem>
              <MenuItem
                style={{
                  backgroundColor:
                    pathname === "/calculator"
                      ? "rgba(31, 31, 31, 1"
                      : "transparent",
                  color: pathname === "/calculator" ? "white" : "inherit",
                }}
              >
                <Link href="/calculator">კალკულატორი</Link>
              </MenuItem>
              {/* <MenuItem
                style={{
                  backgroundColor:
                    pathname === "/landing/gallery"
                      ? "rgba(31, 31, 31, 1"
                      : "transparent",
                  color: pathname === "/landing/gallery" ? "white" : "inherit",
                }}
              >
                <Link href="/landing/gallery">Gallery</Link>
              </MenuItem> */}
              <MenuItem
                style={{
                  backgroundColor:
                    pathname === "/contact"
                      ? "rgba(31, 31, 31, 1"
                      : "transparent",
                  color: pathname === "/contact" ? "white" : "inherit",
                }}
              >
                <Link href="/contact">კონტაქტი</Link>
              </MenuItem>
            </MenuList>
          </Menu>
        </SideMenu>
      </NavBar>
    </MainDiv>
  );
}

const MainDiv = styled.div`
  width: 100vw;
  position: fixed;
  background-color: #f2f4f9;
  z-index: 1;
`;
const LogoImage = styled.img`
  cursor: pointer;
  width: 140px;
  max-height: 60px;
  object-fit: cover;
`;
const NavBar = styled.div`
  position: relative;
  padding: 26px 46px;
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
`;

const NavBarLeftSide = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
`;
const NavbarText = styled.h3`
  font-family: "Oswald";
  font-weight: 400;
  font-size: 25px;
  color: white;
  text-transform: uppercase;
  @media screen and (min-width: 1280px) {
    font-size: 30px;
  }
  @media screen and (min-width: 1920px) {
    font-size: 40px;
  }
`;
const NavBarRightSide = styled.div`
  display: flex;
  gap: 15px;
  @media screen and (max-width: 767px) {
    display: none;
  }
`;
const SideMenu = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background-color: white;
  transition: left 0.3s ease-in-out;
  height: 100vh;
  position: fixed;
`;
const MenuList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-left: 20px;
  margin-top: 30px;
  list-style: none;
  padding: 0;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    margin-top: 0;
    align-items: center;
    gap: 20px;
  }
`;
const Menu = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  width: 60%;
`;

const MenuItem = styled.li`
  font-family: "Open Sans";
  font-size: 16px;
  font-style: semi-bold;
  font-weight: 600;
  width: fit-content;
  padding: 10px 8px;
  border-radius: 6px;
  color: #bdbdbd;
  @media screen and (min-width: 1024px) {
    &:hover {
      opacity: 0.7;
    }
  }
`;

const IconBox = styled.div`
  cursor: pointer;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;
const SmallLine = styled.div`
  width: 50%;
  height: 2px;
  margin-top: 6px;
  background-color: var(--yellow);
`;
