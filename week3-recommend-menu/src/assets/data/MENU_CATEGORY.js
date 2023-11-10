export const SELECTED_MENU = {
  method: "",
  country: "",
  type: "",
  isSpicy: null,
};

export const METHOD_MENUS = [
  {
    type: "optional",
    title: "취향대로 추천",
  },
  { type: "randomize", title: "랜덤 추천" },
];

export const COUNTRY_MENUS = [
  { country: "Korea", title: "한식" },
  { country: "China", title: "중식" },
  { country: "Japan", title: "일식" },
];

export const TYPE_MENUS = [
  { type: "rice", title: "밥" },
  { type: "noodle", title: "면" },
  { type: "etc", title: "기타" },
];

export const IS_SPICY_MENUS = [
  { spicy: true, title: "빨간거" },
  { spicy: false, title: "하얀거" },
];
