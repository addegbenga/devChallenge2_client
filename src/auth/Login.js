import React from "react";
import logo from "../assets/logo.svg";
import { Link, Redirect } from "react-router-dom";
import Google from "./GoogleLogin";
import { AiFillFacebook, AiOutlineTwitter, AiFillGithub } from "react-icons/ai";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { MyTextInput } from "../form/myForm";
import { loginUser } from "../actions/authAction";
import { useDispatch, useSelector } from "react-redux";
import { MdEmail, MdLock } from "react-icons/md";
import { CLEAR_ALERT } from "../actions/types";
export default function Login() {
  const loading = useSelector((state) => state.auth.apiloading);
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  const error = useSelector((state) => state.auth.error);
  const dispatch = useDispatch();

  if (isAuth) {
    return <Redirect to="/profile" />;
  }

  return (
    <div className="flex justify-center p-5 md:items-center min-h-screen">
      <div className="md:border w-full md:rounded-lg md:w-1/2 md:p-9">
        {error && (
          <div
            className="w-full mb-2 flex text-sm items-center justify-between bg-red-100 p-2 border-red-400 text-red-700 "
            role="alert"
          >
            <span> {error} </span>
            <button
              onClick={() => dispatch({ type: CLEAR_ALERT })}
              className="font-semibold"
            >
              X
            </button>
          </div>
        )}
        <div className="flex mb-6">
          <img src={logo} alt="logo" />
        </div>

        <h1 className="mb-6 mt-24">Login to your Account</h1>
        <div>
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validationSchema={Yup.object({
              email: Yup.string()
                .email("Invalid email address")
                .required("Required"),
              password: Yup.string()
                .max(20, "Must be 20 characters or less")
                .required("Required"),
            })}
            onSubmit={(values, actions) => {
              const data = {
                email: values.email,
                password: values.password,
              };
              dispatch(loginUser(data));
              actions.resetForm();
            }}
          >
            <Form>
              <div className="grid relative">
                <MyTextInput
                  name="email"
                  type="email"
                  placeholder="Email"
                  className="border p-3.5 pl-8 text-sm rounded"
                />
                <div className="absolute top-4 left-2">
                  <MdEmail size={18} color="#828282" />
                </div>
              </div>
              <div className="grid my-5 relative">
                <MyTextInput
                  type="password"
                  placeholder="Password"
                  name="password"
                  className="border  p-3.5 pl-8 text-sm rounded"
                />
                <div className="absolute top-3.5 left-2">
                  <MdLock size={18}  color="#828282" />
                </div>
              </div>
              {loading ? (
                <button className="w-full text-white text-sm font-semibold p-3 rounded mb-5  bg-blue-500">
                  Loading...
                </button>
              ) : (
                <button className="w-full text-white text-sm font-semibold p-3 rounded mb-5  bg-blue-500">
                  Login
                </button>
              )}

              <p style={{ color: "#828282" }} className="text-xs text-center">
                or continue with these social profile
              </p>
              <div className="flex mt-5 justify-center">
                <Google />
                <div className="p-2 border mr-3 rounded-full">
                  <AiFillFacebook size={20} color="#828282" />
                </div>
                <div className="p-2 border mr-3 rounded-full">
                  <AiOutlineTwitter size={20} color="#828282" />
                </div>

                <div className="p-2 border rounded-full">
                  <AiFillGithub size={20} color="#828282" />
                </div>
              </div>
              <div className="mt-5 text-center">
                <p className="text-xs" style={{ color: "#828282" }}>
                  Dont have an account yet?{" "}
                  <span className="text-blue-500">
                    <Link to="/">Register</Link>
                  </span>
                </p>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
}
