import { useState } from "react";
import SelectMenuBtn from "../common/SelectMenuBtn";

const SelectTypeMenu = ({ setSelectedMenu }) => {
  const TYPE_MENUS = [
    { type: "rice", title: "밥" },
    { type: "noodle", title: "면" },
    { type: "etc", title: "기타" },
  ];

  const [selectedType, setSelectedType] = useState("");

  const handleSelectType = (type) => {
    setSelectedType(type);
    setSelectedMenu((...prev) => {
      return { ...prev, country: selectedType };
    });
  };

  return TYPE_MENUS.map(({ type, title }) => {
    return (
      <SelectMenuBtn
        key={type}
        innerTxt={title}
        isSelected={selectedType === type}
        onClick={() => handleSelectType(type)}
      />
    );
  });
};

export default SelectTypeMenu;
