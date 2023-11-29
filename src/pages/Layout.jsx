import React, { Fragment } from "react";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import {main_logo} from "../assets";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Image,
  Link
} from "@nextui-org/react";
import { auth, logout } from "../auth/fireBase";
import { useAuthState } from "react-firebase-hooks/auth";


const Layout = () => {
  const [user] = useAuthState(auth)
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <Fragment>
      <>
        <Navbar className="flex w-full justify-between items-center sm:py-6 sm:px-6 data-[active=true]:after:bg-blue-400" isBordered isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
          <NavbarBrand>
            <Image src={main_logo} alt="logo" width={300} />
          </NavbarBrand>
          <NavbarContent className="sm:flex hidden flex-1 self-start justify-center" justify="end">
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
              {user ? (<Link onClick={logout} href="">Logout</Link>) : (<Link href="/login">Login</Link>)}
            </NavbarItem>
            <NavbarItem>
              <Link href="/register">Register</Link>
            </NavbarItem>
          </NavbarContent>

          <NavbarMenu className="flex items-center">
            <NavbarMenuItem className="mb-5 mt-5">
              <Link href="/">Home</Link>
            </NavbarMenuItem>
            <NavbarMenuItem className="mb-5">
              <Link href="/countries">Countries</Link>
            </NavbarMenuItem>
            <NavbarMenuItem className="mb-5">
              <Link href="/favourites">Favourites</Link>
            </NavbarMenuItem>
            <NavbarMenuItem className="mb-5">
              <Link href="/register">Register</Link>
            </NavbarMenuItem>
            <NavbarMenuItem>
              {user ? (<Link onClick={logout} href="">Logout</Link>) : (<Link href="/login">Login</Link>)}
            </NavbarMenuItem>
          </NavbarMenu>

          <NavbarContent className="sm:hidden flex items-center self-start justify-center" justify="end">
            <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
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
