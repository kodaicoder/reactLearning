import React from "react";
import classes from "./checkout.module.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { checkOutSchema } from "../../../schemas/checkoutSchema";
import Lottie from "lottie-react";
import loadingAnimationBtn from "../../../assets/lotties/loadingAnimation_btn.json";

// import { useFormik } from "formik";
/// ==== FORMIK ==== ///
//#region formik
// export const Checkout = (props) => {
//   const formik = useFormik({
//     initialValues: {
//       name: "",
//       street: "",
//       postal: "",
//       city: "",
//     },
//     validationSchema: checkOutSchema,
//     onSubmit: (values) => {
//       props.submitCheckout(values);
//     },
//   });

//   return (
//     <form onSubmit={formik.handleSubmit}>
//       <div
//         className={
//           formik.errors.name && formik.touched.name
//             ? `${classes["control"]} ${classes["invalid"]}`
//             : classes["control"]
//         }
//       >
//         <label htmlFor="name">Your Full Name</label>
//         <input
//           type="text"
//           name="name"
//           id="name"
//           onChange={formik.handleChange}
//           onBlur={formik.handleBlur}
//           value={formik.values.name}
//         />
//         {formik.errors.name && formik.touched.name ? (
//           <label>{formik.errors.name}</label>
//         ) : null}
//       </div>

//       <div
//         className={
//           formik.errors.street && formik.touched.street
//             ? `${classes["control"]} ${classes["invalid"]}`
//             : classes["control"]
//         }
//       >
//         <label htmlFor="street">Street</label>
//         <input
//           type="text"
//           name="street"
//           id="street"
//           onChange={formik.handleChange}
//           onBlur={formik.handleBlur}
//           value={formik.values.street}
//         />
//         {formik.errors.street && formik.touched.street ? (
//           <label>{formik.errors.street}</label>
//         ) : null}
//       </div>

//       <div
//         className={
//           formik.errors.postal && formik.touched.postal
//             ? `${classes["control"]} ${classes["invalid"]}`
//             : classes["control"]
//         }
//       >
//         <label htmlFor="postal">Postal Code</label>
//         <input
//           type="text"
//           name="postal"
//           id="postal"
//           onChange={formik.handleChange}
//           onBlur={formik.handleBlur}
//           value={formik.values.postal}
//         />
//         {formik.errors.postal && formik.touched.postal ? (
//           <label>{formik.errors.postal}</label>
//         ) : null}
//       </div>

//       <div
//         className={
//           formik.errors.city && formik.touched.city
//             ? `${classes["control"]} ${classes["invalid"]}`
//             : classes["control"]
//         }
//       >
//         <label htmlFor="city">City</label>
//         <input
//           type="text"
//           name="city"
//           id="city"
//           onChange={formik.handleChange}
//           onBlur={formik.handleBlur}
//           value={formik.values.city}
//         />
//         {formik.errors.city && formik.touched.city ? (
//           <label>{formik.errors.city}</label>
//         ) : null}
//       </div>

//       <div className={classes["actions"]}>
//         <button type="button" onClick={props.onCancel}>
//           Cancel
//         </button>
//         <button
//           type="submit"
//           disabled={
//             !formik.dirty ||
//             !formik.isValid ||
//             !Object.keys(formik.errors).length === 0
//           }
//         >
//           Confirm
//         </button>
//       </div>
//     </form>
//   );
// };
//#endregion
/// ==== END--FORMIK ==== ///

/// ==== React-Hook-Form ==== ///
//#region React-Hook-Form
export const Checkout = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "all",
    reValidateMode: "onChange",
    resolver: yupResolver(checkOutSchema),
  });
  const onSubmitCheckout = (values) => {
    props.submitCheckout(values);
  };

  return (
    <form onSubmit={handleSubmit(onSubmitCheckout)}>
      <div
        className={
          errors.name
            ? `${classes["control"]} ${classes["invalid"]}`
            : classes["control"]
        }
      >
        <label htmlFor="name">Your Full Name</label>
        <input {...register("name")} />
        {errors.name && <p>{errors.name.message}</p>}
      </div>
      <div
        className={
          errors.street
            ? `${classes["control"]} ${classes["invalid"]}`
            : classes["control"]
        }
      >
        <label htmlFor="street">Street</label>
        <input {...register("street")} />
        {errors.street && <p>{errors.street.message}</p>}
      </div>
      <div
        className={
          errors.postal
            ? `${classes["control"]} ${classes["invalid"]}`
            : classes["control"]
        }
      >
        <label htmlFor="postal">Postal Code</label>
        <input {...register("postal")} />
        {errors.postal && <p>{errors.postal.message}</p>}
      </div>
      <div
        className={
          errors.city
            ? `${classes["control"]} ${classes["invalid"]}`
            : classes["control"]
        }
      >
        <label htmlFor="city">City</label>
        <input {...register("city")} />
        {errors.city && <p>{errors.city.message}</p>}
      </div>
      <div className={classes["actions"]}>
        <button
          type="button"
          onClick={props.onCancel}
          disabled={props.isSubmitting}
        >
          Close
        </button>
        <button type="submit" disabled={!isValid || props.isSubmitting}>
          {props.isSubmitting ? (
            <Lottie
              animationData={loadingAnimationBtn}
              style={{ width: "56px", height: "14px", margin: "auto" }}
            />
          ) : (
            "Confirm"
          )}
        </button>
      </div>
    </form>
  );
};
//#endregion
/// ==== END--React-Hook-Form ==== ///
