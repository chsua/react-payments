import { useState, ChangeEvent } from "react";

import Input from "../../common/Input";

import { CARD_ERROR_MESSAGE, GUIDE_MESSAGE } from "../../../CONSTANT";
import { makeAppropriateSecurityCode } from "../../../util/trans";

import "./inputBoxSecurityCode.css";

interface InputBoxSecurityProps {
  changeSecurityCodeStatus: (
    completeState: boolean,
    value?: string,
    index?: number
  ) => void;
}

export default function InputBoxSecurityCode(props: InputBoxSecurityProps) {
  const { changeSecurityCodeStatus } = props;

  const [haveError, setHaveError] = useState(false);
  const [securityCode, setSecurityCode] = useState("");
  const [guideClick, isGuideClick] = useState(false);

  const changeSecurityCode = (e: ChangeEvent<HTMLInputElement>) => {
    const userSecurityCode = e.target.value.slice(0, 3);
    const appropriateSecurityCode =
      makeAppropriateSecurityCode(userSecurityCode);

    if (userSecurityCode !== appropriateSecurityCode) {
      setHaveError(true);
      changeSecurityCodeStatus(false);
    } else if (appropriateSecurityCode.length === 3) {
      setHaveError(false);
      changeSecurityCodeStatus(true, appropriateSecurityCode);
    } else {
      setHaveError(false);
      changeSecurityCodeStatus(false);
    }

    setSecurityCode(appropriateSecurityCode);
  };

  const changeGuideClick = () => {
    isGuideClick(!guideClick);
  };

  return (
    <label className="input-box-security-code">
      <p>보안 코드(CVC/CVV)</p>
      <Input
        name="security-code"
        className="input-security-code"
        type="password"
        onChange={changeSecurityCode}
        inputMode="numeric"
        required={true}
        ariaRequired={true}
        value={securityCode}
      />
      <button
        className="button-security-code"
        type="button"
        onClick={changeGuideClick}
      >
        ?
      </button>
      {guideClick && (
        <p className="guide-security-code" aria-label="보안코드 입력 가이드">
          {GUIDE_MESSAGE.SECURITY_CODE}
        </p>
      )}
      <p className="error-message">
        {haveError && CARD_ERROR_MESSAGE.INPUT_CARD_SECURITY}
      </p>
    </label>
  );
}
