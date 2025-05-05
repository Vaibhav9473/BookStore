import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import toast from 'react-hot-toast';
import Login from './Login';

function Signup() {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await axios.post("http://localhost:4001/user/signup", data);
      toast.success("Signup successful!");
      navigate(from, { replace: true });
    } catch (err) {
      toast.error(err.response?.data?.message || "Signup failed");
    }
  };

  return (
    <>
      <h1 className="text-red-700 text-2xl font-bold text-center mt-6 dark:text-white">
        Attention: You will be able to access the course section only after logging in.
      </h1>
      <div className="flex h-screen items-center justify-center">
        <div id="my_modal_3" className="border shadow-md">
          <div className="dark:bg-slate-900 dark:text-white">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
              <h3 className="font-bold text-lg mt-4 ml-4">Signup</h3>

              <div className="mt-4 space-y-2 ml-4">
                <span>Name:</span><br />
                <input type="text" placeholder="Enter your Full Name" className="w-80 px-3 border rounded-md mr-2 dark:bg-slate-900 dark:text-white" {...register("fullname", { required: true })} /><br />
                {errors.fullname && (<span className="text-sm text-red-500">This field is required</span>)}
              </div>

              <div className="mt-4 space-y-2 ml-4">
                <span>Email:</span><br />
                <input type="email" placeholder="Enter your email" className="w-80 px-3 border rounded-md mr-2 dark:bg-slate-900 dark:text-white" {...register("email", { required: true })} /><br />
                {errors.email && (<span className="text-sm text-red-500">This field is required</span>)}
              </div>

              <div className="mt-4 space-y-2 ml-4">
                <span>Password:</span><br />
                <input type="password" placeholder="Enter your password" className="w-80 px-3 border rounded-md mr-2 dark:bg-slate-900 dark:text-white" {...register("password", { required: true })} /><br />
                {errors.password && (<span className="text-sm text-red-500">This field is required</span>)}
              </div>

              <div className="flex justify-around mt-4">
                <button type="submit" className="bg-green-600 text-white rounded-md px-3 py-1 hover:bg-green-800 duration-300 mb-2">
                  Signup
                </button>
              </div>

              <p className="text-center mt-4">
                Have account?{" "}
                <Link to="/">
                  <button className="underline text-blue-600 cursor-pointer" onClick={() => document.getElementById("my_modal_3").showModal()}>
                    Login
                  </button>
                </Link>
                <Login />
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
