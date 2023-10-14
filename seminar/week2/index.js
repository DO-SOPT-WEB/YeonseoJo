// (1) strawberry 아래 mango 추가하기

// step 1 - mango li 태그 생성
const mango = document.createElement("li");
const mangoText = document.createTextNode("mango");
// 참고 ==> mango.innerText="mango"도 가능! (텍스트를 만드는 방법은 다양함)

mango.appendChild(mangoText); //<li>mango</li>

// step 2 - fruit ul 맨 끝에 mango li 추가하기
const fruitList = document.querySelector("ul");
fruitList.appendChild(mango);

// (2) class가 red인 애들 삭제하기
const redFruit = document.querySelectorAll(".red"); //array
redFruit.forEach((fruit) => {
  fruit.remove();
});

// (3) 세번째 과일 파란색 만들기
const thirdFruit = document.querySelector("li:nth-child(3");
thirdFruit.classList.add("blue");

// (4) 버튼을 누르면 과일 개수 알려주기
const lengthBtn = document.querySelector("button.count");

const showLength = () => {
  const allList = document.querySelectorAll("li");

  alert(`과일 개수는 ${allList.length}입니다!`);
};
lengthBtn.addEventListener("click", showLength);
