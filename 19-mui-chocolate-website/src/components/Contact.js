import { Box, Button, Container, TextField, Typography } from "@mui/material";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

function Contact() {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      phone: "",
      message: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("This is required"),
      lastName: Yup.string().required("This is required"),
      phone: Yup.string().required("This is required"),
      message: Yup.string().required("This is required"),
    }),
    onSubmit: (values) => {
      console.log("Form Submitted ", values);
    },
  });

  return (
    <Container>
      <Typography variant="h4" mt={6} mb={6}>
        Contact Us -
      </Typography>
      <Box component="form" onSubmit={formik.handleSubmit}>
        <TextField
          label="First Name"
          type="text"
          variant="outlined"
          sx={{ width: "300px", m: 1 }}
          name="firstName"
          onChange={formik.handleChange}
          error={Boolean(formik.errors.firstName)}
          helperText={formik.errors.firstName}
        />
        <TextField
          label="Last Name"
          type="text"
          variant="outlined"
          sx={{ width: "300px", m: 1 }}
          name="lastName"
          onChange={formik.handleChange}
          error={Boolean(formik.errors.lastName)}
          helperText={formik.errors.lastName}
        />
        <TextField
          label="Phone Number"
          type="number"
          variant="outlined"
          sx={{ width: "300px", m: 1 }}
          name="phone"
          onChange={formik.handleChange}
          error={Boolean(formik.errors.phone)}
          helperText={formik.errors.phone}
        />
        <TextField
          label="Phone Number"
          type="text"
          variant="outlined"
          multiline
          fullWidth
          rows={4}
          sx={{ m: 1 }}
          name="message"
          onChange={formik.handleChange}
          error={Boolean(formik.errors.message)}
          helperText={formik.errors.message}
        />
        <Button size="large" variant="contained" type="submit" sx={{ m: 1 }}>
          SEND
        </Button>
      </Box>
    </Container>
  );
}

export default Contact;
