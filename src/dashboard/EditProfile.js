import React from "react";
import Nav from "../nav/Navbar";
import avatar from "../assets/avatar.jpg";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { IoChevronBackSharp } from "react-icons/io5";
import { editUser } from "../actions/authAction";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { MyTextInput, MytextArea } from "../form/myForm";
export default function EditProfile() {
  const loading = useSelector((state) => state.auth.apiloading);
  const history = useHistory();
  const dispatch = useDispatch();

  return (
    <div>
      <Nav />
      <div className="mt-20 p-4 md:w-3/5 md:m-auto md:mt-20 ">
        <div className="flex items-center mb-4 text-blue-500">
          <IoChevronBackSharp />
          <button onClick={() => history.goBack()} className="pl-1 text-sm">
            Back
          </button>
        </div>
        <div className="md:border md:p-8 md:rounded-lg">
          <div className="flex flex-col justify-center items-center md:block mb-7 border-b md:border-0">
            <h1 className="text-xl mb-2">Change Info</h1>
            <p style={{ color: "#828282" }} className="text-sm pb-2">
              Changes will be reflected to every services
            </p>
          </div>
          <div className="flex items-center pb-5">
            <img src={avatar} className="h-20 w-20 rounded-lg" alt="avat" />
            <p style={{ color: "#828282" }} className="text-sm ml-5">
              Change photo
            </p>
          </div>
          <Formik
            initialValues={{
              email: "",
              password: "",
              bio: "",
              phone: "",
              name: "",
            }}
            validationSchema={Yup.object({
              email: Yup.string()
                .email("Invalid email address")
                .required("Required"),
              password: Yup.string().max(50, "Must be 20 characters or less"),
              name: Yup.string().max(20, "Must be 20 characters or less"),
              bio: Yup.string().max(70, "Must be 100 characters or less"),
              phone: Yup.number(),
            })}
            onSubmit={(values, actions) => {
              const data = {
                email: values.email,
                password: values.password,
                bio: values.bio,
                phone: values.phone,
                name: values.name,
              };

              dispatch(editUser(data));
            }}
          >
            <Form>
              <div className="grid mb-4">
                <label className="text-sm" htmlFor="name">
                  Name
                </label>
                <MyTextInput
                  style={{ fontSize: "13px" }}
                  className="border p-2 rounded"
                  placeholder="Enter your name"
                  type="text"
                  id="name"
                  autoComplete="true"
                  name="name"
                />
              </div>
              <div className="grid mb-4">
                <label className="text-sm" htmlFor="bio">
                  Bio
                </label>
                <MytextArea
                  style={{ fontSize: "13px" }}
                  className="border p-2  rounded"
                  placeholder="Enter your bio"
                  rows="3"
                  type="text"
                  id="bio"
                  name="bio"
                />
              </div>
              <div className="grid mb-4">
                <label className="text-sm" htmlFor="phone">
                  Phone
                </label>
                <MyTextInput
                  style={{ fontSize: "13px" }}
                  placeholder="Enter your number"
                  className="p-2 border rounded"
                  type="number"
                  autoComplete="true"
                  id="phone"
                  name="phone"
                />
              </div>
              <div className="grid mb-4">
                <label className="text-sm" htmlFor="email">
                  Email
                </label>
                <MyTextInput
                  autoComplete="true"
                  style={{ fontSize: "13px" }}
                  className="p-2 border rounded"
                  placeholder="Enter your email"
                  type="email"
                  id="email"
                  name="email"
                />
              </div>
              <div className="grid">
                <label className="text-sm" htmlFor="password">
                  password
                </label>
                <MyTextInput
                  autoComplete="true"
                  style={{ fontSize: "13px" }}
                  className="p-2 border rounded "
                  placeholder="Enter your new password"
                  type="password"
                  id="password"
                  name="password"
                />
              </div>
              {loading ? (
                <button className="bg-blue-500 px-8 py-2 text-white text-sm rounded mt-4">
                  loading...
                </button>
              ) : (
                <button className="bg-blue-500 px-8 py-2 text-white text-sm rounded mt-4">
                  Save
                </button>
              )}
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
}
