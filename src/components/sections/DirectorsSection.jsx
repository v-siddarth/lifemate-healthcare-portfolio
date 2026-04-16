const doctors = [
  {
    name: 'Dr. D. B. Mate',
    designation: 'Founding Visionary',
    summary:
      'Established the original healthcare foundation with a deep commitment to rural service, ethical treatment, and affordable access for underserved communities across Pune.',
  },
  {
    name: 'Dr. Ajay D. Mate',
    designation: 'Leadership and Operations',
    summary:
      'Strengthens institutional discipline, service reliability, and coordinated hospital performance while supporting steady expansion across LifeMate Healthcare units.',
  },
  {
    name: 'Dr. Swapnil D. Mate',
    designation: 'Clinical Direction and Growth',
    summary:
      'Leads medical quality standards, patient-first systems, and future-facing healthcare growth with a strong emphasis on outcomes, safety, and clinical excellence.',
  },
  {
    name: 'Dr. Rucha A. Mate',
    designation: 'Patient Care and Clinical Excellence',
    summary:
      'Supports compassionate care delivery, stronger patient experience, and evolving clinical practices that align modern treatment pathways with ethical service values.',
  },
  {
    name: 'Dr. Kshama S. Mate',
    designation: 'Healthcare Quality and Community Impact',
    summary:
      'Advances quality-focused care, professional coordination, and meaningful community health impact by helping align service excellence with accessible treatment.',
  },
];

const DirectorsSection = () => {
  return (
    <section
      id="directors"
      className="relative overflow-hidden bg-[linear-gradient(180deg,#ffffff_0%,#f7fbfd_100%)]"
      aria-label="LifeMate Healthcare directors and leadership team"
    >
      <div className="pointer-events-none absolute -right-24 top-0 h-72 w-72 rounded-full bg-[#1D9BF0]/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-20 bottom-10 h-64 w-64 rounded-full bg-[#14C94A]/10 blur-3xl" />

      <div className="lm-container py-20 md:py-24">
        <div className="max-w-[760px]">
          <p className="text-[14px] font-bold leading-6 tracking-[0.2px] text-[#1D9BF0]">Leadership Team</p>
          <h2 className="mt-2 text-2xl font-semibold text-[#0F172A] md:text-3xl">
            Leadership Guiding LifeMate Healthcare Forward
          </h2>
          <p className="mt-4 text-gray-500 leading-relaxed">
            LifeMate Healthcare Pvt Ltd is led by a multi-doctor leadership team rooted in service, clinical trust,
            operational discipline, and a long-term commitment to ethical healthcare growth across every unit.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 md:gap-8 xl:grid-cols-3">
          {doctors.map((doctor, index) => (
            <article
              key={doctor.name}
              className="lm-card group relative overflow-hidden border border-[#D9E6EE] hover:shadow-lg"
            >
              <div className="absolute inset-x-0 top-0 h-1.5 bg-[linear-gradient(90deg,#1D9BF0_0%,#0E5A8A_55%,#14C94A_100%)]" />
              <div className="pointer-events-none absolute right-[-18px] top-[-18px] h-28 w-28 rounded-full bg-[#EAF4FB] opacity-70 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />

              <div className="relative">
                <div className="flex items-start justify-between gap-4">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[linear-gradient(145deg,#EAF4FB_0%,#F7FBFD_100%)] text-[14px] font-extrabold text-[#0E5A8A] shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]">
                    0{index + 1}
                  </div>
                  <span className="inline-flex items-center rounded-full border border-[#D9E6EE] bg-[#F8FBFD] px-3 py-1 text-[11px] font-bold uppercase tracking-[1.1px] text-[#0E5A8A]">
                    LifeMate Leadership
                  </span>
                </div>

                <h3 className="mt-6 text-lg font-semibold leading-tight text-[#0F172A] md:text-xl">{doctor.name}</h3>
                <p className="mt-3 text-[12px] font-bold uppercase tracking-[1.4px] text-[#1D9BF0]">{doctor.designation}</p>
                <div className="mt-5 h-[3px] w-[64px] rounded-full bg-[linear-gradient(90deg,#1D9BF0_0%,#14C94A_100%)]" />

                <p className="mt-5 text-sm text-gray-500 leading-relaxed">{doctor.summary}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DirectorsSection;
