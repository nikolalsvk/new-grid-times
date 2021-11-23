import React from "react";
import styled from "styled-components/macro";
import { Menu, Search, User } from "react-feather";

import { QUERIES } from "../../constants";

import MaxWidthWrapper from "../MaxWidthWrapper";
import Logo from "../Logo";
import Button from "../Button";

const Header = () => {
  return (
    <header>
      <SuperHeader>
        <Row>
          <ActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroup>
          <ActionGroup>
            <button>
              <User size={24} />
            </button>
          </ActionGroup>
        </Row>
      </SuperHeader>
      <MainHeader>
        <DesktopIcons>
          <ActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroup>
        </DesktopIcons>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <ButtonWrapper>
          <Button>Subscribe</Button>
          <AlreadySubscribed href="/">Already a subscriber?</AlreadySubscribed>
        </ButtonWrapper>
      </MainHeader>
    </header>
  );
};

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;

  @media ${QUERIES.laptopAndUp} {
    display: none;
  }
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }
`;

const MainHeader = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 48px;

  @media ${QUERIES.tabletAndUp} {
    margin-top: 48px;
    margin-bottom: 72px;
  }

  @media ${QUERIES.laptopAndUp} {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    align-items: center;
    justify-content: revert;
    margin-top: 16px;
    margin-bottom: 72px;
  }
`;

const DesktopIcons = styled.div`
  display: none;

  @media ${QUERIES.laptopAndUp} {
    display: flex;
  }
`;

const ButtonWrapper = styled.div`
  display: none;

  @media ${QUERIES.laptopAndUp} {
    display: revert;
    justify-self: end;
    position: relative;
  }
`;

const LogoWrapper = styled.div``;

const AlreadySubscribed = styled.a`
  position: absolute;
  font-size: 0.875rem;
  color: var(--color-gray-900);
  font-style: italic;
  text-decoration: underline;
  width: 100%;
  text-align: center;
  margin-top: 8px;
`;

export default Header;
