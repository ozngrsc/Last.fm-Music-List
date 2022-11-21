import { render, screen } from "@testing-library/react";
import Card from "../Card/Card";

test("should render same text passed into heading prop", () => {
  render(<Card heading="Card Header" />);

  const cardHeader = screen.getByText(/card header/i);
  expect(cardHeader).toBeInTheDocument();
});

test("should render same text passed into name prop", () => {
  render(<Card name="Card Artist Name" />);

  const cardName = screen.getByText(/card artist name/i);
  expect(cardName).toBeInTheDocument();
});

test("should render same text passed into listeners prop", () => {
  render(<Card listeners="Card Listeners" />);

  const cardListeners = screen.getByText(/card listeners/i);
  expect(cardListeners).toBeInTheDocument();
});

test("should card have image alt text", () => {
  render(<Card />);

  const cardImage = screen.getByAltText("Artist");
  expect(cardImage).toBeInTheDocument();
});

test("should render same text passed into playcount prop", () => {
  render(<Card playcount="Card Playcount" />);

  const cardPlaycount = screen.getByText(/card playcount/i);
  expect(cardPlaycount).toBeInTheDocument();
});
