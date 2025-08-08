import React from "react";
import { useFormik } from "formik";

const Formik = () => {
  let formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validate: (values) => {
      let errors = {};

      if (values.firstname == "") {
        errors.firstname = "This field is required";
      } else if (values.firstname.length < 5) {
        errors.firstname = "Must be greater than 5 characters";
      }

      if (values.lastname == "") {
        errors.lastname = "This field is required";
      }

      if (values.email == "") {
        errors.email = "This field is required";
      }

      if (!values.password) {
        errors.password = "This field is required";
      } else if (values.password.length < 8) {
        errors.password = "Password must be at least 8 characters";
      } else if (!/[A-Z]/.test(values.password)) {
        errors.password = "Password must contain at least one uppercase letter";
      } else if (!/[0-9]/.test(values.password)) {
        errors.password = "Password must contain at least one number";
      } else if (!/[!@#$%^&*]/.test(values.password)) {
        errors.password =
          "Password must contain at least one special character";
      }

      return errors;
    },
  });
  console.log(formik.touched);

  return (
    <div className="mx-auto col-7 p-4 my-3 shadow border rounded-3">
      <h1>Formik Form</h1>
      <div>
        <form onSubmit={formik.handleSubmit}>
          <input
            type="text"
            placeholder="firstname"
            className={
              formik.touched.firstname && formik.errors.firstname
                ? "form-control mb-3 is-invalid"
                : "form-control my-2"
            }
            onChange={formik.handleChange}
            name="firstname"
            onBlur={formik.handleBlur}
          />
          {formik.touched.firstname ? (
            <small className="text-danger">{formik.errors.firstname}</small>
          ) : (
            ""
          )}
          <input
            type="text"
            placeholder="lastname"
            className={
              formik.touched.lastname && formik.errors.lastname
                ? "form-control mb-3 is-invalid"
                : "form-control my-2"
            }
            onChange={formik.handleChange}
            name="lastname"
            onBlur={formik.handleBlur}
          />
          {formik.touched.lastname ? (
            <small className="text-danger">{formik.errors.lastname}</small>
          ) : (
            ""
          )}
          <input
            type="text"
            placeholder="email"
            className={
              formik.touched.email && formik.errors.email
                ? "form-control mb-3 is-invalid"
                : "form-control my-2"
            }
            onChange={formik.handleChange}
            name="email"
            onBlur={formik.handleBlur}
          />
          {formik.touched.email ? (
            <small className="text-danger">{formik.errors.email}</small>
          ) : (
            ""
          )}
          <input
            type="text"
            placeholder="password"
            className={
              formik.touched.password && formik.errors.password
                ? "form-control mb-3 is-invalid"
                : "form-control my-2"
            }
            onChange={formik.handleChange}
            name="password"
            onBlur={formik.handleBlur}
          />
          {formik.touched.password ? (
            <small className="text-danger">{formik.errors.password}</small>
          ) : (
            ""
          )}
          <button type="submit" className="btn btn-success w-100 my-2">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Formik;