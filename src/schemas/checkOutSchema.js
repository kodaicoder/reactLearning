import * as Yup from "yup";
export const checkOutSchema = Yup.object().shape({
  name: Yup.string()
    .required("Name is required")
    .min(2, "Your name is too short.(> 1 Characters)")
    .max(200, "Your name is too long.(< 200 Characters)"),
  street: Yup.string()
    .required("Street name is required")
    .min(2, "Your street name is too short.(> 1 Character)")
    .max(100, "Your street name is too long.(< 100 Characters)"),
  postal: Yup.string()
    .required("Postal code is required")
    .min(2, "Your postal is too short.(> 1 Character)")
    .max(5, "Your postal is too long.(< 6 Characters)"),
  city: Yup.string()
    .required("City name is required")
    .min(2, "Your city name is too short.(>1 Characters)")
    .max(100, "Your city name is too long.(< 100 Characters)"),
});
