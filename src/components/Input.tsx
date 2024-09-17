import React, { FC, useEffect } from "react";
import { InputProps } from "./props";
import { hasMaxLength, hasMinLength } from "@/lib/validations";

const Input: FC<InputProps> = ({
  name,
  className,
  id,
  placeholder,
  style,
  type = "text",
  value,
  variant = "primaryInp",
  disabled = false,
  loading = false,
  Icon,
  iconPosition = "left",
  iconStyles,
  required = false,
  onChange,
  onFocus,
  onBlur,
  readonly = false,
  autoComplete = "off",
  min,
  max,
}) => {
  useEffect(() => {
    if (min) {
      hasMinLength(value, min);
    }
    if (max) {
      hasMaxLength(value, max);
    }
  }, []);

  return (
    <div
      className={`custom-input rounded-full p-2 flex items-center gap-2 bg-transparent ${disabled && "disabledInp"} ${className} ${variant}`}
      style={style}
      id={id}
    >
      {iconPosition === "left" && Icon && (
        <span className={iconStyles}>{Icon}</span>
      )}
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        disabled={disabled || loading ? true : false}
        required={required}
        onChange={onChange}
        onFocus={onFocus}
        readOnly={readonly}
        onBlur={onBlur}
        autoComplete={autoComplete}
      />
      {iconPosition === "right" && Icon && (
        <span className={iconStyles}>{Icon}</span>
      )}
    </div>
  );
};

export default Input;
