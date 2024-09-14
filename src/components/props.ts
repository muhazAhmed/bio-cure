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

export type { ButtonProps }