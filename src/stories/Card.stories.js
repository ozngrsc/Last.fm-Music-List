import React from "react";
import Card from "../components/Card/Card";

export default {
  title: "Card",
  component: Card,
  argTypes: {
    color: { control: "color" },
    image: { control: "img" },
  },
};

export function CardItem(args) {
  return <Card {...args} />;
}

CardItem.args = {
  heading: "Artist",
  name: "Kanye West",
  listeners: "Listeners: 15428546",
  playcount: "Playcount: 668765116",
};
