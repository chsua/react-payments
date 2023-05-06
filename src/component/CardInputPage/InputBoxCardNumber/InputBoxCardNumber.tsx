import { useEffect, useState } from "react";

import CardNumber from "./CardNumber";

import { CARD_ERROR_MESSAGE } from "../../../CONSTANT";
import { nowStatus } from "../../../type";

import "./inputBoxCardNumber.css";

interface InputBoxNumberProps {
  changeCardNumberStatus: (
    completeState: boolean,
    value?: string,
    index?: number
  ) => void;
}

export default function InputBoxCardNumber(props: InputBoxNumberProps) {
  const { changeCardNumberStatus } = props;

  const [allStatus, setAllStatus] = useState<nowStatus[]>([1, 1, 1, 1]);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setHasError(allStatus.includes(0));

    allStatus.every((status) => status === 2)
      ? changeCardNumberStatus(true)
      : changeCardNumberStatus(false);
  }, [allStatus]);

  const changeEachNumberStatus = (partIndex: number, state: nowStatus) => {
    const changedError = [...allStatus];
    changedError[partIndex] = state;
    return setAllStatus(changedError);
  };

  return (
    <div className="input-box-card-number">
      <p>카드번호</p>
      <CardNumber
        changeEachNumberStatus={changeEachNumberStatus}
        changeCardNumberStatus={changeCardNumberStatus}
      />
      <p className="error-message">
        {hasError && CARD_ERROR_MESSAGE.INPUT_CARD_NUMBER}
      </p>
    </div>
  );
}
