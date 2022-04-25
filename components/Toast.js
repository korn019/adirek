import React from "react";
import { Dialog, Listbox, Transition } from "@headlessui/react";
import { Toaster, toast, resolveValue } from "react-hot-toast";
const Toast = ({ t,bgColor }) => {
  return (
    <Toaster>
      {(t) => (
        
        <Transition
          appear
          show={t.visible}
          position="top-left"
          className={`transform p-10 rounded shadow-md ${bgColor} text-white text-Athiti !font-semibold  absolute top-28 right-0` }
          enter="transition-all duration-150"
          enterFrom="opacity-0 scale-50"
          enterTo="opacity-100 scale-100"
          leave="transition-all duration-150"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-75"
        >
          {resolveValue(t.message)}
        </Transition>
      )}
    </Toaster>
  );
};
export default Toast;
