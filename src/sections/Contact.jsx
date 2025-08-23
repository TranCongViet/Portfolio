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
      className="mt-10 mb-10 flex flex-col items-center justify-center px-8 py-40 text-sm text-white md:px-16 lg:px-24"
    >
      <h1 className="text-purple mb-20 text-4xl font-bold">Contact with me</h1>

      <form
        onSubmit={handleSubmit}
        className="flex w-full max-w-2xl flex-col items-center gap-4"
      >
        <div className="flex w-full flex-col items-center justify-center gap-10 md:flex-row">
          <input
            type="text"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full rounded border border-[#334155] bg-[#1e293b] p-2 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 focus:outline-none"
          />
          <input
            type="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full rounded border border-[#334155] bg-[#1e293b] p-2 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 focus:outline-none"
          />
        </div>

        <textarea
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full rounded border border-[#334155] bg-[#1e293b] p-2 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 focus:outline-none"
          rows="5"
        ></textarea>

        <button
          type="submit"
          disabled={isLoading}
          className="mt-5 flex h-[50px] w-[200px] cursor-pointer items-center justify-center rounded-lg bg-purple-500 p-5 transition duration-300 hover:scale-105 hover:bg-purple-600"
        >
          {isLoading ? <DotLoader color="#100c0d" size={30} /> : 'Send Message'}
        </button>
      </form>
    </section>
  );
};
