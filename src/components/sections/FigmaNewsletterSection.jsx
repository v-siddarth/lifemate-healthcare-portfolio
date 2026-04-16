import { useState } from 'react';
import { submitContactForm } from '../../utils/api';

const initialState = {
  name: '',
  phone: '',
  email: '',
  enquiryType: '',
  message: '',
};

const contactPoints = [
  {
    label: 'Response Window',
    value: 'Within 1-2 business days',
    iconPath: 'M8 3v3M16 3v3M4 9h16M6 21h12a2 2 0 0 0 2-2V9H4v10a2 2 0 0 0 2 2Z',
    iconBg: 'bg-[#1D9BF0]',
  },
  {
    label: 'Clinic Mobile',
    value: '+91 84596 12363',
    iconPath: 'M8.5 4h7a1.5 1.5 0 0 1 1.5 1.5v13A1.5 1.5 0 0 1 15.5 20h-7A1.5 1.5 0 0 1 7 18.5v-13A1.5 1.5 0 0 1 8.5 4Z M11 17h2',
    iconBg: 'bg-[#14C94A]',
  },
  {
    label: 'Clinic Landline',
    value: '+91 20 2997 2423',
    iconPath: 'M4 5h16v12H4z M9 18h6',
    iconBg: 'bg-[#0E5A8A]',
  },
  {
    label: 'Email',
    value: 'lifematehealthcare@gmail.com',
    iconPath: 'M4 7h16v10H4z M4 8l8 6 8-6',
    iconBg: 'bg-[#1D9BF0]',
  },
];

const ContactPointIcon = ({ iconPath, iconBg }) => (
  <span className={`inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-white shadow-sm ${iconBg}`} aria-hidden>
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
      {iconPath.split(' M').map((segment, index) => (
        <path key={`${segment}-${index}`} d={index === 0 ? segment : `M${segment}`} />
      ))}
    </svg>
  </span>
);

