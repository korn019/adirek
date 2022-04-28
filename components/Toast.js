import React, {useState} from "react"
import {Dialog, Listbox, Transition} from "@headlessui/react"
import {ToastContainer, toast, Slide} from "react-toastify"
import {AiOutlineClose} from "react-icons/ai"
const Toast = ({t, bgColor}) => {
  const closeModal = () => {
    toast.dismiss()
  }
  return (
   
    <ToastContainer
      bodyClassName="!font-semibold text-Athiti !text-[20px]"
      // toastClassName={`${bgColor}`}
      draggablePercent={60}
      position="top-right"
      autoClose={2000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      // transition={Slide}
    />
  )
}
export default Toast
