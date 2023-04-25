import { useState, useEffect, ChangeEvent } from "react";
import Input from "../../common/Input";

import "./inputBoxExpirationDate.css";
import { CARD_ERROR_MESSAGE, INPUT_STATUS } from "../../../CONSTANT";
import { validateExpirationDate } from "../../../validation/ExpirationDate";
import { CreditCard } from "../../../type";
import { validateNumber } from "../../../validation/number";
import { makeAppropriateExpirationDate } from "../../../trans";

interface Props {
  changeCardExpirationDateStatus: (
    key: "isComplete" | "userInput",
    value: any
  ) => void;
}

export default function InputBoxExpirationDate(props: Props) {
  const { changeCardExpirationDateStatus } = props;

  const [isError, setIsError] = useState(false);
  const [expirationDate, setExpirationDate] = useState("");

  const changeExpirationDate = (e: ChangeEvent<HTMLInputElement>) => {
    const userInputExpirationDate = e.target.value.slice(0, 5);
    const appropriateExpirationDate = makeAppropriateExpirationDate(
      userInputExpirationDate
    );

    if (!validateExpirationDate(appropriateExpirationDate)) {
      setIsError(true);
      changeCardExpirationDateStatus("isComplete", false);
    } else if (appropriateExpirationDate.length === 5) {
      setIsError(false);
      changeCardExpirationDateStatus("isComplete", true);
      changeCardExpirationDateStatus("userInput", appropriateExpirationDate);
    } else {
      setIsError(false);
      changeCardExpirationDateStatus("isComplete", false);
    }

    setExpirationDate(appropriateExpirationDate);
  };

  return (
    <div className="input-box-expiration-date">
      <p>만료일</p>
      <Input
        name="expiration-date"
        className="input-expiration-date"
        type="text"
        onChange={changeExpirationDate}
        placeholder="MM / YY"
        inputMode="numeric"
        value={expirationDate}
      ></Input>
      <p className={isError ? "visible" : ""}>
        {CARD_ERROR_MESSAGE.INPUT_CARD_EXPIRATION_DATE}
      </p>
    </div>
  );
}
