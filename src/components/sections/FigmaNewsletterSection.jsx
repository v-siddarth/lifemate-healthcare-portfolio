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
  },
  {
    label: 'Clinic Mobile',
    value: '+91 84596 12363',
  },
  {
    label: 'Clinic Landline',
    value: '+91 20 2997 2423',
  },
  {
    label: 'Email',
    value: 'lifematehealthcare@gmail.com',
  },
];

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
      className="relative overflow-hidden bg-[linear-gradient(180deg,#f7fbfd_0%,#ffffff_100%)]"
      aria-label="Contact LifeMate Healthcare section"
    >
      <div className="pointer-events-none absolute -left-20 top-10 h-72 w-72 rounded-full bg-[#1D9BF0]/8 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-8 h-72 w-72 rounded-full bg-[#14C94A]/8 blur-3xl" />

      <div className="relative mx-auto w-[min(1120px,95vw)] pb-[64px] pt-[58px] lg:pb-[84px] lg:pt-[76px]">
        <div className="rounded-[34px] border border-[#D9E6EE] bg-white/95 p-5 shadow-[0_22px_52px_rgba(14,90,138,0.08)] backdrop-blur sm:p-7 lg:p-8">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">
            <div className="rounded-[28px] bg-[linear-gradient(160deg,#0E5A8A_0%,#11496E_52%,#16384A_100%)] p-6 text-white shadow-[0_24px_48px_rgba(14,90,138,0.18)] lg:p-8">
              <p className="text-[12px] font-bold uppercase tracking-[1.5px] text-[#A5D8F3]">Contact Us</p>
              <h2 className="mt-4 text-[34px] font-bold leading-[1.08] tracking-[0.2px] text-white lg:text-[44px]">
                Enquiry Form
              </h2>
              <p className="mt-4 max-w-[420px] text-[16px] leading-8 text-white/82">
                Share your enquiry with LifeMate Healthcare and our team will respond with clarity, speed, and the right next step.
              </p>

              <div className="mt-8 space-y-4">
                {contactPoints.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-white/14 bg-white/8 px-4 py-4 backdrop-blur-sm"
                  >
                    <p className="text-[11px] font-bold uppercase tracking-[1.3px] text-[#A5D8F3]">{item.label}</p>
                    <p className="mt-2 text-[16px] font-semibold leading-7 text-white">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[28px] border border-[#D9E6EE] bg-[linear-gradient(180deg,#ffffff_0%,#fbfdff_100%)] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.95)] sm:p-6 lg:p-7">
              <div className="mb-6">
                <p className="text-[13px] font-bold leading-6 tracking-[0.2px] text-[#1D9BF0]">Share Your Details</p>
                <h3 className="mt-2 text-[30px] font-bold leading-[1.14] text-[#0F172A]">We will connect you with the right team</h3>
                <p className="mt-3 max-w-[520px] text-[15px] leading-7 text-[#64748B]">
                  Whether your enquiry is about hospitals, partnerships, medical services, or growth opportunities, this form routes your message to the appropriate LifeMate Healthcare team.
                </p>
              </div>

              <form className="space-y-5" onSubmit={onSubmit}>
                <div className="grid gap-4 sm:grid-cols-2">
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
                      className="h-[60px] w-full rounded-2xl border border-[#D9E6EE] bg-white px-5 text-[15px] text-[#0F172A] outline-none transition focus:border-[#1D9BF0] focus:ring-4 focus:ring-[#1D9BF0]/10 placeholder:text-[#94A3B8]"
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
                      className="h-[60px] w-full rounded-2xl border border-[#D9E6EE] bg-white px-5 text-[15px] text-[#0F172A] outline-none transition focus:border-[#1D9BF0] focus:ring-4 focus:ring-[#1D9BF0]/10 placeholder:text-[#94A3B8]"
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
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
                      className="h-[60px] w-full rounded-2xl border border-[#D9E6EE] bg-white px-5 text-[15px] text-[#0F172A] outline-none transition focus:border-[#1D9BF0] focus:ring-4 focus:ring-[#1D9BF0]/10 placeholder:text-[#94A3B8]"
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
                      className="h-[60px] w-full rounded-2xl border border-[#D9E6EE] bg-white px-5 text-[15px] text-[#0F172A] outline-none transition focus:border-[#1D9BF0] focus:ring-4 focus:ring-[#1D9BF0]/10"
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
                    className="w-full rounded-2xl border border-[#D9E6EE] bg-white px-5 py-4 text-[15px] leading-7 text-[#0F172A] outline-none transition focus:border-[#1D9BF0] focus:ring-4 focus:ring-[#1D9BF0]/10 placeholder:text-[#94A3B8]"
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

                <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-[13px] leading-6 text-[#64748B]">
                    Your details are handled with care and used only to respond to your enquiry.
                  </p>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex h-[56px] min-w-[220px] items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#1D9BF0_0%,#0E5A8A_100%)] px-7 text-[14px] font-bold uppercase tracking-[0.6px] text-white shadow-[0_16px_28px_rgba(29,155,240,0.22)] transition-transform duration-200 hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70"
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
