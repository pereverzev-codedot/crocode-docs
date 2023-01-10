import { useState, useCallback } from "react";

import ModalSettingsFontWrapper from "./ModalSettingsFontWrapper";
import ModalSettingsFont from "./ModalSettingsFont";
import ModalSettingsFontName from "./ModalSettingsFontName";

const fonts = [
  { name: "Inter", family: "Inter" },
  { name: "Serif", family: "Serif" },
  { name: "Mono", family: "Monospace" },
];

interface IProps {
  activeFont: string;
  handler: any;
}

const ModalSettingsFonts = ({ activeFont, handler }: IProps) => {
  return (
    <>
      {fonts.map((el) => (
        <ModalSettingsFontWrapper
          data-name="fontType"
          data-value={el.family}
          onClick={handler}
          key={el.family}
        >
          <ModalSettingsFont active={activeFont === el.family} value={el.family}>
            Ag
          </ModalSettingsFont>
          <ModalSettingsFontName>{el.name}</ModalSettingsFontName>
        </ModalSettingsFontWrapper>
      ))}
    </>
  );
};

export default ModalSettingsFonts;
