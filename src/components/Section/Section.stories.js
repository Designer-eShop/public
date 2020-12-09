import { storiesOf } from "@storybook/react";
import React from "react";
import Section from "./Section";

storiesOf("Section", module)
  .add("Full-width Section", () => (
    <Section background="#eee" fullWidth={true}>
      asdasdasdasdasdasdasdadsasda loreasdasdasdasdasdasdasdadsasda
      loreasdasdasdasdasdasdasdadsasda loreasdasdasdasdasdasdasdadsasda
      loreasdasdasdasdasdasdasdadsasda loreasdasdasdasdasdasdasdadsasda
      loreasdasdasdasdasdasdasdadsasda loreasdasdasdasdasdasdasdadsasda
      loreasdasdasdasdasdasdasdadsasda lore
    </Section>
  ))
  .add("Fixed-Width Section", () => (
    <Section background="#eee" fullWidth={false}>
      asdasdasdasdasdasdasdadsasda loreasdasdasdasdasdasdasdadsasda
      loreasdasdasdasdasdasdasdadsasda loreasdasdasdasdasdasdasdadsasda
      loreasdasdasdasdasdasdasdadsasda loreasdasdasdasdasdasdasdadsasda
      loreasdasdasdasdasdasdasdadsasda loreasdasdasdasdasdasdasdadsasda
      loreasdasdasdasdasdasdasdadsasda lore
    </Section>
  ));
