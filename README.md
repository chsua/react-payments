<p align="middle" >
  <img src="https://techcourse-storage.s3.ap-northeast-2.amazonaws.com/0fefce79602043a9b3281ee1dd8f4be6" width="400">
</p>
<h2 align="middle">Level2 - 페이먼츠</h2>
<p align="middle">React 모바일 페이먼츠 애플리케이션</p>
</p>

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

✔️ `모바일 타겟`의 웹 앱을 구현하며 컴포넌트가 가지는 의미와 `편리한 모바일 UI/UX`에 대해 고민해봅니다.  
✔️ 다른 라이브러리나 프레임워크 없이 오로지 `React`만으로 상태를 관리하고 컴포넌트를 설계합니다.  
✔️ `Controlled` & `Uncontrolled Components`에 입각하여 `Form`을 핸들링합니다.  
✔️ `재사용 가능한 Component`를 직접 작성하고 사용합니다.  
✔️ React `Hooks API`를 활용합니다.

## 👏 Contributing

만약 미션 수행 중에 개선사항이 보인다면, 언제든 자유롭게 PR을 보내주세요.

<br>

## 🐞 Bug Report

버그를 발견한다면, [Issues](https://github.com/woowacourse/react-payments/issues)에 등록해주세요.

<br>
<br>

## [페이지 예시화면](https://chsua.github.io/react-payments/)

<br>

# 3단계

## 파일 구조

```
📦src
 ┣ 📂asset
 ┣ 📂component
 ┃ ┣ 📂CardInputPage
 ┃ ┃ ┣ 📂CardInputForm
 ┃ ┃ ┣ 📂InputBoxCardNumber
 ┃ ┃ ┣ 📂InputBoxExpirationDate
 ┃ ┃ ┣ 📂InputBoxOwner
 ┃ ┃ ┣ 📂InputBoxPassword
 ┃ ┃ ┣ 📂InputBoxSecurityCode
 ┃ ┃ ┣ 📜CardInputPage.tsx
 ┃ ┃ ┗ 📜cardInputPage.css
 ┃ ┃
 ┃ ┣ 📂CardListPage
 ┃ ┃ ┣ 📂AddCardButton
 ┃ ┃ ┣ 📂CardList
 ┃ ┃ ┣ 📜CardListPage.tsx
 ┃ ┃ ┗ 📜cardListPage.css
 ┃ ┃
 ┃ ┣ 📂CardNickInputPage
 ┃ ┃ ┣ 📂InputBoxNick
 ┃ ┃ ┣ 📜CardNickInputPage.tsx
 ┃ ┃ ┗ 📜cardNickInputPage.css
 ┃ ┃
 ┃ ┣ 📂RegisterSpinnerPage
 ┃ ┃ ┣ 📜RegisterSpinnerPage.tsx
 ┃ ┃ ┗ 📜registerSpinnerPage.css
 ┃ ┃
 ┃ ┗ 📂common
 ┃   ┣ 📜Button.tsx
 ┃   ┣ 📜CardCoButton.tsx
 ┃   ┣ 📜CardCoModal.tsx
 ┃   ┣ 📜CardInfoInput.tsx
 ┃   ┣ 📜CardPreview.tsx
 ┃   ┣ 📜button.css
 ┃   ┣ 📜cardCoButton.css
 ┃   ┣ 📜cardCoModal.css
 ┃   ┣ 📜cardInfoInput.css
 ┃   ┗ 📜cardPreview.css
 ┃
 ┣ 📂hook
 ┃ ┣ 📜cardInfoAndInputHook.ts
 ┃ ┣ 📜cardListHook.ts
 ┃ ┣ 📜modalHook.ts
 ┃ ┗ 📜spinnerPageHook.ts
 ┃
 ┣ 📂stories
 ┃ ┣ 📂CardInputPage
 ┃ ┃ ┣ 📜CardInputForm.stories.tsx
 ┃ ┃ ┣ 📜CardNumber.stories.tsx
 ┃ ┃ ┣ 📜InputBoxCardNumber.stories.tsx
 ┃ ┃ ┣ 📜InputBoxExpirationDate.stories.tsx
 ┃ ┃ ┣ 📜InputBoxOwner.stories.tsx
 ┃ ┃ ┣ 📜InputBoxPassword.stories.tsx
 ┃ ┃ ┗ 📜InputBoxSecurityCode.stories.tsx
 ┃ ┃
 ┃ ┣ 📂CardListPage
 ┃ ┃ ┗ 📜CardListPage.stories.tsx
 ┃ ┃
 ┃ ┣ 📂CardNickInputPage
 ┃ ┃ ┣ 📜CardNickInputPage.stories.tsx
 ┃ ┃ ┗ 📜InputBoxNick.stories.tsx
 ┃ ┃
 ┃ ┣ 📂RegisterSpinnerPage
 ┃ ┃ ┗ 📜registerSpinnerPage.stories.tsx
 ┃ ┃
 ┃ ┗ 📂common
 ┃   ┣ 📜CardCoButton.stories.tsx
 ┃   ┣ 📜CardCoModal.stories.tsx
 ┃   ┣ 📜CardInfoInput.stories.tsx
 ┃   ┗ 📜CardPreview.stories.tsx
 ┃
 ┣ 📂style
 ┃ ┣ 📜palette.css
 ┃ ┗ 📜reset.css
 ┃
 ┣ 📂util
 ┃ ┣ 📜colorMatch.ts
 ┃ ┣ 📜getCardCoIcon.tsx
 ┃ ┗ 📜trans.ts
 ┃
 ┣ 📂validation
 ┃ ┣ 📜ExpirationDate.ts
 ┃ ┣ 📜cardOwner.ts
 ┃ ┗ 📜number.ts
 ┃
 ┣ 📜App.css
 ┣ 📜App.tsx
 ┣ 📜CONSTANT.ts
 ┣ 📜autoFocus.ts
 ┣ 📜cardData.ts
 ┣ 📜index.css
 ┣ 📜index.tsx
 ┣ 📜react-app-env.d.ts
 ┗ 📜type.ts
```
