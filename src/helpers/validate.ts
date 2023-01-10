// interface IValidate {
//   validateEmail: () => void;
//   validatePassword: () => void;
// }

export const validateNickname = (value: string): string | null => {
  if (!/(\s{2,})/.test(value)) {
    return null;
  }

  return null;
};

export const validateEmail = (value: string): string | null => {
  if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(value)) {
    return "Please input correct email";
  }
  return null;
};

export const validatePassword = (value: string): string | null => {
  if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(value)) {
    return "Minimum eight characters, at least one uppercase letter, one lowercase letter and one number";
  }
  return null;
};
