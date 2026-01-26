import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  NavLogo,
  MobileMenuToggle,
  MobileMenu,
  NavbarShell,
  NavbarDesktop,
  useNavbarScroll,
  useBodyScrollLock,
} from '.';

const Navbar = () => {
  const navigate = useNavigate();

  const scrolled = useNavbarScroll(50);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useBodyScrollLock(mobileMenuOpen);

  const menuItems = ["Home", "Explore", "About", "Blog", "Contact"];

  const handleNavigation = (item) => {
    navigate(`/${item.toLowerCase()}`);
    setMobileMenuOpen(false);
  };

  const handleSignIn = () => {
    navigate("/login");
    setMobileMenuOpen(false);
  };

  return (
    <>
      <NavbarShell scrolled={scrolled} hidden={mobileMenuOpen}>
        <NavLogo />

        <NavbarDesktop
          items={menuItems}
          onItemClick={handleNavigation}
          onSignIn={handleSignIn}
        />

        <MobileMenuToggle
          isOpen={mobileMenuOpen}
          onToggle={() => setMobileMenuOpen((prev) => !prev)}
        />
      </NavbarShell>

      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        menuItems={menuItems}
        onItemClick={handleNavigation}
        onSignInClick={handleSignIn}
      />
    </>
  );
};

export default Navbar;
