import activityDoctor from '../../assets/activity-doctor.jpg';

const storyParagraphs = [
  'LifeMate Healthcare Pvt Ltd is built on a legacy of dedication, compassion, and a deep commitment to accessible and affordable healthcare. Over 50 years ago, Dr. D. B. Mate began his medical journey after completing his degree and serving at Sassoon Hospital. At a time when most doctors chose urban careers, he made a bold and selfless decision to serve rural communities across Pune. With a vision to bridge the healthcare gap, he established a multispeciality hospital in a rural region, delivering honest, affordable, and quality medical care to underserved populations. His work transformed countless lives, bringing hope and healing to thousands of families in villages where healthcare access was once limited.',
  'Carrying forward this powerful legacy, the next generation of the Mate family continued the mission with the same values and a stronger vision. Understanding the growing gap between urban healthcare advancements and rural accessibility, they introduced modern infrastructure, advanced medical technologies, diagnostic labs, and specialized treatments into rural healthcare systems. In 2015, this vision led to the establishment of a new super speciality hospital, which has now grown into a 100+ bed, high-technology healthcare center known for delivering affordable and accessible care without compromising on quality.',
  'Today, LifeMate Healthcare has evolved into a trusted healthcare network, expanding its presence with LifeMate Clinic in Pune city while continuing to strengthen its rural roots. From a single modest center to multiple healthcare units, the journey reflects a strong foundation built on patient-first care, community trust, and consistent medical excellence. LifeMate stands today as a symbol of ethical healthcare, bridging rural and urban medical standards, and continuing its mission of saving lives with compassion, innovation, and unwavering dedication.',
];

const roadmap = [
  {
    year: '1970s',
    title: 'Rural Foundation',
    detail: 'Dr. D. B. Mate established a patient-first multispeciality model for underserved villages across Pune.',
  },
  {
    year: 'Legacy',
    title: 'Community Trust',
    detail: 'Decades of ethical care built deep confidence, continuity, and lasting relationships with families.',
  },
  {
    year: '2015',
    title: 'Super Speciality Growth',
    detail: 'Modern infrastructure, advanced technology, and specialized treatment capabilities expanded the network.',
  },
  {
    year: 'Today',
    title: 'Connected Healthcare Network',
    detail: 'A 100+ bed facility and LifeMate Clinic now bridge rural strength with urban healthcare access.',
  },
];

const trustHighlights = [
  {
    label: '50+ Years',
    value: 'Legacy of trusted and compassionate care',
    iconPath: 'M12 8v5l3 2',
    iconBg: 'bg-[#1D9BF0]',
  },
  {
    label: '100+ Beds',
    value: 'Expanded treatment and patient capacity',
    iconPath: 'M7 9h10M7 12h10M7 15h6',
    iconBg: 'bg-[#14C94A]',
  },
  {
    label: 'Pune Region',
    value: 'Rural-to-urban continuity of care delivery',
    iconPath: 'M12 21s6-5.6 6-10a6 6 0 1 0-12 0c0 4.4 6 10 6 10Z M12 13a2.2 2.2 0 1 0 0-4.4 2.2 2.2 0 0 0 0 4.4Z',
    iconBg: 'bg-[#0E5A8A]',
  },
  {
    label: 'Founding Principle',
    value: 'Accessible and ethical healthcare for every community',
    iconPath: 'M12 20s-7-3.6-7-9V6l7-3 7 3v5c0 5.4-7 9-7 9Z',
    iconBg: 'bg-[#1D9BF0]',
  },
  {
    label: 'Growth Direction',
    value: 'Bridging rural trust with urban-grade infrastructure',
    iconPath: 'M7 17V9m5 8V7m5 10v-4',
    iconBg: 'bg-[#14C94A]',
  },
  {
    label: 'High Technologies',
    value: 'Advanced diagnostics, labs, and modern treatment systems',
    iconPath: 'M9 3v6M15 3v6M5 10h14M7 21h10a2 2 0 0 0 2-2v-7H5v7a2 2 0 0 0 2 2Z',
    iconBg: 'bg-[#0E5A8A]',
  },
];

const roadmapIcons = [
  { iconPath: 'M12 21s6-5.6 6-10a6 6 0 1 0-12 0c0 4.4 6 10 6 10Z M12 13a2.2 2.2 0 1 0 0-4.4 2.2 2.2 0 0 0 0 4.4Z', iconBg: 'bg-[#1D9BF0]' },
  { iconPath: 'M12 20s-7-3.6-7-9V6l7-3 7 3v5c0 5.4-7 9-7 9Z', iconBg: 'bg-[#14C94A]' },
  { iconPath: 'M7 17V9m5 8V7m5 10v-4', iconBg: 'bg-[#0E5A8A]' },
  { iconPath: 'M8 12h8M12 8v8M5.5 12a6.5 6.5 0 1 1 13 0 6.5 6.5 0 0 1-13 0Z', iconBg: 'bg-[#1D9BF0]' },
];

const HospitalStyledIcon = ({ iconPath, iconBg, variant = 'default' }) => (
  <span
    className={`inline-flex shrink-0 items-center justify-center text-white shadow-sm ${
      variant === 'roadmap' ? `h-14 w-14 rounded-xl ${iconBg}` : `h-14 w-14 rounded-xl ${iconBg}`
    }`}
    aria-hidden
  >
    <svg
      viewBox="0 0 24 24"
      className={variant === 'roadmap' ? 'h-6 w-6' : 'h-6 w-6'}
      fill="none"
      stroke="currentColor"
      strokeWidth={variant === 'roadmap' ? '2.4' : '2.2'}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {iconPath.split(' M').map((segment, index) => (
        <path key={`${segment}-${index}`} d={index === 0 ? segment : `M${segment}`} />
      ))}
    </svg>
  </span>
);

