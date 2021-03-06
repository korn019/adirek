import {useForm} from "react-hook-form"
import {ErrorMessage} from "@hookform/error-message"
import { useState } from "react"

export const Input = ({inputName, label, register, required, placeholder, type, defaultValue}) => {
  const {
    formState: {errors},
  } = useForm()
    const [focused, setFocused] = useState(null)
  return (
    <>
      <div className="relative overflow-hidden">
        <label className="text-sm  !font-semibold px-1 subtext-Athiti ">{placeholder}</label>
        <input
          {...register(label, {required})}
          type={type}
          defaultValue={defaultValue}
          placeholder={inputName}
          className="form-input w-full border py-2 px-2 border-b-2 border-gray-300 bg-white bg-opacity-80 placeholder-gray-400 focus:border-gray-300 focus:ring-0"
          onFocus={() => setFocused(1)}
          onBlur={() => setFocused(null)}
        />
        <span
          className={`absolute bottom-0 left-0 h-0.5 bg-yellow-500 transition-all duration-300 ease-in transform ${
            focused === 1 ? "w-7/12" : "w-0"
          }`}
        />{" "}
        {/* left side */}
        <span
          className={`absolute bottom-0 right-0 h-0.5 bg-yellow-500 transition-all duration-300 ease-in transform ${
            focused === 1 ? "w-7/12" : "w-0"
          }`}
        />{" "}
        {/* right side */}
      </div>
    </>
  )
}
export const Inputtextarea = ({inputName, label, register, required, placeholder, type, defaultValue}) => {
  const {
    formState: {errors},
  } = useForm()
  return (
    <>
      <div className="">
        <label className="text-sm !font-semibold px-1 subtext-Athiti ">{placeholder}</label>
        <textarea
          {...register(label, {required})}
          type={type}
          defaultValue={defaultValue}
          placeholder={inputName}
          className=" subtext-Athiti !text-base !font-medium  !text-gray-700 bg-white w-full h-20 px-3 py-1.5 bg-clip-padding rounded border-2  border-gray-200 outline-none focus:border-indigo-500  transition ease-in-out m-0
        focus:!text-gray-700 focus:bg-white  focus:outline-none  block "
        />
      </div>
    </>
  )
}
export const SelectForm = ({
  onChange,
  name,
  label,
  value,
  register,
  getCategory,
  placeholder,
  defaultValue,
}) => {
  return (
    <>
      <label
        className=" !font-semibold px-1 subtext-Athiti block   text-gray-700 text-sm mb-2"
        for="grid-state">
        {placeholder}
      </label>
      <select {...register(label)} onChange={onChange} defaultValue={defaultValue}>
        {getCategory.map((item, index) => {
          return (
            <>
              <option value={item.filter_id} >
                {item.filter_category_course}
              </option>
            </>
          )
        })}
      </select>
    </>
  )
}
export const SelectType = ({onChange, name, label, value, register, getCategory, placeholder,defaultValue}) => {
  return (
    <>
      <label
        className=" !font-semibold px-1 subtext-Athiti block   text-gray-700 text-sm mb-2"
        for="grid-state">
        {placeholder}
      </label>
      <div className="relative mb-2">
        <select
          {...register(label)}
          onChange={onChange}
          defaultValue={defaultValue}
          className="text-Athiti !text-md !font-medium  block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-2 px-3 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="grid-state">
          <option value="student" className="text-Athiti !text-md">
            ????????????????????????
          </option>
          <option value="instructor" className="text-Athiti !text-md">
            ??????????????????
          </option>
          <option value="institute" className="text-Athiti !text-md">
            ??????????????????
          </option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg
            className="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20">
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </div>
      </div>
    </>
  )
}

export const SelectVaccine = ({
  onChange,
  name,
  label,
  value,
  register,
  getCategory,
  placeholder,
  defaultValue
}) => {
  return (
    <>
      <div>
        <label
          className=" !font-semibold px-1 subtext-Athiti block   text-gray-700 text-sm "
          for="grid-state">
          {placeholder}
        </label>
        <div className="relative">
          <select
            {...register(label)}
            onChange={onChange}
            defaultValue={defaultValue}
            className="subtext-Athiti !text-base !font-medium  block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-2 px-2 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-state">
            <option value="????????????????????????????????????????????????">????????????????????????????????????????????????</option>
            <option value="??????????????????????????????????????????????????????">??????????????????????????????????????????????????????</option>
          </select>
          <div className="pointer-events-none absolute  right-0 top-3 flex items-center justify-center px-1 text-gray-700">
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20">
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>
      </div>
    </>
  )
}
export const SelectTeach = ({onChange, name, label, value, register, getCategory, placeholder,defaultValue}) => {
  return (
    <>
      <div>
        <label
          className=" !font-semibold px-1 subtext-Athiti block   text-gray-700 text-sm "
          for="grid-state">
          {placeholder}
        </label>
        <div className="relative">
          <select
            {...register(label)}
            onChange={onChange}
            defaultValue={defaultValue}
            className="subtext-Athiti !text-base !font-medium  block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-2 px-2 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-state">
            <option value="????????????????????????????????????">????????????????????????????????????</option>
            <option value="?????????????????????????????????????????????">?????????????????????????????????????????????</option>
          </select>
          <div className="pointer-events-none absolute  right-0 top-3 flex items-center justify-center px-1 text-gray-700">
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20">
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>
      </div>
    </>
  )
}

export const SelectRangeAge = ({
  onChange,
  name,
  label,
  value,
  register,
  getCategory,
  placeholder,
  defaultValue
}) => {
  return (
    <>
      <div>
        <label
          className=" !font-semibold px-1 subtext-Athiti block   text-gray-700 text-sm "
          for="grid-state">
          {placeholder}
        </label>
        <div className="relative">
          <select
            {...register(label)}
            onChange={onChange}
            defaultValue={defaultValue}
            className="subtext-Athiti !text-base !font-medium  block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-2 px-2 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-state">
            <option value="1-10 ??????">1-10 ??????</option>
            <option value="11-20 ??????">11-20 ??????</option>
            <option value="21-30 ??????">21-30 ??????</option>
            <option value="31-40 ??????">31-40 ??????</option>
            <option value="41-50 ??????">41-50 ??????</option>
            <option value="51-60 ??????">51-60 ??????</option>
            <option value="61-70 ??????">61-70 ??????</option>
          </select>
          <div className="pointer-events-none absolute  right-0 top-3 flex items-center justify-center px-1 text-gray-700">
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20">
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>
      </div>
    </>
  )
}
