'use client'
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import formSchema from './validationSchema/formSchema';
import ContactIcons from '../ContactIcons/ContactIcons';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
interface formikValues {
  firstName: string;
  lastName: string;
  email: string;
  text: string;
}

const ContactForm = () => {
 const {t} = useTranslation();

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
<section className="relative py-5 body-font">
  <div className="max-w-6xl px-5 py-6 mx-auto bg-gray-600 ">
   
    <div className="mx-auto lg:w-1/2 md:w-2/3">
      <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={formSchema}>
        {({ handleSubmit, values, handleChange }) => (
          <Form  onSubmit={handleSubmit} action={'https://getform.io/f/72e4b6a8-3479-4c9c-96ed-4a457b43b226'} method='POST'>
       <div className="flex flex-wrap ">
           <div className="w-1/2 px-2">
          <div className="relative">
              <label htmlFor="firstName" className="block mb-1">
                İsim
              </label>
              <Field
                type="text"
                id="firstName"
                name="firstName"
                className="w-full p-2 bg-gray-900 border rounded"
                value={values.firstName}
                onChange={handleChange}
              />
              <ErrorMessage name="firstName" component="small" className="mt-1 text-xs text-red-700" />
            </div>

            </div>
            <div className="w-1/2 px-2">
          <div className="relative">
              <label htmlFor="lastName" className="block mb-1">
                Soyadınız
              </label>
              <Field
                type="text"
                id="lastName"
                name="lastName"
                className="w-full p-2 bg-gray-900 border rounded"
                value={values.lastName}
                onChange={handleChange}
              />
              <ErrorMessage name="lastName" component="small" className="mt-1 text-xs text-red-700" />
            </div>

            </div>
            </div>

            <div className="w-full p-2">
          <div className="relative">
              <label htmlFor="email" className="block mb-1">
                Email
              </label>
              <Field
                type="email"
                id="email"
                name="email"
                className="w-full p-2 bg-gray-900 border rounded"
                value={values.email}
                onChange={handleChange}
              />
              <ErrorMessage name="email" component="small" className="mt-1 text-xs text-red-700" />
            </div>
            </div>
            <div className="w-full p-2">
          <div className="relative">
              <label htmlFor="text" className="block mb-1">
                {t('Mesaj')}
              </label>
              <Field
                component="textarea"
                id="text"
                name="text"
                className="w-full h-40 p-2 bg-gray-900 border rounded"
                value={values.text}
                onChange={handleChange}
              />
              <ErrorMessage name="text" component="small" className="mt-1 text-xs text-red-700" />
            </div>
            </div>
            <button type="submit" className="px-4 py-2 text-white bg-red-500 rounded">
              Gönder
            </button>
          </Form>
        )}
      </Formik>
        
       
       
        <div className="w-full p-2 pt-8 mt-8 text-center border-t border-gray-200">
          <Link href="/" className="text-red-500">ademsari41@hotmail.com</Link>
          <p className="my-5 leading-normal">Piyale Paşa Mahallesi 624. sokak no:2
          </p>
          <p>+90 537 495 7296</p>
            <p>+90 262 414 94 73</p>

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

