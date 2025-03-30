"use client";

import { ChangeEvent, Dispatch, FC, SetStateAction } from "react";
import { twMerge } from "tailwind-merge";

import Centered from "./Centered";

type InputProps = {
  placeholder: string;
  value: string | number;
  setValue: Dispatch<SetStateAction<string>>;
  className?: string;
  inputClassName?: string;
  password?: boolean;
};

const Input: FC<InputProps> = ({
  placeholder,
  value,
  setValue,
  className,
  inputClassName,
  password,
}) => {
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value);

  return (
    <Centered
      className={twMerge(
        "px-2 py-2 gap-x-0 gap-y-1 rounded-lg bg-white border border-[#B8B8B8]",
        className
      )}
      justify="start"
    >
      <input
        className={twMerge(
          "w-full -mt-[1px] py-2 px-1 outline-none text-base font-[family-name:var(--font-neue-montreal)] bg-inherit",
          "placeholder:text-[#ADB5BD]",
          inputClassName
        )}
        type={password ? "password" : "text"}
        value={value}
        onChange={handleInputChange}
        placeholder={placeholder}
      />
    </Centered>
  );
};

export default Input;
