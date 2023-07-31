import { ChangeEvent, InputHTMLAttributes } from "react";
import { InputContainer } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id?: string;
  name?: string;
  placeholder?: string;
  type?: string;
  value?: string;
  variant?: "primary" | "secondary";
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({
  id,
  name,
  placeholder,
  type = "text",
  value,
  variant = "primary",
  onChange,
}: InputProps) => {
  return (
    <InputContainer variant={variant}>
      <input
        id={id}
        name={name}
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={onChange}></input>
    </InputContainer>
  );
};
