import React, { useEffect } from 'react';
import { useAuth } from "../context/AuthProvider";
import { useNavigate, useLocation } from 'react-router-dom'; // 👈 useLocation added
import { useForm } from "react-hook-form";
import axios from 'axios';
import toast from "react-hot-toast";

function Login() {
  const [authUser, setAuthUser] = useAuth();
  const navigate = useNavigate();
  const location = useLocation(); // 👈 get previous location
  const from = location.state?.from || '/'; // 👈 fallback to home

  useEffect(() => {
    if (authUser) {
      navigate("/"); // if already logged in
    }
  }, [authUser, navigate]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  useEffect(() => {
    setValue("email", "");
    setValue("password", "");
  }, [setValue]);

  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };

    await axios
      .post("http://localhost:4001/user/login", userInfo)
      .then((res) => {
        if (res.data) {
          toast.success('Login Successfully');
          setAuthUser(res.data.user);
          localStorage.setItem("Users", JSON.stringify(res.data.user));
          navigate(from); // 👈 Go back to where user was before login
        }
      })
      .catch((err) => {
        if (err.response) {
          toast.error("Error: " + err.response.data.message);
        }
      });
  };

  return (
    <div>
      {!authUser && (
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box dark:bg-slate-900 dark:text-white">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              <button
                type="button"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                onClick={() => document.getElementById("my_modal_3").close()}
              >
                ✕
              </button>

              <h3 className="font-bold text-lg">Login</h3>

              <div className="mt-4 space-y-2">
                <span>Email:</span>
                <br />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-80 px-3 py-1 border rounded-md outline-none dark:bg-slate-900 dark:text-white"
                  {...register("email", { required: "Email is required" })}
                />
                {errors.email && (
                  <span className="text-sm text-red-500">{errors.email.message}</span>
                )}
              </div>

              <div className="mt-4 space-y-2">
                <span>Password:</span>
                <br />
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-80 px-3 py-1 border rounded-md outline-none dark:bg-slate-900 dark:text-white"
                  {...register("password", { required: "Password is required" })}
                />
                {errors.password && (
                  <span className="text-sm text-red-500">{errors.password.message}</span>
                )}
              </div>

              <div className="flex justify-around mt-4">
                <button className="bg-green-600 text-white rounded-md px-3 py-1 hover:bg-green-800 duration-300 mb-2">
                  Login
                </button>
                <p>
                  Not registered?{" "}
                  <a href="/signup" className="underline text-blue-600 cursor-pointer">
                    Signup
                  </a>
                </p>
              </div>
            </form>
          </div>
        </dialog>
      )}
    </div>
  );
}

export default Login;
