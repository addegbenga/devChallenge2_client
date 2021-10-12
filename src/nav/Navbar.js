import React, { Fragment } from "react";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import { AiFillCaretDown } from "react-icons/ai";
import { HiUserCircle, HiUsers } from "react-icons/hi";
import { RiLoginBoxLine } from "react-icons/ri";
import avatar from "../assets/avatar.jpg";
import { Popover, Transition } from "@headlessui/react";
import { useDispatch } from "react-redux";
import { LOGOUT_USER } from "../actions/types";
export default function Navbar() {
  const dispatch = useDispatch();
  return (
    <div className="fixed w-full bg-white z-10 top-0 ">
      <div className="bg-white border-b py-6">
        <div className="flex justify-between w-11/12 m-auto">
          <img src={logo} alt="logo" />
          <div className="flex items-center relative">
            <Popover>
              {({ open }) => (
                <>
                  <Popover.Button className="ml-2 flex items-center  ">
                    <img
                      src={avatar}
                      className="w-6 h-6 rounded mr-1"
                      alt="avatar"
                    />
                    <div className="flex items-center hidden md:block">
                      <p className="text-xs">Xamarin star</p>
                    </div>
                    <div
                      className={`${
                        open
                          ? "hidden md:block transform rotate-180 transition duration-500"
                          : "hidden md:block transform rotate-360 transition duration-500"
                      }`}
                    >
                      <AiFillCaretDown />
                    </div>
                  </Popover.Button>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute  border  w-36 text-gray-700 top-10  rounded bg-white shadow-lg right-0 z-10">
                      <div className="flex flex-col ">
                        <div className="flex text-sm items-center rounded mt-3  mr-2 ml-2 p-2 hover:bg-gray-100 transition duration-500 ease-in-out  ">
                          <HiUserCircle size={22} />
                          <Link
                            to="/profile"
                            style={{ fontSize: "13px" }}
                            className="ml-1.5 "
                          >
                            My Profile
                          </Link>
                        </div>
                        <div className="flex text-sm  mb-1  p-2 ml-2 mr-2 items-center rounded  hover:bg-gray-100 transition duration-500 ease-in-out ">
                          <HiUsers size={19} />
                          <Link
                            to="/edit"
                            style={{ fontSize: "12px" }}
                            className="ml-1.5"
                          >
                            Edit profile
                          </Link>
                        </div>
                        <div className="flex text-sm text-red-500  mb-3 p-2 ml-2 mr-2 border-t items-center rounded hover:bg-gray-100 transition duration-500 ease-in-out   ">
                          <RiLoginBoxLine size={19} />
                          <button
                            style={{ fontSize: "12px" }}
                            className="ml-1.5"
                            onClick={() =>
                              dispatch({
                                type: LOGOUT_USER,
                              })
                            }
                          >
                            Logout
                          </button>
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
          </div>
        </div>
      </div>
    </div>
  );
}
