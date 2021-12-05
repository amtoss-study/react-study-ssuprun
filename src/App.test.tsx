import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders user list", () => {
    render(<App />);
    const linkElement = screen.getByText(/User list/i);
    expect(linkElement).toBeInTheDocument();
});
