import { useState } from "react";
import SelectMenuBtn from "../common/SelectMenuBtn";

const SelectCountryMenu = ({ setSelectedMenu }) => {
  const COUNTRY_MENUS = [
    { country: "Korea", title: "한식" },
    { country: "China", title: "중식" },
    { country: "Japan", title: "일식" },
  ];

  const [selectedCountry, setSelectedCountry] = useState("");

  const handleSelectCountry = (country) => {
    setSelectedCountry(country);
    setSelectedMenu((...prev) => {
      return { ...prev, country: selectedCountry };
    });
  };

  return COUNTRY_MENUS.map(({ country, title }) => {
    return (
      <SelectMenuBtn
        key={country}
        innerTxt={title}
        isSelected={selectedCountry === country}
        onClick={() => handleSelectCountry(country)}
      />
    );
  });
};

export default SelectCountryMenu;
