import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  message: yup.string().min(10, "Message must be at least 10 characters"),
});

function FormPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
    alert("Form submitted successfully!");
  };

  return (
    <div className="p-6 max-w-2xl mx-auto bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-semibold text-center mb-8">Contact Us</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <input
            type="text"
            {...register("name")}
            placeholder="Name"
            className="border-2 border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full p-3 rounded-md shadow-sm transition"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-2">{errors.name.message}</p>
          )}
        </div>

        <div>
          <input
            type="email"
            {...register("email")}
            placeholder="Email"
            className="border-2 border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full p-3 rounded-md shadow-sm transition"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-2">{errors.email.message}</p>
          )}
        </div>

        <div>
          <textarea
            {...register("message")}
            placeholder="Message"
            className="border-2 border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full p-3 rounded-md shadow-sm transition"
          />
          {errors.message && (
            <p className="text-red-500 text-sm mt-2">
              {errors.message.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-blue-500 text-white rounded-md font-semibold hover:bg-blue-600 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default FormPage;
