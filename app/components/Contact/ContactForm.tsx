'use client'
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import formSchema from './validationSchema/formSchema';
import ContactIcons from '../ContactIcons/ContactIcons';
import Link from 'next/link';

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
          <Form  onSubmit={handleSubmit} action={'https://getform.io/f/72e4b6a8-3479-4c9c-96ed-4a457b43b226'} method='POST'>
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
          <Link href="/" className="text-red-500">example@email.com</Link>
          <p className="leading-normal my-5">49 Smith St.
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

