import React from "react";
import ArtistDetail from "../components/ArtistDetail/ArtistDetail";
import { MemoryRouter } from "react-router-dom";
import { storiesOf } from "@storybook/react";

storiesOf("Artist Detail", module)
  .addDecorator((story) => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("Normal", () => <ArtistDetail />);
