/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components/macro";
import { DialogOverlay, DialogContent } from "@reach/dialog";
import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <Wrapper isOpen={isOpen} onDismiss={onDismiss}>
      <Content>
        <CloseWrapper>
          <UnstyledButton onClick={onDismiss}>
            <Icon id="close">
              <VisuallyHidden>Close menu</VisuallyHidden>
            </Icon>
          </UnstyledButton>
        </CloseWrapper>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <Footer>
          <FooterLink href="/terms">Terms and Conditions</FooterLink>
          <FooterLink href="/privacy">Privacy Policy</FooterLink>
          <FooterLink href="/contact">Contact Us</FooterLink>
        </Footer>
      </Content>
    </Wrapper>
  );
};

export default MobileMenu;

const Wrapper = styled(DialogOverlay)`
  display: flex;
  justify-content: flex-end;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--color-backdrop);
`;

const CloseWrapper = styled.div`
  /* large tap target */
  padding: 1rem;
  margin: -1rem -1rem -1rem auto;
`;

const Content = styled(DialogContent)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  width: 300px;
  background: var(--color-white);
  padding: 2rem;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 22px;
`;

const NavLink = styled.a`
  font-size: ${18 / 16}rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: var(--weight-medium);
  line-height: ${21 / 16}rem;

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  gap: ${14 / 16}rem;
`;

const FooterLink = styled.a`
  font-size: ${14 / 16}rem;
  text-decoration: none;
  color: var(--color-gray-700);
  font-weight: var(--weight-normal);
  line-height: 1rem;
`;
