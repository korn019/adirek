import axios from "axios";
import React from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import { Input, SelectForm } from "../components/Input";

// import "./styles.css";

function Form() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    axios
      .post("http://localhost:3000/api/instructors/contact", data)
      .then(function (response) {
      
        if (response.status === 200) {
          console.log('success');
        }
      }).catch(function (error) {
        console.log(error)
  }); 
}
console.log(watch("firstName")); 
  return (
    <section className="bg-red-300">
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      {/* <input defaultValue="test" {...register("test")} /> */}

      {/* include validation with required or other standard HTML validation rules */}
      {/* <input defaultValue="firstName"  {...register("firstName", { required: true })} />
      <input {...register("lastName", { required: true })} />
      <input {...register("email", { required: true })} />
      <input {...register("tel", { required: true })} /> */}
      <Input  label="firstName" register={register} required/>
      <Input  label="lastName" register={register} required/>
      <Input  label="email" register={register} required/>
      {/* <Input  label="tel" register={register} required/> */}
      <SelectForm label="tel" register={register}/>
      {/* errors will return when field validation fails  */}


      {errors.firstName && <p className="text-white">This field is required</p>}
      <input type="submit" />
    </form>
    </section>
  );
}
export default Form

