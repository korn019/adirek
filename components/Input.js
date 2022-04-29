import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

export const Input = ({ label, register, required, placeholder, type }) => {
  const {
    formState: { errors },
  } = useForm();
  return (
    <>
      <div>
        <label className="text-sm !font-semibold px-1 subtext-Athiti ">
          {placeholder}
        </label>
        <input
          {...register(label, { required })}
          type={type}
          placeholder={placeholder}
          className=" subtext-Athiti !text-base !font-medium  !text-gray-700 bg-white px-3 py-1.5 bg-clip-padding rounded border-2  border-gray-200 outline-none focus:border-indigo-500  transition ease-in-out m-0
        focus:!text-gray-700 focus:bg-white  focus:outline-none  block "
        />
      </div>
    </>
  );
};
export const SelectForm = ({
  onChange,
  name,
  label,
  value,
  register,
  getCategory,
  placeholder,
}) => {
  return (
    <>
     <label className=" !font-semibold px-1 subtext-Athiti block   text-gray-700 text-sm mb-2" for="grid-state">
        {placeholder}
      </label>
      <select {...register(label)} onChange={onChange}>
        {getCategory.map((item, index) => {
          return (
            <>
              <option value={item.filter_id} defaultValue={item.filter_category_course}>
                {item.filter_category_course}
              </option>
            </>
          );
        })}
      </select>
    </>
  );
};
export const SelectType = ({
  onChange,
  name,
  label,
  value,
  register,
  getCategory,
  placeholder,
}) => {
  return (
    <>
      <label className=" !font-semibold px-1 subtext-Athiti block   text-gray-700 text-sm mb-2" for="grid-state">
        {placeholder}
      </label>
      <div className="relative">
        <select {...register(label)} onChange={onChange} className="subtext-Athiti !text-base !font-medium  block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
          <option value="student">ผู้เรียน</option>
          <option value="instructor">ผู้สอน</option>
        </select>
        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
          </div>
        </div>
    </>
  );
};
