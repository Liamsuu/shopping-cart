import { useEffect, useState } from "react";
import NavBar from "../NavBar/NavBar";
import Product from "../Product/Product";
import styled from "styled-components";

const HomepageMainWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  padding-top: 5rem;
  padding-bottom: 5rem;
`;

const ProductListings = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  /* remove background colour after, just for development */
  /* background-color: green; */
  width: 70rem;
  gap: 1rem;
`;
// the grid boxes are much larger than container figure out how to make them size based on container size later FIX IT

function Homepage() {
  const [productsData, setProductsData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products", { mode: "cors" })
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("server error");
        }
        return response.json();
      })
      .then((response) => {
        setProductsData([
          response[0],
          response[1],
          response[2],
          response[3],
          response[4],
          response[5],
        ]);
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>A network error was encountered</p>;

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <NavBar />
      <HomepageMainWrapper>
        <ProductListings>
          <Product
            productImg={productsData[0].image}
            productName={productsData[0].title}
            productPrice={productsData[0].price}
          />
          <Product
            productImg={productsData[1].image}
            productName={productsData[1].title}
            productPrice={productsData[1].price}
          />
          <Product
            productImg={productsData[2].image}
            productName={productsData[2].title}
            productPrice={productsData[2].price}
          />
          <Product
            productImg={productsData[3].image}
            productName={productsData[3].title}
            productPrice={productsData[3].price}
          />
          <Product
            productImg={productsData[4].image}
            productName={productsData[4].title}
            productPrice={productsData[4].price}
          />
          <Product
            productImg={productsData[5].image}
            productName={productsData[5].title}
            productPrice={productsData[5].price}
          />
        </ProductListings>
      </HomepageMainWrapper>
    </div>
  );
}

export default Homepage;
