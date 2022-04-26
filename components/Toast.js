import React, {useState} from "react"
import {Dialog, Listbox, Transition} from "@headlessui/react"
import {Toaster, toast, resolveValue} from "react-hot-toast"
import {AiOutlineClose} from "react-icons/ai"
const Toast = ({t, bgColor}) => {
  const closeModal = () => {
    toast.dismiss()
  }
  return (
    <Toaster>
      {(t) => (
        <Transition
          appear
          show={t.visible}
          position="top-left"
          className={`transform p-10 rounded shadow-md ${bgColor} opacity-90 text-white text-Athiti !font-semibold  absolute top-28 right-0`}
          enter="transition-all duration-150"
          enterFrom="opacity-0 scale-50"
          enterTo="opacity-100 scale-100"
          leave="transition-all duration-150"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-75">
          <div className="flex text-right items-end justify-end pb-4">
            <div className="!text-white cursor-pointer" onClick={closeModal}>
              <p className="text-sm !text-white">
                <AiOutlineClose className="!text-white text-3xl font-bold" color="white" />
              </p>
            </div>
          </div>
          <p className="text-Athiti !font-semibold !text-white">{resolveValue(t.message)}</p>
        </Transition>
      )}
    </Toaster>
  )
}
export default Toast
