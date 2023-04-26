import type { Meta } from "@storybook/react";

import CardNumber from "../component/CardInputPage/InputBoxCardNumber/CardNumber";

const meta: Meta = {
  title: "CardNumber component",
  component: CardNumber,
};

export default meta;

export const InputTest = (args: any) => (
  <CardNumber
    changeHasError={() => {}}
    changeCardNumberStatus={() => {}}
  ></CardNumber>
);
