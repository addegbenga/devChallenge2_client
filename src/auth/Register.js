import React from "react";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import { CLEAR_ALERT } from "../actions/types";
import Google from "./GoogleLogin";
import {
  AiFillFacebook,
  AiOutlineTwitter,
  AiFillGithub,
} from "react-icons/ai";
import { registerUser } from "../actions/authAction";
import { useDispatch, useSelector } from "react-redux";
import { MdEmail, MdLock } from "react-icons/md";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { MyTextInput } from "../form/myForm";

export default function Register() {
  const loading = useSelector((state) => state.auth.apiloading);
  const regMsg = useSelector((state) => state.auth.user);
  const error = useSelector((state) => state.auth.error);

  const dispatch = useDispatch();

  return (
    <div className="flex justify-center p-5 md:items-center min-h-screen">
      <div className="md:border md:rounded-lg  md:w-1/2 md:p-9">
        {regMsg && (
          <div
            className="bg-blue-100 mb-3 flex justify-between items-center border border-blue-500 text-blue-700 p-3 rounded"
            role="alert"
          >
            <p
              className="text-sm"
              onClick={() => dispatch({ type: CLEAR_ALERT })}
            >
              <Link to="/login">
                {regMsg.msg}
                <span className="lead font-bold"> Login now</span>
              </Link>
            </p>
          </div>
        )}
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
        <h1 className="mb-4 mt-20 text-lg ">
          Join thousands of learners from around the world
        </h1>
        <p style={{ color: "#333333" }} className="mb-5 text-gray-600 text-sm">
          Master web development by making real-life projects. There are
          multiple paths for you to choose
        </p>
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
            onSubmit={(values, { resetForm }) => {
              const data = {
                email: values.email,
                password: values.password,
              };
              dispatch(registerUser(data));
              resetForm({ values: "" });
            }}
          >
            <Form>
              <div className="grid relative">
                <MyTextInput
                  name="email"
                  type="email"
                  placeholder="Email"
                  required
                  className="border p-3.5 pl-8 text-sm rounded"
                />
                <div className="absolute top-4 left-2">
                  <MdEmail size={18} color="#828282" />
                </div>
              </div>
              <div className="grid relative my-6">
                <MyTextInput
                  name="password"
                  type="password"
                  placeholder="Password"
                  className="border p-3.5 pl-8 text-sm rounded"
                />
                <div className="absolute top-3.5 left-2">
                  <MdLock size={18} color="#828282" />
                </div>
              </div>
              {loading ? (
                <button className="w-full text-white text-sm font-semibold p-3 rounded mb-5  bg-blue-500">
                  loading
                </button>
              ) : (
                <button className="w-full text-white text-sm font-semibold p-3 rounded mb-5  bg-blue-500">
                  Start coding now
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
                  Already a member?{" "}
                  <span className="text-blue-500">
                    <Link to="/login">Login</Link>
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
