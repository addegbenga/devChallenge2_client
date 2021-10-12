import React from "react";
import { useField } from "formik";
// import "./index.css";

export const MyTextInput = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input>. We can use field meta to show an error
  // message if the field is invalid and it has been touched (i.e. visited)
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input
        // style={{
        //   borderColor:
        //     meta.touched && meta.error
        //       ? "red"
        //       : !meta.error && meta.touched
        //       ? "green"
        //       : "",
        // }}
        className="text-input"
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <div className="error pt-2 text-red-500 text-xs">{meta.error}</div>
      ) : null}
    </>
  );
};

export const MytextArea = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <textarea {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error pt-2 text-red-500 text-xs">{meta.error}</div>
      ) : null}
    </>
  );
};
