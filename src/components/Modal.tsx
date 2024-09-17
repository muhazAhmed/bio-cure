"use client";
import React, { FC, MouseEvent } from "react";
import { ModalProps } from "./props";
import { closeModal } from "@/redux/slices/modalSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";

const Modal: FC<ModalProps> = ({ children, className, id, style }) => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state: RootState) => state.modal.isOpen);

  const handleOutsideClick = (e: MouseEvent<HTMLDivElement>) => {
    if ((e.target as Element).classList.contains("bg-blur")) {
      dispatch(closeModal());
    }
  };
  if (!isOpen) return null;

  return (
    <div className="bg-blur" onClick={handleOutsideClick}>
      <div
        className={`custom-modal bg-slate-300 p-2 h-96 w-96 rounded-xl ${className}`}
        style={style}
        id={id}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