const FigmaNewsletterSection = () => {
  const [formData, setFormData] = useState(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState({ type: '', message: '' });

  const onChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    try {
      setIsSubmitting(true);
      setResult({ type: '', message: '' });

      const response = await submitContactForm({
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        subject: formData.enquiryType || 'General enquiry',
        message: formData.message,
      });

      setResult({
        type: 'success',
        message: response.message || 'Thank you. Our team will connect with you shortly.',
      });
      setFormData(initialState);
    } catch (error) {
      setResult({
        type: 'error',
        message: error.message || 'Something went wrong. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[linear-gradient(90deg,#F7FBFD_0%,#F7FBFD_52%,#FFFFFF_52%,#FFFFFF_100%)]"
      aria-label="Contact LifeMate Healthcare section"
    >
      <div className="pointer-events-none absolute -left-20 top-10 h-72 w-72 rounded-full bg-[#1D9BF0]/8 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-8 h-72 w-72 rounded-full bg-[#14C94A]/8 blur-3xl" />

      <div className="lm-container py-20 md:py-24">
        <div>
          <div className="grid items-stretch gap-6 md:gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="relative overflow-hidden rounded-2xl border border-[#D9E6EE] bg-[linear-gradient(180deg,#FFFFFF_0%,#F3F9FF_100%)] p-6 shadow-sm md:p-8">
              <div className="pointer-events-none absolute right-[-48px] top-[-48px] h-40 w-40 rounded-full bg-[#1D9BF0]/8 blur-2xl" />
              <div className="pointer-events-none absolute bottom-[-36px] left-[-42px] h-32 w-32 rounded-full bg-[#14C94A]/10 blur-2xl" />
              <p className="text-[12px] font-bold uppercase tracking-[1.5px] text-[#1D9BF0]">Contact Us</p>
              <h2 className="mt-4 text-2xl font-semibold text-[#0F172A] md:text-3xl">
                Enquiry Form
              </h2>
              <p className="mt-4 max-w-[420px] text-[#5B6B80] leading-relaxed">
                Share your enquiry with LifeMate Healthcare and our team will respond with clarity, speed, and the right next step.
              </p>

              <div className="mt-8 space-y-4">
                {contactPoints.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-[#D9E6EE] bg-white px-4 py-4"
                  >
                    <div className="flex items-center gap-3">
                      <ContactPointIcon iconPath={item.iconPath} iconBg={item.iconBg} />
                      <div>
                        <p className="text-[11px] font-bold uppercase tracking-[1.3px] text-[#1D9BF0]">{item.label}</p>
                        <p className="mt-1 text-base font-semibold leading-relaxed text-[#0F172A]">{item.value}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl bg-[linear-gradient(180deg,#ffffff_0%,#fbfdff_100%)] p-6 shadow-[0_12px_30px_rgba(15,23,42,0.06)] md:p-8">
              <div className="mb-6">
                <p className="text-[13px] font-bold leading-6 tracking-[0.2px] text-[#1D9BF0]">Share Your Details</p>
                <h3 className="mt-2 text-2xl font-semibold text-[#0F172A] md:text-3xl">We will connect you with the right team</h3>
                <p className="mt-3 max-w-[520px] text-gray-500 leading-relaxed">
                  Whether your enquiry is about hospitals, partnerships, medical services, or growth opportunities, this form routes your message to the appropriate LifeMate Healthcare team.
                </p>
              </div>

              <form className="space-y-6" onSubmit={onSubmit}>
                <div className="grid gap-4 sm:grid-cols-2 md:gap-6">
                  <div>
                    <label htmlFor="enquiry-name" className="mb-2 block text-[12px] font-bold uppercase tracking-[1.1px] text-[#0E5A8A]">
                      Full Name
                    </label>
                    <input
                      id="enquiry-name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={onChange}
                      required
                      placeholder="Enter your full name"
                      className="h-[60px] w-full rounded-2xl border border-transparent bg-[#F7FAFE] px-5 text-[15px] text-[#0F172A] outline-none transition focus:border-[#BFDAEE] focus:bg-white focus:ring-4 focus:ring-[#1D9BF0]/10 placeholder:text-[#94A3B8]"
                    />
                  </div>
                  <div>
                    <label htmlFor="enquiry-phone" className="mb-2 block text-[12px] font-bold uppercase tracking-[1.1px] text-[#0E5A8A]">
                      Phone Number
                    </label>
                    <input
                      id="enquiry-phone"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={onChange}
                      required
                      placeholder="Enter your phone number"
                      className="h-[60px] w-full rounded-2xl border border-transparent bg-[#F7FAFE] px-5 text-[15px] text-[#0F172A] outline-none transition focus:border-[#BFDAEE] focus:bg-white focus:ring-4 focus:ring-[#1D9BF0]/10 placeholder:text-[#94A3B8]"
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 md:gap-6">
                  <div>
                    <label htmlFor="enquiry-email" className="mb-2 block text-[12px] font-bold uppercase tracking-[1.1px] text-[#0E5A8A]">
                      Email Address
                    </label>
                    <input
                      id="enquiry-email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={onChange}
                      required
                      placeholder="Enter your email"
                      className="h-[60px] w-full rounded-2xl border border-transparent bg-[#F7FAFE] px-5 text-[15px] text-[#0F172A] outline-none transition focus:border-[#BFDAEE] focus:bg-white focus:ring-4 focus:ring-[#1D9BF0]/10 placeholder:text-[#94A3B8]"
                    />
                  </div>
                  <div>
                    <label htmlFor="enquiry-type" className="mb-2 block text-[12px] font-bold uppercase tracking-[1.1px] text-[#0E5A8A]">
                      Enquiry Type
                    </label>
                    <select
                      id="enquiry-type"
                      name="enquiryType"
                      value={formData.enquiryType}
                      onChange={onChange}
                      required
                      className="h-[60px] w-full rounded-2xl border border-transparent bg-[#F7FAFE] px-5 text-[15px] text-[#0F172A] outline-none transition focus:border-[#BFDAEE] focus:bg-white focus:ring-4 focus:ring-[#1D9BF0]/10"
                    >
                      <option value="" disabled>
                        Select enquiry type
                      </option>
                      <option value="General Enquiry">General Enquiry</option>
                      <option value="Hospital Information">Hospital Information</option>
                      <option value="Partnership">Partnership</option>
                      <option value="Career and CarrerMed">Career and CarrerMed</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="enquiry-message" className="mb-2 block text-[12px] font-bold uppercase tracking-[1.1px] text-[#0E5A8A]">
                    Your Message
                  </label>
                  <textarea
                    id="enquiry-message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={onChange}
                    required
                    placeholder="Tell us about your enquiry"
                    className="w-full rounded-2xl border border-transparent bg-[#F7FAFE] px-5 py-4 text-[15px] leading-7 text-[#0F172A] outline-none transition focus:border-[#BFDAEE] focus:bg-white focus:ring-4 focus:ring-[#1D9BF0]/10 placeholder:text-[#94A3B8]"
                  />
                </div>

                {result.message ? (
                  <p
                    className={`rounded-2xl px-4 py-4 text-[14px] font-medium ${
                      result.type === 'success'
                        ? 'border border-[#C7F0D4] bg-[#F1FBF4] text-[#0D8A32]'
                        : 'border border-[#F8D2D2] bg-[#FFF5F5] text-[#B91C1C]'
                    }`}
                  >
                    {result.message}
                  </p>
                ) : null}

                <div className="mt-6 flex flex-col gap-3 pt-1 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-[13px] leading-6 text-[#64748B]">
                    Your details are handled with care and used only to respond to your enquiry.
                  </p>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex h-[56px] min-w-[220px] items-center justify-center rounded-xl bg-[linear-gradient(135deg,#1D9BF0_0%,#0E5A8A_100%)] px-7 text-[14px] font-bold uppercase tracking-[0.6px] text-white shadow-sm transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {isSubmitting ? 'Submitting Enquiry...' : 'Send Enquiry'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FigmaNewsletterSection;
