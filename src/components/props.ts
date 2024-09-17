import { ReactElement } from "react";

interface ButtonProps {
    label: string;
    onClick?: () => void;
    className?: string;
    disabled?: boolean;
    type?: "button" | "submit" | "reset";
    loading?: boolean;
    variant?: "primary" | "ghost" | "danger" | "plain"
    style?: React.CSSProperties
    id?: any;
    initial?: any
    animate?: any
    transition?: any
    whileHover?: any
    href?: string
    Icon?: ReactElement
    iconPosition?: "left" | "right"
    iconStyles?: string
}

interface ModalProps {
    children: React.ReactNode;
    className?: string;
    id?: any;
    style?: React.CSSProperties
}

interface InputProps {
    type?: "text" | "email" | "password" | "number";
    name: string;
    id?: string;
    placeholder: string;
    className?: string;
    style?: React.CSSProperties
    variant?: "primaryInp" | "plainInp" | "dangerInp"
    value?: any
    disabled?: boolean
    loading?: boolean
    Icon?: ReactElement
    iconPosition?: "left" | "right"
    iconStyles?: string
    required?: boolean
    onChange?: any
    onBlur?: any
    onFocus?: any
    readonly?: boolean
    min?: number
    max?: number
    autoComplete?: "on" | "off"
}

export type { ButtonProps, ModalProps, InputProps }