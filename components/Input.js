import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

export const Input = ({ label, register, required, placeholder }) => {
  const { formState: { errors } } = useForm();
  return (
    <>
      <div>
        <label className="text-sm !font-semibold px-1 subtext-Athiti ">
          {placeholder}
        </label>
        <input
          {...register(label, {  required: true })}
          placeholder={placeholder}
          className=" subtext-Athiti  w-full p-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
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
}) => {
  return (
    <>
      <select {...register(label)} onChange={onChange}>
        {getCategory.map((item, index) => {
          return (
            <>
              <option value={item.filter_id}>
                {item.filter_category_course}
              </option>
            </>
          );
        })}
      </select>
    </>
  );
};
