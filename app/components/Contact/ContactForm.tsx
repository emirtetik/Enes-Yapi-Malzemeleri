'use client'
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import formSchema from './validationSchema/formSchema';
import ContactIcons from '../ContactIcons/ContactIcons';

interface formikValues {
  firstName: string;
  lastName: string;
  email: string;
  text: string;
}

const ContactForm = () => {
  const initialValues: formikValues = {
    firstName: '',
    lastName: '',
    email: '',
    text: '',
  };

  const onSubmit = (values: formikValues) => {

  };

  return (
     <>
     <ContactIcons/>
<section className=" body-font py-5 relative ">
  <div className="max-w-6xl px-5 py-6 mx-auto bg-gray-700 ">
   
    <div className="lg:w-1/2 md:w-2/3 mx-auto">
      <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={formSchema}>
        {({ handleSubmit, values, handleChange }) => (
          <Form  onSubmit={handleSubmit}>
       <div className="flex flex-wrap ">
           <div className="px-2 w-1/2">
          <div className="relative">
              <label htmlFor="firstName" className="block mb-1">
                İsim
              </label>
              <Field
                type="text"
                id="firstName"
                name="firstName"
                className="w-full p-2 border rounded bg-gray-900"
                value={values.firstName}
                onChange={handleChange}
              />
              <ErrorMessage name="firstName" component="small" className="text-xs mt-1 text-red-700" />
            </div>

            </div>
            <div className="px-2 w-1/2">
          <div className="relative">
              <label htmlFor="lastName" className="block mb-1">
                Soyadınız
              </label>
              <Field
                type="text"
                id="lastName"
                name="lastName"
                className="w-full p-2 border rounded bg-gray-900"
                value={values.lastName}
                onChange={handleChange}
              />
              <ErrorMessage name="lastName" component="small" className="text-xs mt-1 text-red-700" />
            </div>

            </div>
            </div>

            <div className="p-2 w-full">
          <div className="relative">
              <label htmlFor="email" className="block mb-1">
                Email
              </label>
              <Field
                type="email"
                id="email"
                name="email"
                className="w-full p-2 border rounded bg-gray-900"
                value={values.email}
                onChange={handleChange}
              />
              <ErrorMessage name="email" component="small" className="text-xs mt-1 text-red-700" />
            </div>
            </div>
            <div className="p-2 w-full">
          <div className="relative">
              <label htmlFor="text" className="block mb-1">
                Mesaj
              </label>
              <Field
                component="textarea"
                id="text"
                name="text"
                className="w-full h-40 p-2 border rounded bg-gray-900"
                value={values.text}
                onChange={handleChange}
              />
              <ErrorMessage name="text" component="small" className="text-xs mt-1 text-red-700" />
            </div>
            </div>
            <button type="submit" className="px-4 py-2 bg-red-500 text-white rounded">
              Submit
            </button>
          </Form>
        )}
      </Formik>
        
       
       
        <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
          <a className="text-red-500">example@email.com</a>
          <p className="leading-normal my-5">49 Smith St.
            <br/>Saint Cloud, MN 56301
          </p>
          <span className="inline-flex">
         
          </span>
        </div>
      </div>
    </div>
</section>
</>
  );
};

export default ContactForm;

