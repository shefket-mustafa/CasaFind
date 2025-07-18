    import * as yup from "yup";

    export const listingSchema = yup.object().shape({
        title: yup.string().required('Title is required!'),
        image: yup.string().url("Must be a valid URL").required("Image URL is required"),
        category: yup.string().oneOf(["house", "apartment"]).required("Category is required"),
        bathrooms: yup.number().min(1).required("Bathrooms required"),
        bedrooms: yup.number().min(1).required("Bedrooms required"),
        sqft: yup.number().min(30).required("Square feet required"),
        yearBuilt: yup.number().min(1900).required("Year built is required"),
        price: yup.number().positive().required("Price is required"),
        address: yup.string().min(5).required("Address required")
    })