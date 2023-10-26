import { HISTORY_LIST_DATA } from "./data/HISTORY_LIST.js";

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

let INIT_BALANCE = 0;
let SUM_EXPENSE = 0;
let SUM_INCOME = 0;

//**** 데이터로부터 초기 렌더링 구현 *****
// 내역 리스트 렌더링 함수
const renderHistory = () => {
  const historyContainer = $(".history__list__container");

  HISTORY_LIST_DATA.forEach((list) => {
    const { id, category, contents, type, amount } = list;

    const historyBox = document.createElement("li");
    historyBox.classList.add(`history__list__box`);
    historyBox.id = id;
    historyBox.innerHTML = `
    <span class="history-category">${category}</span>
    <span class="history-contents">${contents}</span>
    <span class="history-amount ${type}">${amount.toLocaleString()}</span>
    <button type="button" class="history-del-btn">X</button>`;

    historyContainer.appendChild(historyBox);
  });
};

// 총 자산, 수입, 지출 렌더링 함수
const renderTotalBalance = () => {
  const incomeAmounts = [...$$(".history-amount.income")].map((history) => {
    return Number(history.innerHTML.replaceAll(",", ""));
  });
  const expenseAmounts = [...$$(".history-amount.expense")].map((history) => {
    return Number(history.innerHTML.replaceAll(",", ""));
  });

  SUM_INCOME = incomeAmounts.reduce((sum, curr) => {
    return sum + curr;
  }, 0);

  SUM_EXPENSE = expenseAmounts.reduce((sum, curr) => {
    return sum + curr;
  }, 0);

  const totalAmount = $(".asset__box__total-amount");
  totalAmount.innerHTML = (
    INIT_BALANCE +
    SUM_INCOME -
    SUM_EXPENSE
  ).toLocaleString();

  const totalExpense = $(".detail-amount__num__minus");
  totalExpense.innerHTML = SUM_EXPENSE.toLocaleString();

  const totalIncome = $(".detail-amount__num__plus");
  totalIncome.innerHTML = SUM_INCOME.toLocaleString();
};

// 초기 데이터 렌더링 함수
const handleRenderInitData = () => {
  renderHistory(); //내역 리스트와
  renderTotalBalance(); // 총 수입, 지출, 자산을 데이터로부터 가져와 보여준다
};

//*******체크 박스 선택에 따른 필터링 구현**********
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

//***** 리스트 삭제 구현 *****
//리스트 삭제 함수
const delData = (event) => {
  //이벤트 전파 방지 조건문
  if (event.target.className === "history-del-btn") {
    event.target.parentNode.remove(); //리스트 삭제
  }

  //총 자산에도 반영
  renderTotalBalance();
};

// 리스트 삭제 버튼 클릭시 삭제 구현 핸들링 함수
const handleDelList = () => {
  const delBtns = $$(".history-del-btn");

  delBtns.forEach(() => addEventListener("click", delData));
};

// ***** 리스트 추가 모달 구현 *****
const addListModal = $(".add-list-modal__background");

// 리스트 추가 모달 나타나게 하는 핸들러 함수
const handleOpenListAddModal = () => {
  const openBtn = $(".footer__add-btn");

  openBtn.addEventListener("click", () => {
    addListModal.style.display = "block";

    // 초기 값 세팅
    $("#modal__radio__income").checked = true;
    $(".add-amounts__input").value = "";
    $(".add-contents__input").value = "";
    $(
      ".add-category__select"
    ).innerHTML = `<option class="add-category__option">알바비</option>
    <option class="add-category__option">용돈</option>`;
  });
};

// type 버튼 이벤트 감지 핸들러 함수
const handleChangeType = () => {
  const radioInput = $(".add-list-modal__radio-input");
  radioInput.addEventListener("change", renderOptions);
};

// select의 option을 type에 따라 렌더해주는 함수
const renderOptions = (event) => {
  let targetType = "income"; //default 값

  if (event.target.id === "modal__radio__expense") {
    targetType = "expense";
  }

  const categorySelect = $(".add-category__select");

  targetType === "income"
    ? (categorySelect.innerHTML = `
  <option class="add-category__option">알바비</option>
  <option class="add-category__option">용돈</option>`)
    : (categorySelect.innerHTML = `
  <option class="add-category__option">식비</option>
  <option class="add-category__option">쇼핑</option>`);
};

//숫자만 입력하도록 구현하는 함수
const checkNumber = (event) => {
  if (isNaN(event.key)) {
    alert("숫자만 입력하세요");
  }
  event.target.value = Number(
    event.target.value.replace(/[^0-9]/g, "")
  ).toLocaleString();
};

// 금액에 숫자만 입력하도록 하는 핸들러 함수
const handleEnterAmount = () => {
  const newAmount = $(".add-amounts__input");

  newAmount.addEventListener("keyup", checkNumber);
};

// 리스트 추가 함수
const addNewList = () => {
  const newType = $('input[name="type"]:checked').value;

  const categories = $(".add-category__select");
  const newCategory = categories.options[categories.selectedIndex].innerHTML;

  const newAmount = $(".add-amounts__input").value;

  const newContents = $(".add-contents__input").value;

  const historyContainer = $(".history__list__container");
  const historyBox = document.createElement("li");
  historyBox.classList.add(`history__list__box`);
  historyBox.innerHTML = `
  <span class="history-category">${newCategory}</span>
  <span class="history-contents">${newContents}</span>
  <span class="history-amount ${newType}">${newAmount.toLocaleString()}</span>
  <button type="button" class="history-del-btn">X</button>`;

  if (newCategory && newAmount && newContents) {
    historyContainer.appendChild(historyBox);
    alert("저장되었습니다.");
  } else {
    alert("아직 입력되지 않은 항목이 있습니다.");
  }
};

// 모달에서 저장 버튼 클릭시 리스트 추사하는 핸들러 함수
const handleAddList = () => {
  const saveBtn = $(".add-list-modal__save-btn");

  saveBtn.addEventListener("click", addNewList);
};

// 모달을 닫아주는 핸들러 함수
const handleCloseListAddModal = () => {
  const closeBtn = $(".add-list-modal__close-btn");
  closeBtn.addEventListener("click", () => {
    addListModal.style.display = "none";
  });
};

// ***** 최종 실행 함수들 *****
handleRenderInitData();

handleFilterCheckbox();

handleDelList();

handleOpenListAddModal();
handleChangeType();
handleAddList();
handleCloseListAddModal();

handleEnterAmount();
