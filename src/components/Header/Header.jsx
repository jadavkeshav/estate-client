import React, { useEffect, useState } from "react";
import "./Header.css";
import { SignedIn, SignedOut, UserButton } from '@clerk/clerk-react'
import { BiMenuAltRight } from "react-icons/bi";
import { getMenuStyles } from "../../utils/common";
import useHeaderColor from "../../hooks/useHeaderColor";
import OutsideClickHandler from "react-outside-click-handler";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuth, useUser } from '@clerk/clerk-react';
import useAuthCheck from "../../hooks/useAuthCheck";
import Logo from "../../../public/mylogo.png"
const Header = ({ dbUser }) => {
  const [menuOpened, setMenuOpened] = useState(false);
  const headerColor = useHeaderColor();
  const [modalOpened, setModalOpened] = useState(false)
  const navigate = useNavigate()
  const { user } = useUser();
  const isAdmin = dbUser && dbUser.user.role === "admin";
  console.log("hello : ",isAdmin)
  const { signOut, isSignedIn, userId } = useAuth();
  const { validateLogin } = useAuthCheck()

  const handleAddPropertyClick = () => {
    if (validateLogin()) {
      setModalOpened(true)
    }
  }

  return (
    <section className="h-wrapper" style={{ background: headerColor }}>
      <div className="flexCenter innerWidth paddings h-container">
        <Link to="/">
          <img src={Logo} alt="logo" width={100} />
        </Link>

        <OutsideClickHandler
          onOutsideClick={() => {
            setMenuOpened(false);
          }}
        >
          <div
            className="flexCenter h-menu"
            style={getMenuStyles(menuOpened)}
          >
            <NavLink to="/properties">Properties</NavLink>
            <a href="mailto:shankarhomespropertiesvlogs@gmail.com">Contact</a>
            {isSignedIn && (
              <NavLink to="/bookings">Bookings</NavLink>
            )}
            <SignedIn>
              <UserButton afterSignOutUrl='/sign-in' />
            </SignedIn>
            <SignedOut>
              <button className="button"><Link to="/sign-in">Sign In</Link></button>
            </SignedOut>
          </div>
        </OutsideClickHandler>

        <div
          className="menu-icon"
          onClick={() => setMenuOpened((prev) => !prev)}
        >
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </section>
  );
};

export default Header;
