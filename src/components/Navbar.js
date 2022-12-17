import React from "react";
import styled from "styled-components";
import Badge from "@mui/material/Badge";
import { Search, ShoppingCartOutlined } from "@mui/icons-material";
import { mobile } from "../responsive";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navigationbar = styled.nav`
  min-height: 60px;
`;

const NavWrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
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
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Language = styled.span`
  cursor: pointer;
  font-size: 14px;
  ${mobile({ display: "none" })}
`;

const Input = styled.input`
  border: none;
  outline: none;
  ${mobile({ width: "50px" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "24px" })}
`;

const Navbar = () => {
  // updates number of cart (from redux store) on the cart badge logo
  const cartQuantity = useSelector((state) => state.cart.quantity);

  return (
    <Navigationbar>
      <NavWrapper>
        <Left>
          <SearchContainer>
            <Language>EN</Language>
            <Input placeholder="search" />

            <Search />
          </SearchContainer>
        </Left>

        <Center>
          <Link to="/">
            <Logo> Hello </Logo>
          </Link>
        </Center>

        <Right>
          <Link to="/register">
            <MenuItem> Register </MenuItem>
          </Link>
          <Link to="/login">
            <MenuItem> Sign In </MenuItem>
          </Link>
          <Link to="/cart">
            <MenuItem>
              <Badge badgeContent={cartQuantity} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </MenuItem>
          </Link>
        </Right>
      </NavWrapper>
    </Navigationbar>
  );
};

export default Navbar;
