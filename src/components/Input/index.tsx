import { useCallback, useEffect, useState } from "react";
import styled from "@emotion/styled";
import InputLabel from "./InputLabel";
import InputName from "./InputName";
import InputError from "./InputError";

const StyledInput = styled.input`
  padding: 12px 24px;
  border: 0.5px solid #696969;
  background: #ffffff;
  color: #696969;
  font-weight: 400;
  font-size: 20px;
  line-height: 150%;
  width: 100%;
`;

interface IInput {
  validate?: (value: string) => string | null;
  value: string;
  name: string;
  id: string;
  handler: (e: any) => void;
  type: string;
  placeholder: string;
  title: string;
}

const Input = ({
  validate,
  value,
  name,
  placeholder,
  id = "",
  handler,
  type,
  title,
}: IInput): JSX.Element => {
  const [isBlured, setIsBlured] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleBlured = useCallback(() => (!isBlured ? setIsBlured(true) : null), [isBlured]);

  useEffect(() => {
    if (isBlured) setError(validate ? validate(value) : null);
  }, [isBlured, validate, value]);

  return (
    <InputLabel>
      <InputName>{title}</InputName>
      <StyledInput
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={handler}
        name={name}
        id={id}
        onBlur={handleBlured}
      />
      <InputError>{error}</InputError>
    </InputLabel>
  );
};

export default Input;
