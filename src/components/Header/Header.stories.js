import { storiesOf } from "@storybook/react";
import React from "react";
import Header from "./Header";
import StoryRouter from "storybook-react-router";

storiesOf("Header", module)
  .addDecorator(StoryRouter())
  .add("Header", () => <Header />);
