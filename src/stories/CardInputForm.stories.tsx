import type { Meta, StoryObj } from "@storybook/react";

import CardInputForm from "../component/CardInputPage/CardInputForm/CardInputForm";

const meta: Meta = {
  title: "CardInputForm component",
  component: CardInputForm,
};

export default meta;

export const InputTest = (args: any) => <CardInputForm></CardInputForm>;