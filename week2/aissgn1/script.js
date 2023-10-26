const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

// ****이미지 호버 시 설명 보이기 구현******
const firstSectionImgCards = $$(".jeju-section__img-card");
const firstSectionImgContainer = $(".jeju-section__img-container");

// 설명 보이기 -> show-describe 클래스 붙여주기
const showDescription = (event) => {
  event.target.classList.add("show-describe");
};

// 설명 안보이게 -> show-describe 클래스 제거
const delDescription = (event) => {
  event.target.classList.remove("show-describe");

  // 더보기 상태 초기화
  const detailContents = $$(".description__detail");
  detailContents.forEach((content) => (content.style.overflow = "hidden"));
  const moreBtns = $$(".detail__more-btn");
  moreBtns.forEach((btn) => (btn.style.display = "block"));
};

// 설명 보이게 하는 핸들러 함수
const handleShowDescription = () => {
  firstSectionImgCards.forEach((imgCard) =>
    imgCard.addEventListener("mouseenter", showDescription)
  );
  firstSectionImgCards.forEach((imgCard) =>
    imgCard.addEventListener("mouseleave", delDescription)
  );
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

//***** 설명 더보기 버튼 구현 *****
// 더보기 버튼 보여주는 핸들러 함수
const handleshowMoreBtn = () => {
  const details = $$(".description__detail");
  details.forEach((detail) => {
    if (detail.innerHTML.length > 70) {
      const moreBtn = document.createElement("button");
      moreBtn.setAttribute("type", "button");
      moreBtn.classList.add("detail__more-btn");
      moreBtn.innerHTML = "더보기";

      detail.parentNode.appendChild(moreBtn);
    }
  });
};

// 설명 보이게 하는 함수
const showMoreDescription = (event) => {
  event.target.previousElementSibling.style.overflow = "visible";
  event.target.style.display = "none";
};

// 더보기 버튼 클릭시 설명 보이게 하는 핸들러 함수
const handleShowEllipsis = () => {
  const moreBtns = $$(".detail__more-btn");

  moreBtns.forEach((btn) => btn.addEventListener("click", showMoreDescription));
};

// ***** 스크롤 이동 기능 구현 ***
// 좌우 화살표 버튼 클릭시 가장 좌측/우측으로 이동되게 하는 핸들러 함수
const handlePreviewArrow = () => {
  const leftArrowBtn = $(".preview__left-btn");
  const rightArrowBtn = $(".preview__right-btn");

  const previewSection = $(".preview-section");

  leftArrowBtn.addEventListener("click", () => {
    previewSection.scrollLeft = previewSection.offsetLeft;
  });
  rightArrowBtn.addEventListener(
    "click",
    () => (previewSection.scrollLeft = previewSection.scrollWidth)
  );
};

//***** 최종 실행 함수(핸들러 함수) *****
//이미지 hover시 설명 보이게 하는 기능
handleShowDescription();

// top 버튼 스크롤에 따라 투명도 조정 기능
handleTopBtnOpacity();

//더보기 버튼 클릭시 설명 전체 보이게 하는 기능
handleshowMoreBtn();
handleShowEllipsis();

// 미리보기 좌우 화살표 클릭시 스크롤 이동 기능
handlePreviewArrow();
