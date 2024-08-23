import { describe, it, expect } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import routes from "../../../routes";

const router = createBrowserRouter(routes);

describe("Shopping Cart", () => {
  it("Product added on  homescreen is displayed on cart page", async () => {
    // starts on homepage
    render(<RouterProvider router={router} />);
    const user = userEvent.setup();
    // wait for homepage to display after grabbing product data from API
    await waitFor(() =>
      expect(screen.getByText("Stay Unique")).toBeInTheDocument()
    );
    // grab all add to cart buttons
    const addToCartBtns = screen.getAllByRole("button", {
      name: "Add to cart",
    });

    // add first product 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops' to basket
    user.click(addToCartBtns[0]);

    // navigate to basket page
    const cartButton = screen.getByRole("link", { name: "cart" });
    user.click(cartButton);

    // make sure the user is on the cart page
    await waitFor(() => expect(screen.getByText("Basket")).toBeInTheDocument());

    // check for added listing
    expect(
      screen.getByText("Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops")
    ).toBeInTheDocument();
  });
});
