import testimonial1 from '../../assets/testimonial-1.png';
import testimonial2 from '../../assets/testimonial-2.png';
import testimonial3 from '../../assets/testimonial-3.png';

const testimonials = [
  {
    image: testimonial1,
    name: 'Patient Family Feedback',
    role: 'Community Trust Voice',
    quote:
      'The team treated us with empathy, clarity, and discipline. We always felt informed, respected, and cared for.',
  },
  {
    image: testimonial2,
    name: 'Hospital Service Feedback',
    role: 'Care Experience Review',
    quote:
      'Clean systems, responsive staff, and a smooth care process from consultation to follow-up. Highly dependable care.',
  },
  {
    image: testimonial3,
    name: 'Clinical Support Feedback',
    role: 'Patient Journey Review',
    quote:
      'LifeMate healthcare units combine professionalism with compassion. The care quality and communication are excellent.',
  },
];

const FigmaTestimonialsSection = () => {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-[linear-gradient(180deg,#f7fbfd_0%,#ffffff_100%)]"
      aria-label="Testimonials section"
    >
      <div className="pointer-events-none absolute -left-20 top-8 h-56 w-56 rounded-full bg-[#1D9BF0]/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-56 w-56 rounded-full bg-[#14C94A]/10 blur-3xl" />

      <div className="lm-container py-20 md:py-24">
        <div className="max-w-[760px]">
          <p className="text-[14px] font-bold leading-6 tracking-[0.2px] text-[#1D9BF0]">Testimonials</p>
          <h2 className="mt-2 text-2xl font-semibold text-[#0F172A] md:text-3xl">
            Trusted by Patients, Families, and Communities
          </h2>
          <p className="mt-4 text-gray-500 leading-relaxed">
            LifeMate Healthcare Pvt Ltd continues to grow through patient trust, transparent communication, and
            dependable clinical standards across every care unit.
          </p>
        </div>

        <div className="mt-10 space-y-6">
          {testimonials.map((item, idx) => (
            <article
              key={`${item.name}-${idx}`}
              className="lm-card group grid border border-[#D9E6EE] md:grid-cols-[220px_1fr] md:items-center"
            >
              <div className="flex items-center gap-3">
                <img
                  src={item.image}
                  alt={`${item.name} avatar`}
                  className="h-12 w-12 rounded-full object-cover ring-2 ring-[#EAF4FB]"
                  loading="lazy"
                />
                <div>
                  <p className="text-lg font-semibold text-[#0F172A]">{item.name}</p>
                  <p className="text-[12px] font-semibold uppercase tracking-[1px] text-[#1D9BF0]">{item.role}</p>
                </div>
              </div>

              <div className="border-l-4 border-[#1D9BF0] pl-4">
                <div className="mb-3 flex gap-[4px] text-[22px] leading-none">
                  <span className="text-yellow-400">★</span>
                  <span className="text-yellow-400">★</span>
                  <span className="text-yellow-400">★</span>
                  <span className="text-yellow-400">★</span>
                  <span className="text-yellow-400">★</span>
                </div>
                <p className="text-gray-500 leading-relaxed">"{item.quote}"</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FigmaTestimonialsSection;
