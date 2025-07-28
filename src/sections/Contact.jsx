import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import { DotLoader } from 'react-spinners';

export const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.placeholder.split(' ')[1].toLowerCase()]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsLoading(true);
    emailjs
      .send(
        'service_49t74pb', // thay bằng service ID trong EmailJS
        'template_0ul64fr', // thay bằng template ID trong EmailJS
        {
          name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        '2xQ32DaYWjAZWcJT0' // thay bằng public key (user ID) trong EmailJS
      )
      .then(
        (result) => {
          console.log('Email sent successfully!', result.text);
          setIsLoading(false);
          toast.success('Message sent successfully!');
          setFormData({ name: '', email: '', message: '' });
        },
        (error) => {
          console.error('Error sending email:', error.text);
          setIsLoading(false);
          toast.error('Failed to send message. Please try again later.');
        }
      );
  };

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center px-8 py-40 mt-10 md:px-16 lg:px-24 mb-10 text-sm text-white"
    >
      <h1 className="text-4xl font-bold text-purple mb-20">Contact with me</h1>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center w-full max-w-2xl gap-4"
      >
        <div className="flex flex-col md:flex-row items-center justify-center w-full gap-10">
          <input
            type="text"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="p-2 rounded w-full bg-[#1e293b] border border-[#334155] focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="p-2 rounded w-full bg-[#1e293b] border border-[#334155] focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
          />
        </div>

        <textarea
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          className="p-2 rounded w-full bg-[#1e293b] border border-[#334155] focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
          rows="5"
        ></textarea>

        <button
          type="submit"
          disabled={isLoading}
          className="
            flex justify-center items-center  w-[200px] h-[50px] bg-purple-500
            rounded-lg cursor-pointer 
            transition duration-300
            hover:bg-purple-600
            hover:scale-105
            mt-5 p-5
        "
        >
          {isLoading ? <DotLoader color="#100c0d" size={30} /> : 'Send Message'}
        </button>
      </form>
    </section>
  );
};
