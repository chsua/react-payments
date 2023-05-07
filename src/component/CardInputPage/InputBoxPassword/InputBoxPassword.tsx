import { useState, useEffect } from "react";

import CardPassword from "./CardPassword";

import { CARD_ERROR_MESSAGE, EXPLANATION_MESSAGE } from "../../../CONSTANT";
import { nowStatus } from "../../../type";

import "./inputBoxPassword.css";

interface InputBoxPasswordProps {
  changePasswordStatus: (
    completeState: boolean,
    value?: string,
    index?: number
  ) => void;
}

export default function InputBoxPassword(props: InputBoxPasswordProps) {
  const { changePasswordStatus } = props;

  const [allStatus, setAllStatus] = useState<nowStatus[]>([1, 1]);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setHasError(allStatus.includes(0));

    allStatus.every((status) => status === 2)
      ? changePasswordStatus(true)
      : changePasswordStatus(false);
  }, [allStatus]);

  const changeEachPasswordStatus = (partIndex: number, state: nowStatus) => {
    const changedError = [...allStatus];
    changedError[partIndex] = state;
    return setAllStatus(changedError);
  };

  return (
    <label className="input-box-card-password">
      <p>{EXPLANATION_MESSAGE.INPUT_PASSWORD}</p>
      <CardPassword
        changeEachPasswordStatus={changeEachPasswordStatus}
        changePasswordStatus={changePasswordStatus}
      />
      <p className="error-message">
        {hasError && CARD_ERROR_MESSAGE.INPUT_CARD_PASSWORD}
      </p>
    </label>
  );
}
