import React from "react";
import Navbar from "../nav/Navbar";
import { Link } from "react-router-dom";
import avatar from "../assets/avatar.jpg";
import { useSelector } from "react-redux";
export default function Profile() {
  const userDetails = useSelector((state) => state.auth.user);
  return (
    <div>
      <Navbar />
      <div className=" md:w-3/5 md:m-auto mt-32 md:mt-32">
        <div className="mt-7 flex flex-col items-center">
          <h1 className="text-xl mb-2">Personal info</h1>
          <p style={{ color: "#828282" }}>
            Basic info, like your name and photo
          </p>
        </div>
        <div className="md:border rounded-lg mt-10  ">
          <div className="flex justify-between md:border-b mb-10 md:mb-2 px-3 md:py-4 items-center md:px-8 ">
            <div className="flex flex-col ">
              <h1 className="text-xl">Profile</h1>
              <p
                style={{ color: "#828282" }}
                className="text-sm w-40 md:w-full"
              >
                Some info may be visible to other people
              </p>
            </div>
            <button
              style={{ color: "#828282" }}
              className=" px-5 md:px-8 md:py-2 py-1 border rounded text-sm"
            >
              <Link to="/edit"> Edit</Link>
            </button>
          </div>
          <div className="md:h-80 md:overflow-y-scroll">
            <div className="flex justify-between items-center border-b pb-2 px-3 md:px-8 ">
              <h2 style={{ color: "#828282", fontSize: "13px" }}>PHOTO</h2>
              <img src={avatar} className="h-20 w-20 rounded-lg" alt="avt" />
            </div>
            <div className="flex py-6 border-b justify-between px-3 md:px-8  ">
              <h2 style={{ color: "#828282", fontSize: "13px" }}>NAME</h2>
              {userDetails ? (
                <p className="text-sm"> {userDetails.name}</p>
              ) : (
                <p className="text-sm"> Add a name</p>
              )}
            </div>
            <div className="flex border-b py-6 justify-between px-3 md:px-8 ">
              <h2 style={{ color: "#828282", fontSize: "13px" }}>BIO</h2>
              {userDetails ? (
                <p className="text-sm truncate">{userDetails.bio}</p>
              ) : (
                <p className="text-sm truncate">
                  write a short descriptive bio about your self
                </p>
              )}
            </div>
            <div className="flex py-6 justify-between border-b px-3 md:px-8 ">
              <h2 style={{ color: "#828282", fontSize: "13px" }}>EMAIL</h2>
              {userDetails ? (
                <p className="text-sm">{userDetails.email}</p>
              ) : null}
            </div>
            <div className="flex py-6 justify-between border-b px-3 md:px-8 ">
              <h2 style={{ color: "#828282", fontSize: "13px" }}>PASSWORD</h2>
              <p className="text-sm">*************</p>
            </div>
          </div>
        </div>
      </div>{" "}
    </div>
  );
}
