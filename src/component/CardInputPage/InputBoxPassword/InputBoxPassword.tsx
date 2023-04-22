import { useState, ChangeEvent } from "react";
import CardPassword from "./CardPassword";

import "./inputBoxPassword.css";
import { CARD_ERROR_MESSAGE } from "../../../CONSTANT";

interface Props {
  //   setCardNumber?: React.Dispatch<React.SetStateAction<number[]>>
  setIsComplete: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function InputBoxPassword(props: Props) {
  const { setIsComplete } = props;

  const [error, setError] = useState(true);

  return (
    <div className="input-box-card-password">
      <p>카드 비밀번호</p>
      <CardPassword setError={setError} setIsComplete={setIsComplete} />
      <p className={error ? "visible" : ""}>
        {CARD_ERROR_MESSAGE.INPUT_CARD_PASSWORD}
      </p>
    </div>
  );
}
