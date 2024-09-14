import React, { FC } from "react";
import { ButtonProps } from "./props";
import { motion } from "framer-motion";
import Link from "next/link";

const Button: FC<ButtonProps> = ({
  label,
  onClick,
  initial,
  transition,
  animate,
  whileHover,
  className,
  disabled = false,
  type,
  variant = "primary",
  style,
  id,
  href,
  Icon,
  iconPosition = "left",
  iconStyles,
}) => {
  return (
    <motion.div
      initial={initial}
      animate={animate}
      whileHover={whileHover}
      transition={transition}
      className={`${className} ${variant} z-10 flex items-center gap-2`}
      id={id}
      style={style}
      onClick={onClick}
    >
      {href ? (
        <Link href={href}>
          {iconPosition === "left" && Icon && (
            <span className={iconStyles}>{Icon}</span>
          )}
          <button disabled={disabled} type={type}>
            {label}
          </button>
          {iconPosition === "right" && Icon && (
            <span className={iconStyles}>{Icon}</span>
          )}
        </Link>
      ) : (
        <>
          {iconPosition === "left" && Icon && (
            <span className={iconStyles}>{Icon}</span>
          )}
          <button disabled={disabled} type={type}>
            {label}
          </button>
          {iconPosition === "right" && Icon && (
            <span className={iconStyles}>{Icon}</span>
          )}
        </>
      )}
    </motion.div>
  );
};

export default Button;