const FigmaActivitySection = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[linear-gradient(180deg,#FFFFFF_0%,#F5FAFF_52%,#FFFFFF_100%)]"
      aria-label="About LifeMate Healthcare section"
    >
      <div className="pointer-events-none absolute -left-20 top-24 h-64 w-64 rounded-full bg-[#1D9BF0]/10 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-10 h-72 w-72 rounded-full bg-[#14C94A]/10 blur-3xl" />

      <div className="lm-container relative py-24">
        <div className="grid items-center gap-6 md:gap-8 lg:grid-cols-2">
          <div className="relative">
            <div className="lm-card border border-[#D9E6EE]">
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-[linear-gradient(160deg,#F7FBFD_0%,#EAF4FB_100%)]">
                <div className="absolute left-[10%] top-[10%] h-[82%] w-[80%] rounded-[36%_64%_52%_48%/42%_36%_64%_58%] bg-[linear-gradient(145deg,#1D9BF0_0%,#0E5A8A_70%,#0E5A8A_100%)] shadow-[0_22px_40px_rgba(14,90,138,0.22)]" />
                <div className="absolute left-[9%] top-[13%] h-12 w-12 rounded-full bg-white/35 blur-sm" />
                <div className="absolute bottom-[16%] right-[10%] h-14 w-14 rounded-full bg-[#14C94A]/15 blur-md" />

                <div className="absolute inset-5 overflow-hidden rounded-xl border border-white/65 bg-white/35 backdrop-blur-[1px]">
                  <img
                    src={activityDoctor}
                    alt="Healthcare professional representing LifeMate Healthcare"
                    className="h-full w-full object-cover object-center"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
              {trustHighlights.map((item) => (
                <div
                  key={item.label}
                  className="lm-card flex h-full flex-col space-y-3 border border-[#D9E6EE] p-5 md:p-6"
                >
                  <HospitalStyledIcon iconPath={item.iconPath} iconBg={item.iconBg} />
                  <p className="text-[11px] font-bold uppercase tracking-[1.2px] text-[#1D9BF0]">{item.label}</p>
                  <p className="mt-2 min-h-[56px] text-base font-semibold leading-relaxed text-[#0F172A]">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full md:w-1/2 lg:w-full">
            <p className="text-[14px] font-bold leading-6 tracking-[0.2px] text-[#1D9BF0]">Company Story</p>
            <div className="mt-3 h-[4px] w-[72px] rounded-full bg-[#DC2626]" />

            <h2 className="mt-5 max-w-xl text-4xl font-bold leading-tight tracking-[0.2px] text-[#0F172A] md:text-5xl">
              A healthcare legacy shaped by service, expansion, and patient trust
            </h2>

            <div className="mt-6 max-w-xl space-y-4">
              {storyParagraphs.map((paragraph) => (
                <p key={paragraph} className="text-justify text-gray-500 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-[520px]">
              <p className="text-[12px] font-bold uppercase tracking-[1.4px] text-[#1D9BF0]">Growth Roadmap</p>
              <h3 className="mt-2 text-2xl font-semibold text-[#0F172A] md:text-3xl">
                From rural service beginnings to an integrated healthcare network
              </h3>
            </div>

            <a
              href="#hospitals"
              className="inline-flex items-center gap-[10px] text-[15px] font-bold leading-6 tracking-[0.2px] text-[#1D9BF0]"
            >
              View Network <span aria-hidden>›</span>
            </a>
          </div>

          <div className="relative mt-10 hidden h-[2px] w-full bg-[linear-gradient(90deg,rgba(29,155,240,0.22)_0%,rgba(29,155,240,0.16)_50%,rgba(20,201,74,0.2)_100%)] lg:block" />

          <div className="mt-8 grid gap-10 lg:grid-cols-4">
            {roadmap.map((item, index) => (
              <article
                key={item.title}
                className={`lm-card lm-card-hover group relative border border-[#D9E6EE] ${index % 2 === 1 ? 'lg:translate-y-6' : 'lg:-translate-y-1'}`}
              >
                <div className="absolute left-6 top-0 hidden h-4 w-4 -translate-y-1/2 rounded-full border-[4px] border-white bg-[#1D9BF0] shadow-[0_0_0_4px_rgba(31,169,217,0.16)] lg:block" />

                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-[1.3px] text-[#1D9BF0]">{item.year}</p>
                    <h4 className="mt-2 text-lg font-semibold leading-tight text-[#0F172A] md:text-xl">{item.title}</h4>
                  </div>
                  <HospitalStyledIcon
                    iconPath={roadmapIcons[index].iconPath}
                    iconBg={roadmapIcons[index].iconBg}
                    variant="roadmap"
                  />
                </div>

                <div className="mt-5 h-[3px] w-[58px] rounded-full bg-[linear-gradient(90deg,#1D9BF0_0%,#14C94A_100%)] opacity-75" />
                <p className="mt-5 text-sm text-gray-500 leading-relaxed">{item.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FigmaActivitySection;
