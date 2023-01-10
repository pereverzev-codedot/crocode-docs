import styled from "@emotion/styled";
import { css, Theme } from "@emotion/react";

import SwitchWrapper from "@components/Switch/SwitchWrapper";

interface IButton {
  text: string;
  handleChangeState: any;
  isTrue: boolean;
  name: string;
}

interface ITrue {
  isTrue: boolean;
  theme?: Theme;
}

const dynamicStyles = ({ isTrue, theme }: ITrue) => css`
  ${isTrue
    ? `
    background: ${theme?.palette.accent};

    &::after{
      left: calc(100% - 18px);
    }
    `
    : `
    background: #d9d9d9;

    &::after{
      left: 2px;
    }
    `}
`;

const Component = styled.div`
  pointer-events: none;
  padding-left: 2px;
  padding-right: 2px;
  width: 40px;
  height: 20px;
  border-radius: 30px;
  display: flex;
  align-items: center;
  position: relative;
  transition: 0.5s;

  &::after {
    transition: 0.5s;
    content: "";
    position: absolute;
    width: 16px;
    height: 16px;
    background: #ffffff;
    border-radius: 50%;
  }

  ${dynamicStyles}
`;

const Switch = ({ text, handleChangeState, isTrue, name }: IButton) => {
  return (
    <SwitchWrapper data-name={name} data-value={isTrue ? 1 : 0} onClick={handleChangeState}>
      {text}
      <Component isTrue={isTrue} />
    </SwitchWrapper>
  );
};

export default Switch;
