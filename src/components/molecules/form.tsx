"use client";
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

// Define the validation schema using Zod
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(5, { message: "Message must be at least 5 characters." }),
});

const Form = () => {
  const [successMessage, setSuccessMessage] = useState('');

  // Use React Hook Form with Zod validation
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  // Form submit handler
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        access_key: '4ab24ab2-3d0c-40cc-8dcd-c5c7alcf5a87', // Your access key
        name: values.name,
        email: values.email,
        message: values.message,
      }),
    });

    const result = await response.json();
    if (result.success) {
      reset();
      setSuccessMessage('Message sent Successfully!');
      setTimeout(() => {
        setSuccessMessage('');
      }, 5000);
    } else {
      console.error('Error submitting form:', result);
    }
  };

  return (
    <div className="w-full md:w-1/2 flex items-center justify-center p-8">
      <div className="max-w-md w-full">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Let's <span className="text-yellow-400">talk</span>
        </h1>
        <p className="text-gray-300 mb-8">
          To request a quote or want to meet up for coffee, contact me directly or fill out the form and I will get
          back to you soon.
        </p>

        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="name" className="sr-only">
              Your Name
            </label>
            <input
              {...register('name')}
              type="text"
              id="name"
              placeholder="Your Name"
              className={`w-full p-5 rounded bg-gray-800 border-none focus:ring-2 focus:ring-yellow-400 focus:outline-none ${errors.name ? 'border-red-500' : ''}`}
            />
            {errors.name && <p className="text-red-500">{errors.name.message}</p>}
          </div>

          <div>
            <label htmlFor="email" className="sr-only">
              Your Email
            </label>
            <input
              {...register('email')}
              type="email"
              id="email"
              placeholder="Your Email"
              className={`w-full p-5 rounded bg-gray-800 border-none focus:ring-2 focus:ring-yellow-400 focus:outline-none ${errors.email ? 'border-red-500' : ''}`}
            />
            {errors.email && <p className="text-red-500">{errors.email.message}</p>}
          </div>

          <div>
            <label htmlFor="message" className="sr-only">
              Your Message
            </label>
            <textarea
              {...register('message')}
              id="message"
              rows={8}
              placeholder="Type your message here..."
              className={`w-full p-5 rounded bg-gray-800 border-none focus:ring-2 focus:ring-yellow-400 focus:outline-none resize-none ${errors.message ? 'border-red-500' : ''}`}
            ></textarea>
            {errors.message && <p className="text-red-500">{errors.message.message}</p>}
          </div>

          <button
            type="submit"
            className="w-full md:w-auto px-10 py-4 bg-yellow-400 text-black font-medium rounded hover:bg-yellow-500 transition-colors"
          >
            SEND MESSAGE
          </button>
        </form>

        {successMessage && <p className="text-green-500 mt-4">{successMessage}</p>}
      </div>
    </div>
  );
};

export default Form;
