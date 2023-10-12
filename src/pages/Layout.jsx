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
  main_logo

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
  Button,
} from "@nextui-org/react";
import { auth, logout } from "../auth/fireBase";
import { useAuthState } from "react-firebase-hooks/auth";

const Layout = () => {
  const [user] = useAuthState(auth)
  const [toggle, setToggle] = useState(false);
  return (
    <Fragment>
      <>
        <Navbar className="flex w-full justify-between items-center sm:py-6 sm:px-6">
          <NavbarBrand>
            <Image src={main_logo} alt="logo" width={300} />
          </NavbarBrand>
          <NavbarContent className="sm:flex hidden flex-1 self-start mr-20" justify="center">
            <NavbarItem>
              <Link href="/">Home</Link>
            </NavbarItem>
            <NavbarItem>
              <Link href="/countries">Countries</Link>
            </NavbarItem>
            <NavbarItem>
              <Link href="/favourites">Favourites</Link>
            </NavbarItem>
            <NavbarItem>
              <Link href="/login">Login</Link>
            </NavbarItem>
            <NavbarItem>
              <Link href="/register">Register</Link>
            </NavbarItem>
          </NavbarContent>
          <NavbarContent className="sm:hidden flex items-center self-start" justify="end">
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
          {user ? (<Button variant="primary" onClick={logout}>Logout</Button>) : (<Link href="/login"><Button>Login</Button></Link>)}
        </Navbar>
      </>
      <>
        <Outlet />
      </>
    </Fragment>
  );
};

export default Layout;
