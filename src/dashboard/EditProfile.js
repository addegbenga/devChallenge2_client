import React from "react";
import Nav from "../nav/Navbar";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { IoChevronBackSharp } from "react-icons/io5";
import { editUser } from "../actions/authAction";
import { Formik, Form } from "formik";
import { BsFillCameraFill } from "react-icons/bs";
import * as Yup from "yup";
import { MyTextInput, MytextArea } from "../form/myForm";
export default function EditProfile() {
  const loading = useSelector((state) => state.auth.apiloading);
  const history = useHistory();
  const userDetails = useSelector((state) => state.auth.user);

  const dispatch = useDispatch();
  var loadFile = function (event, props) {
    var reader = new FileReader();
    reader.onload = function () {
      var output = document.getElementById("output");
      output.src = reader.result;
    };
    reader.readAsDataURL(event.target.files[0]);
    props.setFieldValue("image", event.currentTarget.files[0]);
  };

  const rebuildData = (values, prop) => {
    let formData = new FormData();
    formData.append("name", values.name);
    formData.append("email", values.email);
    formData.append("password", values.password);
    formData.append("bio", values.bio);
    formData.append("image", values.image);
    return formData;
  };
  return (
    <div>
      <Nav />
      <div className="mt-20 p-4 md:w-3/5 md:m-auto md:mt-20 ">
        <div className="flex items-center mb-4 text-blue-500">
          <IoChevronBackSharp />
          <button onClick={() => history.goBack()} className="pl-1  text-sm">
            Back
          </button>
        </div>
        <div className="md:border md:p-8 md:rounded-lg">
          <div className="flex flex-col justify-center items-center md:block mb-7 border-b md:border-0">
            <h1 className="text-xl p-3  mb-2">Change Info</h1>
            <p style={{ color: "#828282" }} className="text-sm pb-2">
              Changes will be reflected to every services
            </p>
          </div>

          <Formik
            initialValues={{
              email: userDetails.email,
              password: "",
              bio: userDetails.bio,
              phone: userDetails.phone,
              name: userDetails.name,
              image: "",
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
              console.log(values);
              const data = rebuildData(values);

              dispatch(editUser(data));
            }}
          >
            {(props) => (
              <Form>
                <div
                  className="custom-file-upload relative w-48 md:w-1/3"
                >
                  <label>
                    <input
                      style={{ display: "none" }}
                      type="file"
                      name="image"
                      accept=".png, .jpg, .jpeg"
                      className="w-10 absolute"
                      id="image"
                      onChange={(e) => loadFile(e, props)}
                      autoComplete="true"
                    />
                    <div className="flex items-center justify-between pb-5 ">
                      <div className="relative">
                        {userDetails && (
                          <img
                            src={userDetails.avatarUrl}
                            id="output"
                            className="h-20 w-20 cursor-pointer rounded-lg"
                            alt="avatar"
                          />
                        )}

                        <div
                          style={{ top: "27px", left: "25px" }}
                          className="absolute cursor-pointer"
                        >
                          <BsFillCameraFill color="white" size={29} />
                        </div>
                      </div>
                      <p
                        style={{ color: "#828282" }}
                        className="text-sm ml-5 cursor-pointer"
                      >
                        Change photo
                      </p>
                    </div>
                  </label>
                </div>
                <div className="grid mb-6">
                  <label className="text-sm mb-1.5" htmlFor="name">
                    Name
                  </label>
                  <MyTextInput
                    style={{ fontSize: "13px" }}
                    className="border p-3.5 rounded"
                    placeholder="Enter your name"
                    type="text"
                    id="name"
                    autoComplete="true"
                    name="name"
                  />
                </div>
                <div className="grid mb-6">
                  <label className="text-sm  mb-1.5" htmlFor="bio">
                    Bio
                  </label>
                  <MytextArea
                    style={{ fontSize: "13px" }}
                    className="border p-3.5  rounded"
                    placeholder="Enter your bio"
                    rows="7"
                    type="text"
                    id="bio"
                    name="bio"
                  />
                </div>
                <div className="grid mb-6">
                  <label className="text-sm  mb-1.5" htmlFor="phone">
                    Phone
                  </label>
                  <MyTextInput
                    style={{ fontSize: "13px" }}
                    placeholder="Enter your number"
                    className="p-3.5 border rounded"
                    type="number"
                    autoComplete="true"
                    id="phone"
                    name="phone"
                  />
                </div>
                <div className="grid mb-6">
                  <label className="text-sm  mb-1.5" htmlFor="email">
                    Email
                  </label>
                  <MyTextInput
                    autoComplete="true"
                    style={{ fontSize: "13px" }}
                    className="p-3.5 border rounded"
                    placeholder="Enter your email"
                    type="email"
                    id="email"
                    name="email"
                  />
                </div>
                <div className="grid mb-6 md-mb-0">
                  <label className="text-sm  mb-1.5" htmlFor="password">
                    password
                  </label>
                  <MyTextInput
                    autoComplete="true"
                    style={{ fontSize: "13px" }}
                    className="p-3.5 border rounded "
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
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}
