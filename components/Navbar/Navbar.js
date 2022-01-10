import {
  Nav,
  NavContainer,
  NavLogo,
  NavMenu,
  NavItem,
  NavLinks,
  MobileIcon,
} from "./Styles";
import { Burger } from "@mantine/core";
import { useState, useEffect } from "react";
import Link from "next/link";

export function Navbar() {
  const [click, setClick] = useState(false);
  const [scrollNav, setScrollNav] = useState(false);
  const title = click ? "Close navigation" : "Open navigation";

  const checkNav = () => {
    if (click || scrollNav) {
      return true;
    }
  };

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  const handler = () => {
    setClick(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
    window.matchMedia("(max-width: 961px)").addEventListener("change", handler);
  });

  return (
    <Nav scrollNav={checkNav()}>
      <NavContainer>
        <Link href="/">
          <NavLogo>
            <img
              src="https://cdn.discordapp.com/attachments/905155453028302889/905895470730199100/--1.png"
              width="70"
              height="70"
            />
          </NavLogo>
        </Link>
        <MobileIcon>
          <Burger
            opened={click}
            onClick={() => setClick((o) => !o)}
            title={title}
            color="#fff"
          />
        </MobileIcon>
        <NavMenu click={click}>
          <NavItem>
            <NavLinks target="_blank" href="https://discord.gg/wa">الدعم الفني</NavLinks>
          </NavItem>
          <NavItem>
            <Link href="/store">
              <NavLinks>المتجر</NavLinks>
            </Link>
          </NavItem>
          <NavItem>
            <Link href="/branches">
              <NavLinks>الفروع</NavLinks>
            </Link>
          </NavItem>

          <NavItem>
            <Link href="/search">
              <NavLinks>البحث عن نصاب</NavLinks>
            </Link>
          </NavItem>
        </NavMenu>
      </NavContainer>
    </Nav>
  );
}
