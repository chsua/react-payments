import Button from "../../common/Button";
import CardPreview from "../../common/CardPreview";
import InputBoxCardNumber from "../InputBoxCardNumber/InputBoxCardNumber";
import InputBoxExpirationDate from "../InputBoxExpirationDate/InputBoxExpirationDate";
import InputBoxOwner from "../InputBoxOwner/InputBoxOwner";
import InputBoxPassword from "../InputBoxPassword/InputBoxPassword";
import InputBoxSecurityCode from "../InputBoxSecurityCode/InputBoxSecurityCode";

import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./cardInputForm.css";
import { CreditCard, InputStatus } from "../../../type";
import { deepCopyObject } from "../../../util/deepCopy";
import { EachUserInputState } from "../../../type";

interface Props {
  addNewCard: (card: CreditCard) => void;
}

const initialCard: CreditCard = {
  owner: "",
  expirationDate: "",
  bank: "",
  cardNumber: [],
  securityCode: "",
  password: [],
};

const initialArrayInputState: EachUserInputState = {
  isComplete: false,
  userInput: [],
};
const initialStringInputState: EachUserInputState = {
  isComplete: false,
  userInput: "",
};

const initialInputStatus = {
  cardNumber: initialArrayInputState,
  expirationDate: initialStringInputState,
  owner: initialStringInputState,
  securityCode: initialStringInputState,
  password: initialArrayInputState,
};

//하나의 inputState에는 {isComplete:true, userInput: value}
export default function CardInputForm(props: Props) {
  const { addNewCard } = props;

  const [isFormFilled, setIsFormFilled] = useState(false);

  const nowCardInfo = initialCard;

  const navigate = useNavigate();
  const formElement = useRef<HTMLFormElement>(null);

  //total user Input status
  const [inputStatus, setInputStatus] =
    useState<InputStatus>(initialInputStatus);

  const changeInputStatus = (inputName: keyof InputStatus) => {
    return (key: keyof EachUserInputState, value: any, index?: number) => {
      setInputStatus((currentInputStatus) => {
        const updateResult = JSON.parse(JSON.stringify(currentInputStatus));

        if (key === "isComplete") {
          updateResult[inputName][key] = value;
          console.log(updateResult);
          return updateResult;
        }

        if (
          (inputName === "cardNumber" || inputName === "password") &&
          index !== undefined
        ) {
          updateResult[inputName][key][index] = value;
          nowCardInfo[inputName][index] = value;
          return updateResult;
        }

        updateResult[inputName][key] = value;
        nowCardInfo[inputName] = value;
        return updateResult;
      });
    };
  };

  function submitCardInfo(e: SubmitEvent) {
    e.preventDefault();

    if (!formElement.current) return;

    const formData = new FormData(formElement.current);

    const card: CreditCard = {
      owner: formData.get("card-owner")?.toString() as string,
      expirationDate: formData.get("expiration-date")?.toString() as string,
      cardNumber: [
        formData.get("card-number-1"),
        formData.get("card-number-2"),
        formData.get("card-number-3"),
        formData.get("card-number-4"),
      ].map(Number),
      securityCode: formData.get("security-code")?.toString() as string,
      password: [
        formData.get("card-password-1"),
        formData.get("card-password-2"),
      ].map(Number),
    };

    addNewCard(card);
    // resetNowCardInfo();
    navigate("/CardListPage");
  }

  //유저 입력값이 달라지면 complete를 확인해서 formFilled 여부 처리
  useEffect(() => {
    const { cardNumber, expirationDate, securityCode, password } = inputStatus;
    if (
      cardNumber.isComplete &&
      expirationDate.isComplete &&
      securityCode.isComplete &&
      password.isComplete
    )
      setIsFormFilled(true);
    else setIsFormFilled(false);
  }, [inputStatus]);

  //formFilled 여부에 따라 제출 이벤트 생성/삭제
  useEffect(() => {
    // if (!isFormFilled) {
    //   formElement.current?.removeEventListener("submit", submitCardInfo);
    // }

    // formElement.current?.addEventListener("submit", submitCardInfo);

    if (isFormFilled) console.log(nowCardInfo);
    console.log(inputStatus);
  }, [isFormFilled]);

  return (
    <form ref={formElement} className="form">
      <CardPreview card={nowCardInfo} />
      <InputBoxCardNumber
        changeCardNumberStatus={changeInputStatus("cardNumber")}
      />
      <InputBoxExpirationDate
        changeCardExpirationDateStatus={changeInputStatus("expirationDate")}
      />
      <InputBoxOwner changeCardOwnerStatus={changeInputStatus("owner")} />
      <InputBoxSecurityCode
        changeSecurityCodeStatus={changeInputStatus("securityCode")}
      />
      <InputBoxPassword changePasswordStatus={changeInputStatus("password")} />
      {isFormFilled && <Button type="submit">다음</Button>}
    </form>
  );
}

// const changeNowCardInfo = (
//   key: keyof CreditCard,
//   value: any,
//   index?: number
// ) => {
//   if (key === "number" && index !== undefined) {
//     const updateCardInfo = JSON.parse(JSON.stringify(nowCardInfo));
//     updateCardInfo.number[index] = value;

//     cardNumberStatus && setNowCardInfo(updateCardInfo);
//     return;
//   }

//   if (key === "expirationDate") {
//     setNowCardInfo({ ...nowCardInfo, [key]: value });
//     return;
//   }
//   if (key === "owner") setNowCardInfo({ ...nowCardInfo, [key]: value });
// };

// const [cardNumberStatus, setCardNumberStatus] = useState<EachUserInputState>(
//   initialEachUserInputState
// );
// const [expirationDateStatus, setExpirationDateStatus] =
//   useState<EachUserInputState>(initialEachUserInputState);
// const [ownerStatus, setOwnerStatus] = useState(initialEachUserInputState);
// const [securityCodeStatus, setSecurityCodeStatus] = useState(
//   initialEachUserInputState
// );
// const [passwordStatus, setPasswordStatus] = useState(
//   initialEachUserInputState
// );

// function changeCardNumberStatus(key: "isComplete" | "userInput", value: any) {
//   setCardNumberStatus(deepCopyObject(cardNumberStatus, key, value));
// }

// function changeCardExpirationDateStatus(
//   key: "isComplete" | "userInput",
//   value: any
// ) {
//   setExpirationDateStatus(deepCopyObject(expirationDateStatus, key, value));
// }

// function changeOwnerStatus(key: "isComplete" | "userInput", value: any) {
//   setOwnerStatus(deepCopyObject(ownerStatus, key, value));
// }

// function changeSecurityCodeStatus(
//   key: "isComplete" | "userInput",
//   value: any
// ) {
//   setSecurityCodeStatus(deepCopyObject(ownerStatus, key, value));
// }

// function changePasswordStatus(key: "isComplete" | "userInput", value: any) {
//   setPasswordStatus(deepCopyObject(passwordStatus, key, value));
// }
