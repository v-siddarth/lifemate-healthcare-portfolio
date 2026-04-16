import FadeIn from '../common/FadeIn';

const visionGoals = [
  {
    title: 'Advanced Technology Integration',
    description:
      'Implementing modern medical technologies and digital healthcare systems to deliver accurate, efficient, and high-quality patient care.',
    iconPath: 'M9 3v6M15 3v6M5 10h14M7 21h10a2 2 0 0 0 2-2v-7H5v7a2 2 0 0 0 2 2Z',
    iconBg: 'bg-[#1D9BF0]',
  },
  {
    title: 'Affordable Excellence in Healthcare',
    description:
      'Providing advanced and high-quality medical services at affordable pricing, ensuring accessible healthcare for both urban and rural communities.',
    iconPath: 'M12 20s-7-3.6-7-9V6l7-3 7 3v5c0 5.4-7 9-7 9Z',
    iconBg: 'bg-[#14C94A]',
  },
  {
    title: 'Patient-First Approach',
    description:
      'Prioritizing patient well-being at every step through ethical practices, compassionate care, and a commitment to better health outcomes.',
    iconPath: 'M12 20s-7-3.6-7-9V6l7-3 7 3v5c0 5.4-7 9-7 9Z M9.5 12.3l1.7 1.7 3.5-3.5',
    iconBg: 'bg-[#0E5A8A]',
  },
];

const VisionIcon = ({ iconPath, iconBg }) => (
  <span className={`inline-flex h-14 w-14 items-center justify-center rounded-xl text-white shadow-sm ${iconBg}`} aria-hidden>
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      {iconPath.split(' M').map((segment, index) => (
        <path key={`${segment}-${index}`} d={index === 0 ? segment : `M${segment}`} />
      ))}
    </svg>
  </span>
);

const VisionGoalsSection = () => {
  return (
    <section
      id="vision-goals"
      className="relative overflow-hidden bg-[linear-gradient(180deg,#FFFFFF_0%,#F4FAFF_100%)]"
      aria-label="LifeMate Healthcare Vision and Goals"
    >
      <div className="pointer-events-none absolute -left-20 top-16 h-64 w-64 rounded-full bg-[#1D9BF0]/7 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 bottom-10 h-64 w-64 rounded-full bg-[#14C94A]/8 blur-3xl" />

      <div className="lm-container py-20 md:py-24">
        <FadeIn className="mx-auto max-w-[860px] text-center">
          <p className="text-[14px] font-bold leading-6 tracking-[0.2px] text-[#1D9BF0]">Vision & Goals</p>
          <h2 className="mt-2 text-3xl font-bold leading-tight text-[#0F172A] md:text-4xl">Our Vision & Goals</h2>
          <p className="mx-auto mt-4 max-w-[740px] text-base leading-relaxed text-[#64748B] md:text-lg">
            Building the future of accessible, affordable, and technology-driven healthcare.
          </p>
        </FadeIn>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {visionGoals.map((item, index) => (
            <FadeIn
              key={item.title}
              delay={index * 120}
              className="group rounded-2xl border border-[#D9E6EE] bg-white p-6 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg md:p-8"
            >
              <VisionIcon iconPath={item.iconPath} iconBg={item.iconBg} />
              <h3 className="mt-5 text-xl font-semibold leading-tight text-[#0F172A]">{item.title}</h3>
              <div className="mt-4 h-[3px] w-[68px] rounded-full bg-[linear-gradient(90deg,#1D9BF0_0%,#0E5A8A_100%)]" />
              <p className="mt-5 text-base leading-relaxed text-[#64748B]">{item.description}</p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisionGoalsSection;
