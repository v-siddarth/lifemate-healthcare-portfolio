import activityDoctor from '../../assets/activity-doctor.jpg';

const storyParagraphs = [
  'LifeMate Healthcare Pvt Ltd is built on a legacy of compassion, trust, and a mission to deliver accessible, affordable, and quality healthcare.',
  'Over 50 years ago, Dr. D. B. Mate chose to serve rural communities after his tenure at Sassoon Hospital, establishing a multispeciality hospital that brought life-saving care to underserved villages across Pune.',
  'Continuing this vision, the next generation expanded healthcare access by introducing advanced technologies, modern infrastructure, and specialized treatments in rural areas. With the launch of a super speciality hospital in 2015, now a 100+ bed facility, LifeMate has grown into a trusted healthcare network. Today, with the addition of LifeMate Clinic in Pune city, the organization continues to bridge the gap between rural and urban healthcare, delivering ethical, patient-first care that has transformed thousands of lives.',
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
  { label: '50+ Years', value: 'Legacy of trusted care' },
  { label: '100+ Beds', value: 'Expanded treatment capacity' },
  { label: 'Pune Region', value: 'Rural to urban care delivery' },
  { label: 'Founding Principle', value: 'Accessible and ethical healthcare for every community' },
  { label: 'Growth Direction', value: 'Bridging rural trust with urban-quality infrastructure' },
];

const FigmaActivitySection = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[linear-gradient(180deg,#ffffff_0%,#f7fbfd_100%)]"
      aria-label="About LifeMate Healthcare section"
    >
      <div className="pointer-events-none absolute -left-20 top-24 h-64 w-64 rounded-full bg-[#1D9BF0]/8 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-10 h-72 w-72 rounded-full bg-[#14C94A]/8 blur-3xl" />

      <div className="lm-container relative py-24">
        <div className="grid items-center gap-6 md:gap-8 lg:grid-cols-2">
          <div className="relative">
            <div className="lm-card border border-[#D9E6EE]">
              <div className="relative h-[360px] overflow-hidden rounded-xl bg-[linear-gradient(145deg,#f3f9fd_0%,#e7f4fb_48%,#eef8f1_100%)] sm:h-[430px] lg:h-[500px]">
                <div className="absolute left-[10%] top-[13%] h-[70%] w-[78%] rounded-[42%_58%_54%_46%/44%_38%_62%_56%] bg-[linear-gradient(135deg,#1D9BF0_0%,#0E5A8A_62%,#14C94A_100%)] shadow-[0_30px_60px_rgba(14,90,138,0.18)]" />
                <div className="absolute left-[6%] top-[20%] h-14 w-14 rounded-full bg-white/45 blur-sm" />
                <div className="absolute bottom-[18%] right-[10%] h-20 w-20 rounded-full bg-[#14C94A]/18 blur-md" />
                <div className="absolute left-[6%] top-[74%] h-[2px] w-[72px] rotate-[-24deg] bg-[#0E5A8A]/75" />
                <div className="absolute left-[5%] top-[81%] h-[2px] w-[92px] rotate-[-24deg] bg-[#0E5A8A]/75" />

                <img
                  src={activityDoctor}
                  alt="Healthcare professional representing LifeMate Healthcare"
                  className="absolute bottom-0 left-[46%] h-[94%] w-auto -translate-x-1/2 object-contain drop-shadow-[0_22px_42px_rgba(15,23,42,0.16)]"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {trustHighlights.map((item) => (
                <div
                  key={item.label}
                  className="lm-card border border-[#D9E6EE] p-5 md:p-6"
                >
                  <p className="text-[11px] font-bold uppercase tracking-[1.2px] text-[#1D9BF0]">{item.label}</p>
                  <p className="mt-2 text-base font-semibold leading-relaxed text-[#0F172A]">{item.value}</p>
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
                <p key={paragraph} className="text-gray-500 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 rounded-xl border border-[#D9E6EE] bg-white p-6 shadow-sm md:p-8">
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

          <div className="relative mt-10 hidden h-[3px] w-full bg-[linear-gradient(90deg,#1D9BF0_0%,#A5D8F3_34%,#14C94A_100%)] lg:block" />

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
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#EAF4FB] text-[12px] font-bold text-[#0E5A8A]">
                    0{index + 1}
                  </span>
                </div>

                <div className="mt-5 h-[3px] w-[58px] rounded-full bg-[linear-gradient(90deg,#1D9BF0_0%,#14C94A_100%)]" />
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
