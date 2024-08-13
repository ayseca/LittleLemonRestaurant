import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email address').required('Email is required'),
  message: yup.string().required('Message is required')
});

const ContactForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data) => {
    console.log(data);
    // Handle form submission logic here
  };

  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Name:
          <input type="text" {...register('name')} />
          {errors.name && <p>{errors.name.message}</p>}
        </label>
        <label>
          Email:
          <input type="email" {...register('email')} />
          {errors.email && <p>{errors.email.message}</p>}
        </label>
        <label>
          Message:
          <textarea {...register('message')} />
          {errors.message && <p>{errors.message.message}</p>}
        </label>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default ContactForm;
