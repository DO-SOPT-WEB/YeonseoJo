const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

// ****이미지 호버 시 설명 보이기 구현******

const handleShowDescription = () => {
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

  firstSectionImgContainer.addEventListener("mouseover", showDescription);
  firstSectionImgContainer.addEventListener("mouseout", delDescription);
};

handleShowDescription();
