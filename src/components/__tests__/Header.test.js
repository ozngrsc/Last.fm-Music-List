import { render, screen } from "@testing-library/react";
import Header from "../Header/Header";
import { BrowserRouter as Router } from "react-router-dom";

const MockLogoHeader = () => {
  return (
    <Router>
      <Header />
    </Router>
  );
};

test("Header Last.fm logo render correctly", () => {
  render(<MockLogoHeader />);

  const lastfmLogo = screen.getByTestId("headerLogo");
  expect(lastfmLogo).toBeInTheDocument();
});

test("Header have dark-ligth mode button", () => {
  render(<MockLogoHeader />);

  const darkModeBtn = screen.getByRole("button");
  expect(darkModeBtn).toBeInTheDocument();
});

test("should header have image alt text", () => {
  render(<MockLogoHeader />);

  const headerImage = screen.getByAltText("Player Board");
  expect(headerImage).toBeInTheDocument();
});
