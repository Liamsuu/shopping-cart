import { describe, it, expect } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Homepage from "./Homepage";
import ErrorPage from "../ErrorPage/ErrorPage";
import ShoppingCart from "../ShoppingCart/ShoppingCart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "cart",
    element: <ShoppingCart />,
  },
]);

describe("Homepage component", () => {
  it("Renders homepage", () => {
    const { container } = render(<RouterProvider router={router} />);
    expect(container).toMatchSnapshot();
  });

  it("Increments basket quantity by one on click", async () => {
    render(<RouterProvider router={router} />);
    const user = userEvent.setup();
    await waitFor(() =>
      expect(screen.getByText("Stay Unique")).toBeInTheDocument()
    );
    const addToCartBtn = screen.getAllByRole("button", { name: "Add to cart" });
    await user.click(addToCartBtn[0]);
    expect(screen.getByText("1")).toBeInTheDocument();
  });
  it("Increments basket quantity when same product is clicked multiple times", async () => {
    render(<RouterProvider router={router} />);
    const user = userEvent.setup();
    await waitFor(() =>
      expect(screen.getByText("Stay Unique")).toBeInTheDocument()
    );
    const addToCartBtn = screen.getAllByRole("button", { name: "Add to cart" });
    await user.click(addToCartBtn[0]);
    await user.click(addToCartBtn[0]);
    expect(screen.getByText("2")).toBeInTheDocument();
  });
  it("Increments basket quantity when different product are added to basket", async () => {
    render(<RouterProvider router={router} />);
    const user = userEvent.setup();
    await waitFor(() =>
      expect(screen.getByText("Stay Unique")).toBeInTheDocument()
    );
    const addToCartBtn = screen.getAllByRole("button", { name: "Add to cart" });
    await user.click(addToCartBtn[0]);
    await user.click(addToCartBtn[1]);
    await user.click(addToCartBtn[2]);
    await user.click(addToCartBtn[3]);
    await user.click(addToCartBtn[4]);
    await user.click(addToCartBtn[5]);
    expect(screen.getByText("6")).toBeInTheDocument();
  });
  it("Redirects to new page when basket is clicked", async () => {
    render(<RouterProvider router={router} />);
    const user = userEvent.setup();
    await waitFor(() =>
      expect(screen.getByText("Stay Unique")).toBeInTheDocument()
    );
    const basketButton = screen.getByRole("link", { name: "cart" });
    user.click(basketButton);
    await waitFor(() => expect(screen.getByText("Basket")).toBeInTheDocument());
  });
});
