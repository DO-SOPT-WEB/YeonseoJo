import { HISTORY_LIST_DATA } from "./data/HISTORY_LIST.js";

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

let INIT_BALANCE = 0;
let SUM_EXPENSE = 0;
let SUM_INCOME = 0;

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

const renderTotalBalance = () => {
  HISTORY_LIST_DATA.forEach((data) => {
    const { type, amount } = data;

    if (type === "expense") {
      INIT_BALANCE -= amount; //total balance
      SUM_EXPENSE += amount; //total expense
    } else {
      INIT_BALANCE += amount; //total balance
      SUM_INCOME += amount; //total income
    }
  });

  const totalAmount = $(".asset__box__total-amount");
  totalAmount.innerHTML = INIT_BALANCE;

  const totalExpense = $(".detail-amount__num__minus");
  totalExpense.innerHTML = SUM_EXPENSE;

  const totalIncome = $(".detail-amount__num__plus");
  totalIncome.innerHTML = SUM_INCOME;
};

const renderInitData = () => {
  renderHistory();
  renderTotalBalance();
};

renderInitData();
