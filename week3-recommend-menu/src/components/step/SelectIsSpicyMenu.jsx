import { useState } from "react";
import SelectMenuBtn from "../common/SelectMenuBtn";

const SelectIsSpicyMenu = ({ setSelectedMenu }) => {
  const IS_SPICY_MENUS = [
    { spicy: true, title: "빨간거" },
    { spicy: false, title: "하얀거" },
  ];

  const [selectedSpicy, setSelectedSpicy] = useState();

  const handleSelectSpicy = (spicy) => {
    setSelectedSpicy(spicy);
    setSelectedMenu((...prev) => {
      return { ...prev, spicy: selectedSpicy };
    });
  };

  return IS_SPICY_MENUS.map(({ spicy, title }) => {
    return (
      <SelectMenuBtn
        key={title}
        innerTxt={title}
        isSelected={selectedSpicy === spicy}
        onClick={() => handleSelectSpicy(spicy)}
      />
    );
  });
};

export default SelectIsSpicyMenu;
