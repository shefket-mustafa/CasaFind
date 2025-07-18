import * as yup from "yup";

const numberField = (label: string) =>
  yup
    .number()
    .transform((value, originalValue) => originalValue === "" ? undefined : value)
    .typeError(`${label} must be a number`)
    .required(`${label} is required`);

export const listingSchema = yup.object().shape({
  title: yup.string().required("Title is required!"),
  image: yup
    .string()
    .url("Must be a valid URL")
    .required("Image URL is required"),
  category: yup
    .string()
    .oneOf(["house", "apartment"])
    .required("Category is required"),
  bathrooms: numberField("Bathrooms").min(1),
  bedrooms: numberField("Bedrooms").min(1),
  sqft: numberField("Square feet").min(30),
  yearBuilt: numberField("Year built").min(1900),
  price: numberField("Price").positive(),
  address: yup.string().min(5).required("Address required"),
});
