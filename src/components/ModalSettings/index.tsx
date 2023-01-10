import { useState, useCallback, useEffect, useContext } from "react";
import { Global } from "@emotion/react";

import ModalSettingsFonts from "@components/ModalSettings/ModalSettingsFonts";
import EditModalSettingsTop from "./ModalSettingsTop";
import EditModalSettingsWrapper from "./ModalSettingsWrapper";
import EditorModalSettings from "./EditorModalSettings";
import ModalSettingsFontsWrapper from "./ModalSettingsFontsWrapper";
import Switch from "@components/Switch";
import EditModalSettingsItem from "./EditModalSettingsItem";
import SignInButton from "./SignInButton";
import Link from "@components/Link";
import UserContext from "@context/UserContext";

interface ISettings {
  isOpenEditor: boolean;
  openLoginModal: boolean;
  setOpenLoginModal: (active: boolean) => void;
}

interface ISettingsState {
  fontType: string;
  isFullWidth: boolean;
  isSmallText: boolean;
}

const _defaultSettings = {
  fontType: "Inter",
  isFullWidth: false,
  isSmallText: false,
};

const SettingsModal = ({ isOpenEditor, openLoginModal, setOpenLoginModal }: ISettings) => {
  const { user } = useContext(UserContext);

  const [settings, setSettings] = useState<ISettingsState>(_defaultSettings);

  const { fontType, isFullWidth, isSmallText } = settings;

  const handleOpenLoginModal = useCallback(() => {
    setOpenLoginModal(!openLoginModal);
  }, [setOpenLoginModal, openLoginModal]);

  const handleChange = useCallback(
    (e: any) =>
      setSettings({
        ...settings,
        [e.target.dataset.name]:
          e.target.dataset.name === "fontType"
            ? e.target.dataset.value
            : !Number(e.target.dataset.value),
      }),
    [setSettings, settings],
  );

  useEffect(() => {
    const localSettings = localStorage.getItem("userSettings");
    const savedSettings = localSettings ? JSON.parse(localSettings) : _defaultSettings;
    setSettings(savedSettings || _defaultSettings);
  }, []);

  useEffect(() => {
    localStorage.setItem("userSettings", JSON.stringify(settings));
  }, [settings]);

  return (
    <>
      <EditorModalSettings isOpenEditor={isOpenEditor}>
        <EditModalSettingsTop>
          Style
          <ModalSettingsFontsWrapper>
            <ModalSettingsFonts activeFont={fontType} handler={handleChange} />
          </ModalSettingsFontsWrapper>
        </EditModalSettingsTop>

        <EditModalSettingsWrapper>
          <EditModalSettingsItem>
            <Switch
              handleChangeState={handleChange}
              name="isSmallText"
              isTrue={isSmallText}
              text="Small text"
            />
          </EditModalSettingsItem>
          <EditModalSettingsItem>
            <Switch
              handleChangeState={handleChange}
              name="isFullWidth"
              isTrue={isFullWidth}
              text="Full width"
            />
          </EditModalSettingsItem>
        </EditModalSettingsWrapper>
        {user ? null : <SignInButton onClick={handleOpenLoginModal}>Sign In</SignInButton>}
      </EditorModalSettings>
      <Global
        styles={`
        .editor-js--document-title {
          font-family: ${fontType};
          font-size: ${isSmallText ? "36px" : "42px"};
          max-width: ${isFullWidth ? 1025 : 655}px;
          width: 100%;
          margin: 0 auto 40px;
        }

        .codex-editor {
            font-family: ${fontType};
            font-size: ${isSmallText ? "14px" : "20px"};
            ${
              isFullWidth
                ? `.ce-block__content, .ce-toolbar__content { max-width:calc(1100px - 80px) !important; } .cdx-block { max-width: 1100px !important;}`
                : ""
            }
          }
          `}
      />
    </>
  );
};

export default SettingsModal;
