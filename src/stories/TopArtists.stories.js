import React from "react";
import TopArtists from "../components/TopArtistsList/TopArtists";
import { MemoryRouter } from "react-router-dom";
import { storiesOf } from "@storybook/react";

storiesOf("Top Artists", module)
  .addDecorator((story) => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("Normal", () => <TopArtists />);
