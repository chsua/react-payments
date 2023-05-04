import { useRef } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../../common/Button";
import CardPreview from "../../common/CardPreview";
import InputBoxCardNumber from "../InputBoxCardNumber/InputBoxCardNumber";
import InputBoxExpirationDate from "../InputBoxExpirationDate/InputBoxExpirationDate";
import InputBoxOwner from "../InputBoxOwner/InputBoxOwner";
import InputBoxPassword from "../InputBoxPassword/InputBoxPassword";
import InputBoxSecurityCode from "../InputBoxSecurityCode/InputBoxSecurityCode";
import CardCoModal from "../../common/CardCoModal";

import { CreditCard } from "../../../type";
import { cardCoList } from "../../../cardData";

import "./cardInputForm.css";
import CardCoButton from "../../common/CardCoButton";
import { useModalState } from "../../../hook/modalHook";
import { useCardInfoAndInputState } from "../../../hook/cardInfoAndInputHook";

interface CardInputFormProps {
  addNewCard: (card: CreditCard) => void;
}

export default function CardInputForm(props: CardInputFormProps) {
  const { modalOpen, openModal, closeModal } = useModalState();

  const isFormFilled = useRef(false);
  const { inputStatus, nowCardInfo, changeInputStatus } =
    useCardInfoAndInputState(closeModal);

  const { cardNumber, expirationDate, securityCode, password } = inputStatus;
  isFormFilled.current =
    cardNumber && expirationDate && securityCode && password;

  const navigate = useNavigate();
  const { addNewCard } = props;
  const submitCardInfo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isFormFilled.current) {
      addNewCard(nowCardInfo);
      navigate("/CardNickInputPage");
    }
  };

  return (
    <form onSubmit={(e) => submitCardInfo(e)} className="form">
      {
        <CardCoModal isOpen={modalOpen}>
          {cardCoList.map((cardCo) => (
            <CardCoButton
              cardCo={cardCo}
              changeCardCoStatus={changeInputStatus("cardCo")}
            />
          ))}
        </CardCoModal>
      }
      <CardPreview card={nowCardInfo} openCardCoModal={openModal} />
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
      <Button
        type="submit"
        style={isFormFilled.current ? {} : { color: "lightgrey" }}
      >
        다음
      </Button>
    </form>
  );
}
