import {useForm} from "react-hook-form"
import {ErrorMessage} from "@hookform/error-message"

export const Input = ({label, register, required, placeholder,type}) => {
  const {
    formState: {errors},
  } = useForm()
  return (
    <>
      <div>
        <label className="text-sm !font-semibold px-1 subtext-Athiti ">{placeholder}</label>
        <input
          {...register(label, {required})}
          type={type}
          placeholder={placeholder}
          className=" subtext-Athiti !text-base !font-medium  !text-gray-700 bg-white px-3 py-1.5 bg-clip-padding rounded border-2  border-gray-200 outline-none focus:border-indigo-500  transition ease-in-out m-0
        focus:!text-gray-700 focus:bg-white  focus:outline-none  block "
        />
      </div>
    </>
  )
}
export const SelectForm = ({onChange, name, label, value, register, getCategory}) => {
  return (
    <>
      <select {...register(label)} onChange={onChange}>
        {getCategory.map((item, index) => {
          return (
            <>
              <option value={item.filter_id}>{item.filter_category_course}</option>
            </>
          )
        })}
      </select>
    </>
  )
}
