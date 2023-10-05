import React, { Fragment } from "react";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import {
  close,
  menu,
  facebook,
  instagram,
  linkedin,
  github,
  logo,
} from "../assets";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Image,
  Link,
} from "@nextui-org/react";

const Layout = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <Fragment>
      <>
        <Navbar className="flex space w-full justify-between items-center sm:py-6 sm:px-6">
          <NavbarBrand>
            <Image src={logo} alt="logo" width={360} />
          </NavbarBrand>
          <NavbarContent className="sm:flex hidden justify-end flex-1 self-start mr-20">
            <NavbarItem>
              <Link href="/">Home</Link>
            </NavbarItem>
            <NavbarItem>
              <Link href="/countries">Countries</Link>
            </NavbarItem>
            <NavbarItem>
              <Link href="/favourites">Favourites</Link>
            </NavbarItem>
          </NavbarContent>
          <NavbarContent className="sm:hidden flex justify-end items-center self-start">
            <NavbarItem>
              <Link href="/">
                <Image
                  src={toggle ? close : menu}
                  alt="menu icon"
                  fill="red"
                  className="w-[120px] h-[30px] object-contain"
                  onClick={() => setToggle((prev) => !prev)}
                />
              </Link>
            </NavbarItem>
          </NavbarContent>
        </Navbar>
      </>
      <>
        <Outlet />
      </>
    </Fragment>
  );
};

export default Layout;
