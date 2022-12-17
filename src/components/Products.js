import React from "react";
import styled from "styled-components";
import Product from "./Product.js";
import useFetch from "../hooks/useFetch";
import { ThreeDots } from "react-loader-spinner";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

// displayes each products according to the category (if it's available)
//else just shows all the products

const Products = ({ category }) => {
  const { data, error, isLoading } = useFetch(
    category
      ? `https://fakestoreapi.com/products/category/${category}`
      : "https://fakestoreapi.com/products",
    [category]
  );

  return (
    <Container>
      {!!error ? (
        <p>An error occured. Please try again.</p>
      ) : isLoading ? (
        <div style={{ margin: "0 auto" }}>
          <p>loading..</p>
          <ThreeDots stroke="#FF0000" />
        </div>
      ) : (
        <>{data && data.map((item) => <Product item={item} key={item.id} />)}</>
      )}
    </Container>
  );
};

export default Products;
