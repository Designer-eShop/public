import { storiesOf } from "@storybook/react";
import React from "react";
import Navigation from "./Navigation";
import StoryRouter from "storybook-react-router";

storiesOf("Navigation", module)
  .addDecorator(StoryRouter())
  .add("Navigation", () => <Navigation />);
