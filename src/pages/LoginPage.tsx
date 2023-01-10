import { useState, useCallback, useContext } from "react";
import LoginPageWrapper from "@components/Login/LoginPageWrapper";
import LoginPageLogo from "@components/Login/LoginPageLogo";
import LoginPageTitle from "@components/Login/LoginPageTitle";
import LoginPageText from "@components/Login/LoginPageText";
import LoginPageForm from "@components/Login/LoginPageForm";
import LoginPageButton from "@components/Login/LoginPageButton";
import Link from "@components/Link";
import UserContext from "context/UserContext";
import Input from "@components/Input";
import { validateEmail } from "@helpers/validate";
import { ILogin } from "@hooks/useAuth";
import { IAuth } from "./DocumentPage";
import ModalWrapperComponent from "@components/Modal/ModalWrapper/ModalWrapperComponent";

const LoginPage = ({ setOpenLoginModal, openLoginModal }: IAuth) => {
  const [form, setForm] = useState<ILogin>({
    email: "",
    password: "",
  });

  const { login, error, loading } = useContext(UserContext);

  const handleSubmit = useCallback(() => {
    return login ? login(form) : null;
  }, [login, form]);

  const handleInputChange = useCallback(
    (e: { target: { value: string; name: string } }) => {
      const { name, value } = e.target;
      setForm({ ...form, [name]: value });
    },
    [form],
  );

  return (
    <ModalWrapperComponent handler={setOpenLoginModal} state={openLoginModal} variant="">
      <LoginPageWrapper>
        <LoginPageLogo>
          <svg
            width="96"
            height="100"
            viewBox="0 0 96 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M67.2299 13.0625C63.8875 12.1018 60.3668 11.5885 56.7308 11.5885C56.0866 11.5885 55.446 11.6046 54.8094 11.6365C55.4459 11.6046 56.0864 11.5886 56.7304 11.5886C60.3662 11.5886 63.8869 12.1018 67.2291 13.0624C67.2294 13.0624 67.2296 13.0624 67.2299 13.0625ZM88.3396 22.7735C80.5395 13.8077 69.2671 8.17553 56.7308 8.17553C33.1873 8.17553 14.1016 28.04 14.1016 52.5441C14.1016 77.0482 33.1873 96.9127 56.7308 96.9127C60.9106 96.9127 64.9499 96.2866 68.7669 95.1196C62.4917 98.248 55.4624 100 48.0399 100C21.5082 100 0 77.6142 0 50C0 22.3858 21.5082 0 48.0399 0C64.9233 0 79.7725 9.06489 88.3396 22.7735ZM89.7192 74.8802L89.7217 74.8758C86.4525 80.0968 82.0703 84.4939 76.9253 87.7022C82.069 84.4948 86.4503 80.0994 89.7192 74.8802Z"
              fill="#7DBE3B"
            />
            <path
              d="M95.0017 62.1086C90.863 80.1143 75.2986 93.4999 56.7304 93.4999C34.998 93.4999 17.3804 75.1635 17.3804 52.5443C17.3804 29.9251 34.998 11.5887 56.7304 11.5887C60.3665 11.5887 63.8873 12.1019 67.2297 13.0627C66.4157 13.0006 65.5935 12.9691 64.7643 12.9691C46.3823 12.9691 31.4807 28.4787 31.4807 47.6107C31.4807 66.7428 46.3823 82.2524 64.7643 82.2524C78.173 82.2524 89.7298 73.9998 95.0017 62.1086ZM76.443 76.3855C87.2123 71.6448 94.7687 60.5462 94.7687 47.6107C94.7687 30.3636 81.3353 16.3821 64.7643 16.3821C60.6214 16.3821 56.6747 17.256 53.0849 18.8363C56.6746 17.2561 60.6212 16.3822 64.764 16.3822C81.3349 16.3822 94.7684 30.3638 94.7684 47.6109C94.7684 60.5462 87.2121 71.6447 76.443 76.3855Z"
              fill="#448C0D"
            />
          </svg>
        </LoginPageLogo>
        <LoginPageTitle>Welcome to DMS</LoginPageTitle>
        <LoginPageText>Document Management System</LoginPageText>
        <LoginPageForm>
          <Input
            validate={validateEmail}
            value={form.email}
            name="email"
            placeholder="Email"
            id="email"
            type="email"
            title="Email"
            handler={handleInputChange}
          />
          <Input
            value={form.password}
            name="password"
            placeholder="Password"
            id="password"
            type="password"
            title="Password"
            handler={handleInputChange}
          />
          <LoginPageButton disabled={loading} onClick={handleSubmit} type="button">
            Login
          </LoginPageButton>
        </LoginPageForm>
        <Link to={"/registration"}>I don`t have an account</Link>
      </LoginPageWrapper>
    </ModalWrapperComponent>
  );
};

export default LoginPage;
