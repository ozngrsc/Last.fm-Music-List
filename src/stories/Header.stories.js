import React from "react";
import Header from "../components/Header/Header";
import { MemoryRouter } from "react-router-dom";
import { storiesOf } from "@storybook/react";

storiesOf("Header", module)
  .addDecorator((story) => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("Normal", () => <Header />);
