import React, { useState } from "react";
import "./Header.css";
import { SignedIn, SignedOut, UserButton } from '@clerk/clerk-react'
import { BiMenuAltRight } from "react-icons/bi";
import { getMenuStyles } from "../../utils/common";
import useHeaderColor from "../../hooks/useHeaderColor";
import OutsideClickHandler from "react-outside-click-handler";
import { Link, NavLink } from "react-router-dom";
import { useAuth, useUser } from '@clerk/clerk-react';

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const headerColor = useHeaderColor();

  const { user } = useUser();
  const { signOut, isSignedIn, userId } = useAuth();
  // console.log(user.primaryPhoneNumber.phoneNumber)
  // console.log(isSignedIn);
  return (
    <section className="h-wrapper" style={{ background: headerColor }}>
      <div className="flexCenter innerWidth paddings h-container">
        {/* logo */}
        <Link to="/">
          <img src="./logo.png" alt="logo" width={100} />
        </Link>

        {/* menu */}
        <OutsideClickHandler
          onOutsideClick={() => {
            setMenuOpened(false);
          }}
        >
          <div
            // ref={menuRef}
            className="flexCenter h-menu"
            style={getMenuStyles(menuOpened)}
          >
            <NavLink to="/properties">Properties</NavLink>
            <a href="mailto:jadavkeshav2005@gmail.com">Contact</a>
            {
              isSignedIn ? (<><NavLink to="/favourites">Favourites</NavLink>
                <NavLink to="/bookings">Bookings</NavLink></>) : (<></>)
            }

            {/* login button */}
            <SignedIn>
              <UserButton afterSignOutUrl='/sign-in' />
            </SignedIn>
            <SignedOut>
              <Link to="/sign-in">Sign In</Link>
            </SignedOut>
          </div>
        </OutsideClickHandler>

        {/* for medium and small screens */}
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
