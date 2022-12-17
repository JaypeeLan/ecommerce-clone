import React, { useState } from "react";
import { Add, Remove } from "@mui/icons-material";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import { mobile } from "../responsive";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { useDispatch } from "react-redux";
import { addProducts } from "../redux/cartRedux";
import { BallTriangle } from "react-loader-spinner";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: "10px", flexDirection: "column" })}
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  min-height: 90vh;
  object-fit: contain;
  ${mobile({ minHeight: "60vh" })}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 0.6rem;
  font: 12px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;

  &:hover {
    background-color: #f8f4f4;
  }
`;

const Product = () => {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  // ------------------------------------

  //  fetch each product by its id
  const { id } = useParams();
  // ----------------------------------
  const { data, error, isLoading } = useFetch(
    `https://fakestoreapi.com/products/${id}`
  );
  // --------------------------------------------

  const addToCart = () => {
    // update cart store
    dispatch(addProducts({ ...data, quantity }));
  };

  const updateQuantity = (type) => {
    if (type === "decrease") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };
  return (
    <>
      {isLoading && (
        <div
          style={{
            height: "100vh",
            width: "100%",
            display: "grid",
            placeItems: "center",
          }}
        >
          <BallTriangle
            height={100}
            width={100}
            radius={5}
            color="#4fa94d"
            ariaLabel="loading"
            visible={true}
          />
        </div>
      )}
      {error && (
        <div style={{ margin: "0 auto", fontSize: "40px" }}>
          <p> An error occured.. Please try again.</p>
        </div>
      )}

      {data && (
        <>
          <Container>
            <Navbar />
            <Announcement />
            <Wrapper>
              <ImgContainer>
                <Image src={data.image} />
              </ImgContainer>
              <InfoContainer>
                <Title>{data.title}</Title>
                <Desc>{data.description}</Desc>
                <Price>${data.price}</Price>
                <FilterContainer>
                  <Filter>
                    <FilterTitle>Color</FilterTitle>
                    <FilterColor color="black" />
                    <FilterColor color="darkblue" />
                    <FilterColor color="gray" />
                  </Filter>
                  <Filter>
                    <FilterTitle>Size</FilterTitle>
                    <FilterSize>
                      <FilterSizeOption>XS</FilterSizeOption>
                      <FilterSizeOption>S</FilterSizeOption>
                      <FilterSizeOption>M</FilterSizeOption>
                      <FilterSizeOption>L</FilterSizeOption>
                      <FilterSizeOption>XL</FilterSizeOption>
                    </FilterSize>
                  </Filter>
                </FilterContainer>
                <AddContainer>
                  <AmountContainer>
                    <Remove onClick={() => updateQuantity("decrease")} />
                    <Amount>{quantity}</Amount>
                    <Add onClick={() => updateQuantity("increase")} />
                  </AmountContainer>
                  <Button onClick={addToCart}>ADD TO CART</Button>
                </AddContainer>
              </InfoContainer>
            </Wrapper>
            <Newsletter />
            <Footer />
          </Container>
        </>
      )}
    </>
  );
};

export default Product;
