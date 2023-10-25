import { HISTORY_LIST_DATA } from "./data/HISTORY_LIST.js";

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

let INIT_BALANCE = 0;

const renderHistory = () => {
  const historyContainer = $(".history__list__container");

  HISTORY_LIST_DATA.forEach((list) => {
    const { category, contents, type, amount } = list;

    const historyBox = document.createElement("li");
    historyBox.classList.add(`history__list__box`);
    historyBox.innerHTML = `
    <span class="history-category">${category}</span>
    <span class="history-contents">${contents}</span>
    <span class="history-amount ${type}">${amount}</span>
    <button type="button" class="history-del-btn">X</button>`;

    historyContainer.appendChild(historyBox);
  });
};

const renderBalance = () => {
  HISTORY_LIST_DATA.forEach((data) => {
    const { type, amount } = data;
    type === "expense"
      ? (INIT_BALANCE -= Number(amount))
      : (INIT_BALANCE += Number(amount));

    const totalAmount = $(".asset__box__total-amount");
    totalAmount.innerHTML = INIT_BALANCE;
  });
};

const renderInitData = () => {
  renderHistory();
  renderBalance();
};

renderInitData();
