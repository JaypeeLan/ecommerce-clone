import React from "react";
import styled from "styled-components";
import Badge from "@mui/material/Badge";
import { Search, ShoppingCartOutlined } from "@mui/icons-material";
// import { RiSearch2Line } from "react-icons/ri";
// import { BsCart4 } from "react-icons/bs";

const Navigationbar = styled.nav`
  background-color: lightblue;
`;

const NavWrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-item: center;
  justify-content: center;
  margin-left: 25px;
  padding: 5px;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Language = styled.span`
  cursor: pointer;
  font-size: 14px;
`;

const Input = styled.input`
  border: none;
  outline: none;
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`;

const Logo = styled.h1`
  font-weight: bold;
`;

const Navbar = () => {
  return (
    <Navigationbar>
      <NavWrapper>
        <Left>
          <SearchContainer>
            <Language>EN</Language>
            <Input />

            <Search />
          </SearchContainer>
        </Left>

        <Center>
          <Logo> Hello </Logo>
        </Center>

        <Right>
          <MenuItem> Register </MenuItem>
          <MenuItem> Sign In </MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
        </Right>
      </NavWrapper>
    </Navigationbar>
  );
};

export default Navbar;
