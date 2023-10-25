import { HISTORY_LIST_DATA } from "./data/HISTORY_LIST.js";

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

let INIT_BALANCE = 0;
let SUM_EXPENSE = 0;
let SUM_INCOME = 0;

// 내역 리스트 렌더링 함수
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

// 총 자산, 수입, 지출 렌더링 함수
const renderTotalBalance = () => {
  HISTORY_LIST_DATA.forEach((data) => {
    const { type, amount } = data;

    type === "expense" ? (SUM_EXPENSE += amount) : (SUM_INCOME += amount);
  });

  const totalAmount = $(".asset__box__total-amount");
  totalAmount.innerHTML = INIT_BALANCE + SUM_INCOME - SUM_EXPENSE;

  const totalExpense = $(".detail-amount__num__minus");
  totalExpense.innerHTML = SUM_EXPENSE;

  const totalIncome = $(".detail-amount__num__plus");
  totalIncome.innerHTML = SUM_INCOME;
};

// 초기 데이터 렌더링 함수
const handleRenderInitData = () => {
  renderHistory(); //내역 리스트와
  renderTotalBalance(); // 총 수입, 지출, 자산을 데이터로부터 가져와 보여준다
};

//체크 박스 선택에 따른 필터링 구현
const incomeCheckbox = $("#checkbox-income");
const expenseCheckbox = $("#checkbox-expense");

//리스트 필터 함수
const filterList = () => {
  const incomeLists = $$(".history-amount.income");
  const expenseLists = $$(".history-amount.expense");

  incomeCheckbox.checked
    ? incomeLists.forEach((list) => (list.parentNode.style.display = "flex"))
    : incomeLists.forEach((list) => (list.parentNode.style.display = "none"));

  expenseCheckbox.checked
    ? expenseLists.forEach((list) => (list.parentNode.style.display = "flex"))
    : expenseLists.forEach((list) => (list.parentNode.style.display = "none"));
};

//체크 박스 이벤트에 의한 필터링 헨들링 함수
const handleFilterCheckbox = () => {
  incomeCheckbox.addEventListener("change", filterList);
  expenseCheckbox.addEventListener("change", filterList);
};

handleRenderInitData();
handleFilterCheckbox();
