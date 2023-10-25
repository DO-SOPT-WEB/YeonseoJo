const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

// ****이미지 호버 시 설명 보이기 구현******
const firstSectionImgCards = $$(".jeju-section__img-card");
const firstSectionImgContainer = $(".jeju-section__img-container");

// 설명 보이기 -> show-describe 클래스 붙여주기
const showDescription = (event) => {
  if ([...firstSectionImgCards].includes(event.target)) {
    const imgCard = event.target;
    imgCard.classList.add("show-describe");
  }
};

// 설명 안보이게 -> show-describe 클래스 제거
const delDescription = (event) => {
  if ([...firstSectionImgCards].includes(event.target)) {
    const imgCard = event.target;
    imgCard.classList.remove("show-describe");
  }
};

// 설명 보이게 하는 핸들러 함수
const handleShowDescription = () => {
  firstSectionImgContainer.addEventListener("mouseover", showDescription);
  firstSectionImgContainer.addEventListener("mouseout", delDescription);
};

// ***** top 버튼 스크롤 내림에 따라 선명해지게 구현 ******
const handleTopBtnOpacity = () => {
  const topBtn = $(".to-top");
  //top 버튼과 뷰포트의 상대적인 위치 정보를 받아옴
  const topBtnHeight = topBtn.getBoundingClientRect().height;

  document.addEventListener("scroll", () => {
    topBtn.style.opacity = window.scrollY / topBtnHeight / 30;
  });
};

handleShowDescription();
handleTopBtnOpacity();
