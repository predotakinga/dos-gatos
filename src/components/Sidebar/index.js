import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarLink,
  SidebarWrapper,
  SidebarMenu,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="home" onClick={toggle}>
            About
          </SidebarLink>
          <SidebarLink to="about" onClick={toggle}>
            O nas
          </SidebarLink>
          <SidebarLink to="menu" onClick={toggle}>
            Menu
          </SidebarLink>
          <SidebarLink to="hours" onClick={toggle}>
            Godziny otwarcia
          </SidebarLink>
          <SidebarLink to="contact" onClick={toggle}>
            Kontakt
          </SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
