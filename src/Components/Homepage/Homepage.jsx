import { useEffect, useState } from "react";
import NavBar from "../NavBar/NavBar";
import Product from "../Product/Product";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

const HomepageMainWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  padding-top: 5rem;
  padding-bottom: 5rem;
`;

const ProductListings = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 100rem;
  gap: 1rem;
`;

function calculateQuantityOfItems(productObjArr) {
  let numOfItems = 0;
  productObjArr.forEach((product) => {
    numOfItems += product.quantity;
  });

  return numOfItems;
}

function Homepage() {
  const location = useLocation();
  console.log(location);

  const [productsData, setProductsData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [productsInBasket, setProductsInBasket] = useState([]);
  let totalQuantity = calculateQuantityOfItems(productsInBasket);

  useEffect(() => {
    // this will only change after coming back from cart route to homepage route, initially should be null. its not used on first load.
    if (location.state !== null) {
      setProductsInBasket(location.state.itemsInCart);
    }
  }, [location.state]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products", { mode: "cors" })
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("server error");
        }
        return response.json();
      })
      .then((response) => {
        for (let x = 0; x < 6; x++) {
          response[x].quantity = 0;
        }
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
      <NavBar numItemsInCart={totalQuantity} itemsInCart={productsInBasket} />
      <HomepageMainWrapper>
        <ProductListings>
          <Product
            productImg={productsData[0].image}
            productName={productsData[0].title}
            productPrice={productsData[0].price}
            productsInBasket={productsInBasket}
            setProductsInBasket={setProductsInBasket}
            productObject={productsData[0]}
          />
          <Product
            productImg={productsData[1].image}
            productName={productsData[1].title}
            productPrice={productsData[1].price}
            productsInBasket={productsInBasket}
            setProductsInBasket={setProductsInBasket}
            productObject={productsData[1]}
          />
          <Product
            productImg={productsData[2].image}
            productName={productsData[2].title}
            productPrice={productsData[2].price}
            productsInBasket={productsInBasket}
            setProductsInBasket={setProductsInBasket}
            productObject={productsData[2]}
          />
          <Product
            productImg={productsData[3].image}
            productName={productsData[3].title}
            productPrice={productsData[3].price}
            productsInBasket={productsInBasket}
            setProductsInBasket={setProductsInBasket}
            productObject={productsData[3]}
          />
          <Product
            productImg={productsData[4].image}
            productName={productsData[4].title}
            productPrice={productsData[4].price}
            productsInBasket={productsInBasket}
            setProductsInBasket={setProductsInBasket}
            productObject={productsData[4]}
          />
          <Product
            productImg={productsData[5].image}
            productName={productsData[5].title}
            productPrice={productsData[5].price}
            productsInBasket={productsInBasket}
            setProductsInBasket={setProductsInBasket}
            productObject={productsData[5]}
          />
        </ProductListings>
      </HomepageMainWrapper>
    </div>
  );
}

export default Homepage;
